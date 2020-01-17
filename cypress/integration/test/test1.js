describe('my first test', function(){
    it('Does not do much', function () {

        cy.visit('/api-docs')

        cy.contains('/remove-permissio').click()

        cy.contains('Try it out').click()

        cy.get('.body-param__text').clear('')

        cy.get('.body-param__text')
            .type('lolo')
    })
})

