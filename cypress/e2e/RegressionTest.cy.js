const urls = [
  'https://app.rpgmatch.org/about',
  'https://app.rpgmatch.org/privacy',
  'https://app.rpgmatch.org/community-guidelines'
]
Cypress.config('experimentalSessionSupport', true)

beforeEach(function () {
 
    
  cy.viewport(1400, 900)

})
describe('Verify RPG Match web site is up and running', () => {
  defaultCommandTimeout: 20000
  it('Open Main RPG Match URL', () => {
    cy.visit('https://www.rpgmatch.org')
  })


  it('Click in Sign Up button', () => {
    cy.get('.wp-block-button__link').should('have.text', 'Sign Up For Free')
    cy.log('Sign Up For Free button validated')
    cy.get('.wp-block-button__link').click()
  })

 
  it('Validate Sign Up for free button takes to right URL', () => {
    cy.url().should('include', 'https://app.rpgmatch.org/') // => true
  })

  


  it('Perform Login', () => {
    cy.get('#radix-2-trigger-0')
      .click()
    cy.get('input[placeholder*="Email"]').type('nadymf@gmail.com')
    cy.get('input[placeholder*="Password"]').type('Test1234!')
    cy.get('.amplify-button--primary').click()
    cy.wait(5000)
  })

  it('Validate URL', () => {
    cy.url().should('include', 'https://app.rpgmatch.org/profile') // => true
    cy.wait(5000)
  })


  urls.forEach(url => {
  describe(`Loading URL: ${url}`, () => {
    
    it('Opening URL', function () {
      cy.visit(url)
      cy.wait(1000);
      cy.log('Validation Complete')
    })
  })


})
})