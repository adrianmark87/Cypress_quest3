
describe('API Test', () => {
  let authToken = 'e9ac1b4be52d4449a646692c7692c6378b4321ab4d3740b089ca7ee94ae3d467';

 it('should fail to get all notes', () => {
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
    });
  });
 
 it('should fail to get a note by title', () => {
    const targetTitle = 'Nonexistent Note Title'; // Replace with a title that doesn't exist
  
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
      const noteWithTitle = notes.find(note => note.title === targetTitle);
      expect(noteWithTitle).to.not.exist; // Expecting the note not to exist
    });
  });
  

 it('should fail to get a note by category', () => {
    const targetCategory = 'Nonexistent Category'; // Replace with a category that doesn't exist
  
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
      const noteWithCategory = notes.find(note => note.category === targetCategory);
      expect(noteWithCategory).to.not.exist; // Expecting the note not to exist
    });
  });
  
});