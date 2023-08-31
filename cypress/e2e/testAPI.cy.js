
describe('API Test', () => {
  let authToken = 'e9ac1b4be52d4449a646692c7692c6378b4321ab4d3740b089ca7ee94ae3d467';

  it('should register a new user', () => {
    cy.request('POST', 'https://practice.expandtesting.com/notes/api/api-docs/#/Users/post_users_register', {
      username: 'adrianmarculescu@gmail.com',
      password: 'test123*',
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should log in and recover the token', () => {
    cy.request('POST', 'https://practice.expandtesting.com/notes/api/api-docs/#/Users/post_users_login', {
      username: 'adrianmarculescu.ing@gmail.com',
      password: 'test123*', 
    }).then((response) => {
      expect(response.status).to.equal(200);
          });
  });

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

      // Extract the ID of the created note
    const noteId = response.body.data.id;
    });
  });

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

  
  
  it('should delete the posted note by id', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://practice.expandtesting.com/notes/api/notes/'+ noteId, // Replace {noteId} with the actual note ID
      headers: {
        'x-auth-token': authToken,
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});