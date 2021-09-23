describe('User Search Test', () => {
  it('Visits user search page', () => {
    cy.visit('/');
    cy.get('app-search > .container > app-user > .user > .id + .name');
  });

  it('User id changes after some seconds', () => {
    cy.get('.id').first().invoke('text').then(id => {
      cy.wait(5000);
      cy.get('.id').first().should('not.contain.text', id);
    });
    cy.get('.name').first().invoke('text').then(name => {
      cy.wait(5000);
      cy.get('.name').first().should('contain.text', name);
    });
  });
});
