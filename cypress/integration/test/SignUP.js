describe('acceding', function () {

    it('Acceding Register', function () {

        cy.visit('https://staging.fyself.com/')

        cy.contains('Create your account in Fyself').click()
    })
})


describe('SignUp', function () {

    const identifier = '27765878260'

    beforeEach('limpiar campos', function () {

        cy.get('input[name="password"]')
            .clear()

        cy.get('input[name="emailorphone"]')
            .clear({force: true}).then(() => {
            cy.get('input[name="emailorphone"]').clear()
        })

        cy.get('input[name="firstName"]')
            .clear()

        cy.get('button[type=submit]').should('be.disabled')

    })

    it('check validation name', function () {
        cy.get('input[name="password"]')
            .type('JorgeYosmiel1@')

        cy.get('input[name="emailorphone"]')
            .type(identifier)

        cy.get('button[type=submit]').should('be.disabled')

        cy.get('input[name="firstName"]')
            .type(identifier)
    })


    it('check validation password ', function () {
        cy.get('input[name="firstName"]')
            .type(identifier)

        cy.get('input[name="emailorphone"]')
            .type(identifier)

        cy.get('button[type=submit]').should('be.disabled')

        cy.get('input[name="password"]')
            .type('Jorge')

        cy.get('button[type=submit]').should('be.disabled')

        cy.get('input[name="password"]')
            .type('Yosmiel1@')
    });


    it('check validation email/phone', async function () {

        const validator = await cy.fixture('values.json')

        cy.get('input[name="password"]')
            .type('JorgeYosmiel1@')

        cy.get('input[name="firstName"]')
            .type(identifier)

        for (let i = 0; i < validator.invalid_email.length; i++) {

            cy.log(validator.invalid_email[i])
            cy.get('input[name="emailorphone"]')
                .type(validator.invalid_email[i])

            cy.get('button[type=submit]').should('be.disabled')

            cy.get('input[name="emailorphone"]')
                .clear({force: true}).then(() => {
                cy.log('lali')
            })
        }
        //
        // cy.get('input[name="emailorphone"]')
        //     .type('3333333333')
        //
        // cy.get('button[type=submit]').click()

        // cy.url()
        //     .should('include', 'confirmation/phone')
        //
        // cy.get('button[type=submit]').should('not.be.disabled')
        //
        // cy.get('button[type=submit]').click()
    })

    // it('signUP success ',  function () {
    //
    //     cy.get('input[name="password"]')
    //         .type('JorgeYosmiel1@')
    //
    //     cy.get('input[name="emailorphone"]')
    //         .type(identifier)
    //
    //     cy.get('input[name="firstName"]')
    //         .type(identifier)
    //
    //     // cy.get('button[type=submit]').click()
    //
    //     // cy.url()
    //     //     .should('include', 'confirmation/phone')
    //
    //     // cy.pause()
    //
    //     // const validator = await cy.fixture('validations.json')
    //     //
    //     // cy.log(validator.code)
    //
    //     // cy.get('button[type=submit]').click()
    //
    // });


})