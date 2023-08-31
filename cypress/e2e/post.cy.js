
describe('API Test', () => {
  let authToken = 'e9ac1b4be52d4449a646692c7692c6378b4321ab4d3740b089ca7ee94ae3d467';

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

    });
  });

it('should fail to post a note', () => {
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
        category: 'Homee',
      },
    }).then((response) => {
      expect(response.status).to.equal(400);

    });
  });

});