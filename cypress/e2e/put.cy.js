
describe('API Test', () => {
  let authToken = 'e9ac1b4be52d4449a646692c7692c6378b4321ab4d3740b089ca7ee94ae3d467';
  let noteId; 

  it('should post a note', () => {
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': authToken,
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
      body: {
        title: 'Test Note',
        content: 'This is a test note.',
        description: 'This is a description',
        category: 'Home',
        },
    }).then((response) => {
      expect(response.status).to.equal(200);
      noteId = response.body.data.id; // Store the created note's ID
    });
  });

  it('should update the posted note by id', () => {
    const updatedTitle = 'Updated Note Title';
    const updatedDescription = 'This is an updated description';

    cy.request({
      method: 'PUT',
      url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`, // Use the stored noteId
      headers: {
        'x-auth-token': authToken,
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
      body: {
        title: 'Test Note Updated',
        content: 'This is a test note Updated',
        description: 'This is a descriptionUpdated',
        category: 'Work',
        completed: true,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

    })
    })

    it('should fail to update the posted note by id', () => {
      const updatedTitle = 'Updated Note Title';
      const updatedDescription = 'This is an updated description';
  
      cy.request({
        method: 'PUT',
        url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`, // Use the stored noteId
        headers: {
          'x-auth-token': authToken,
          "Content-Type": "application/json",
        },
        failOnStatusCode: false,
        body: {
          title: 'Test Note Updated',
          content: 'This is a test note Updated',
          description: 'This is a descriptionUpdated',
          category: 'Workkk',
          completed: true,
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
  
      })
      })
});
