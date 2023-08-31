
describe('API Test', () => {
  let authToken = 'e9ac1b4be52d4449a646692c7692c6378b4321ab4d3740b089ca7ee94ae3d467';

   it('should delete the posted note by id', () => {
    // First, you need to create a note and get its ID
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
        description: 'This is a description',
        category: 'Home',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
  
      // Extract the ID of the created note
      const noteId = response.body.data.id;
  
      // Now, use the extracted noteId to delete the note
      cy.request({
        method: 'DELETE',
        url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`, // Use the extracted noteId
        headers: {
          'x-auth-token': authToken,
          "Content-Type": "application/json",
        },
        failOnStatusCode: false,
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.equal(200);
      });
    });
  });

  it('should fail to delete a non-existent note', () => {
    const nonExistentNoteId = '123456789012345678901234'; // Replace with a non-existent note ID

    cy.request({
      method: 'DELETE',
      url: `https://practice.expandtesting.com/notes/api/notes/${nonExistentNoteId}`,
      headers: {
        'x-auth-token': authToken,
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.equal(404); // Expecting a 404 Not Found status
    });
  });
});