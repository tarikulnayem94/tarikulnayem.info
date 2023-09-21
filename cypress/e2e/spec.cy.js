describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    // cy.get('#APjFqb').should('not.have.value', '>1')

    var Nvalue = cy.get('#APjFqb').type(.5)

    // cy.get('div').invoke('text').then(parseFloat).should('be.gt', 1);

    // console.log(Nvalue)

    // cy.get(Nvalue).should('be.greater', 1);

    function validAmount(Nvalue, max = 1000, min = 1) 
    {
      return Nvalue > min && Nvalue < max;
      cy.task();
    }

    // cy.wrap(Nvalue).should('be.greater', 1);

// 
  })
})

    // cy.get('div').invoke('text').then(parseFloat).should('be.gt', 1);

    // const my_value = 5000.00;

    // cy.wrap(my_value).should('be.gt', 4999.99); // greater than
    // cy.wrap(my_value).should('be.gte', 5000); // greater than equal to

    // cy.wrap(my_value).should('be.lt', 5000.1); // less than
    // cy.wrap(my_value).should('be.lte', 5000); // less than equal to
    // cy.get('input')
    //   .invoke('val')                         
    //   .then(val => +val)                     
    //   .then(val => console.log())