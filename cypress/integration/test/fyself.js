describe('my first test', function(){

    it('Does not do much', function () {
        cy.visit('https://staging.fyself.com/')

        cy.log('Lololiando')

        cy.get('input[name="identifier"]')
            .type('zivi@displaying.page')

        cy.get('input[name="password"]')
            .type('JorgeYosmiel1@')


        cy.get('button[type=submit]').click()

        // cy.contains('SIGN IN')
        //     .get('.sc-chPdSV').click()

    })







})