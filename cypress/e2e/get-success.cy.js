
describe('API Test', () => {
  let authToken = 'e9ac1b4be52d4449a646692c7692c6378b4321ab4d3740b089ca7ee94ae3d467';

 it('should get and verify the all the notes', () => {
    cy.request({
      method: 'GET',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': authToken,
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.equal(200);
      expect(response.body.data.length).to.be.at.least(1);
      // You can add more assertions based on your API response structure
    });
  });

  it('should get and verify the note by title', () => {
    cy.request({
      method: 'GET',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': authToken,
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.equal(200); const notes = response.body.data;
      const targetTitle = 'Test Note'; // Replace with the title you want to search for
  
      // Check if there's at least one note with the target title
      const noteWithTitle = notes.find(note => note.title === targetTitle);
      expect(noteWithTitle).to.exist; // Assert that a note with the target title exists
      // You can add more assertions based on your API response structure
      
      
    });
  });

  it('should get and verify the note by category', () => {
    cy.request({
      method: 'GET',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': authToken,
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.equal(200); const notes = response.body.data;
      const targetCategory = 'Home'; // Replace with the category you want to search for
  
      // Check if there's at least one note with the target category
      const noteWithCategory = notes.find(note => note.category === targetCategory);
      expect(noteWithCategory).to.exist; // Assert that a note with the target category exists
      // You can add more assertions based on your API response structure
    });
  });
});