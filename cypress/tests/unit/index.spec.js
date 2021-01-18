describe("Default Home page without login", function () {
  context('Default state', () => {
    it('Should have default elements', () => {
        cy.visit('/')

        cy.get('nav.navbar > a.navbar-brand')
          .should('contain', 'Home')

          cy.get('nav.navbar > ul.navbar-nav > li.nav-item')
          .find('[href="#/signin"]')
          .should('contain', 'Sign In')

          cy.get('nav.navbar > ul.navbar-nav > li.nav-item')
          .find('[href="#/signup"]')
          .should('contain', 'Sign Up')
    })
  })
  context('Navigation menu links', () => {
    describe('On click of SignIn link at home page', () => {
      it('It should navigate to signin page', () => {
          cy.visit('/')

          cy.get('[href="#/signin"]')
            .should('have.class', 'nav-link')
            .click()
            .then(() => {
              console.log('test');
                cy.url()
                .should('include', '/#/signin')
            })
      })
    })

    describe('On click of SignUp link at home page', () => {
      it('It should navigate to signup page', () => {
          cy.visit('/')

          cy.get('[href="#/signup"]')
            .should('have.class', 'nav-link')
            .click()
            .then(() => {
                cy.url()
                .should('include', '/#/signup')
            })
      })
    })
  })
})