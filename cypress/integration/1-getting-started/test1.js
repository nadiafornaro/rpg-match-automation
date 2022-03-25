describe('Validate RPG Match User List page, links, images, User list and About US and Privacy Policy Page', () => {
    it('go to RPG Match User List Page', () => {
      cy.visit('https://development.d11qv011ey7pau.amplifyapp.com/')

    })
 
    it('Validate if response code is equal to 200', () => {
      cy.request('https://development.d11qv011ey7pau.amplifyapp.com/')
      .should((response) => {
        expect(response.status).to.eq(200)
        cy.wait(1000)
      })
    })


    it('Validate if image is correct', () => {
      cy.get('a > .amplify-image')
      .should('have.attr', 'src', '/main_logo.png')
      cy.wait(1000)
      })

    it('Validate if Top Nav has about us', () => {
      cy.get(':nth-child(2) > a > .amplify-text')
     .should('have.text', 'About Us')
        })


    it('Validate if Top Nav has Privacy Policy', () => {
      cy.get(':nth-child(3) > a > .amplify-text')
         .should('have.text', 'Privacy Policy')
         cy.wait(1000)
        })

    it('User list must be displayed', () => {
      cy.get('.boil-center')
             .should('have.text', 'User List')
             cy.scrollTo('bottom')
             cy.wait(1000)
             cy.scrollTo('top')
             cy.wait(1000)
             cy.scrollTo('bottom')
       })

     

      

       it('Navigate through User List, url remains the same', () => {
        cy.get(':nth-child(3) > .amplify-button')
            .click()
            cy.url().should('include', 'development.d11qv011ey7pau.amplifyapp.com/')
            cy.wait(1000)

        cy.get(':nth-child(2) > .amplify-button')
        .click()
        cy.wait(1000)
        cy.url().should('include', 'development.d11qv011ey7pau.amplifyapp.com/')
        cy.scrollTo('bottom')
        cy.wait(1000)
             cy.scrollTo('bottom')
         })  


         it('Go to About US page', () => {
          cy.get(':nth-child(2) > a > .amplify-text')
              .click()
              cy.wait(1000)
              cy.scrollTo('bottom')
              cy.wait(1000)
              cy.scrollTo('top')
            }) 

            it('Go to Privacy Policy Page', () => {
              cy.get(':nth-child(3) > a > .amplify-text')
                  .click()
                  cy.wait(1000)
                  cy.scrollTo('bottom')
                  cy.wait(1000)
                  cy.scrollTo('top')
                }) 

            
                
            it('Validate text in Policy Page', () => {
              cy.get('.amplify-card')
              .should('contain', 'We appreciate that you trust us with your information and we intend to always keep that trust.')
              cy.wait(1000)
                }) 

                it('Go to About US page', () => {
                  cy.get(':nth-child(2) > a > .amplify-text')
                      .click()
                      cy.wait(1000)
                      cy.scrollTo('bottom')
                      cy.wait(1000)
                      cy.scrollTo('top')
                    }) 

                it('Validate text in About Us Page', () => {
                  cy.get('.amplify-card')
                  .should('contain', 'support of our mission, RPGMatch operates under the following values')
                  cy.wait(1000)
                    }) 

                    it('go to RPG Match User List Page', () => {
                      cy.visit('https://development.d11qv011ey7pau.amplifyapp.com/')
                
                    })
                 
                    it('Validate if response code is equal to 200', () => {
                      cy.request('https://development.d11qv011ey7pau.amplifyapp.com/')
                      .should((response) => {
                        expect(response.status).to.eq(200)
                        cy.wait(1000)
                      })
                    })      
      
    })

  

  


 
