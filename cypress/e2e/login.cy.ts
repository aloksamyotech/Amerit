describe('Login,', () => {
    it('Login', () => {
        cy.visit('localhost:3000')

        cy.findByRole('heading', {
            name: /sign in/i,
        }).click()

        cy.origin('https://ameritnav.b2clogin.com/', () => {
            cy.get('#email').type('jgilchriest@navisite.com', {
                force: true,
            })
            cy.get('#password').type('Password123!', {
                force: true,
            })
            cy.get('#next').click({ force: true })
        })

        cy.findByRole('heading', {
            name: /welcome jacob/i,
        })
    })
})

export {}
