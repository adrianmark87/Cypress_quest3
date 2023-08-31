
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
    cy.fixture('userData').then(user=>{cy.request('POST', 'https://practice.expandtesting.com/notes/api/api-docs/#/Users/post_users_login', {
      username: 'user.username',
      password: 'user.password', 
    }).then((response) => {
      expect(response.status).to.equal(200);
    })
  });
});
});