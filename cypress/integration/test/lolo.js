describe('acceding', function () {


    it('Acceding Register', async function () {

        const lolo = await cy.readFile('text.txt')

        cy.log(lolo)

    })


    it('email', async function () {

        const validator = await cy.fixture('values.json')

        for (let i = 0; i < validator.invalid_email.length; i++) {
            cy.log(validator.invalid_email[i])
        }
    })


    it('name', async function () {

        const validator = await cy.fixture('values.json')

        for (let i = 0; i < validator.invalid_name.length; i++) {
            cy.log(validator.invalid_name[i])
        }
    })




})