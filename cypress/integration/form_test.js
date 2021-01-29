describe('Pizza form tests',()=>{
  beforeEach(()=>cy.visit('http://localhost:3000/pizza'));

  it('types in the name input',()=>{
    cy.get('#username').type('sample').should('have.value','sample');
  });

  it('selects multiple toppings',()=>{
    cy.get('#pepperoni').click().should('have.checked');
    cy.get('#mushrooms').click().should('have.checked');
  });

  it('chooses a size', ()=>{
    cy.get('#size').select("12").should('have.value','12');
  })

  it('submits the form',()=>{
    cy.get('#username').type('sample');
    cy.get('#size').select("12");
    cy.get('button').click();
    cy.get('#username').should('have.value','');
  })
})