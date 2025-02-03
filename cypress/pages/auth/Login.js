const aktor = Cypress.env('listAkun')

class Login {
    visit() {
        cy.visit(Cypress.env('kerjasama'));
    }

    user(user) {
        aktor.forEach((role) => {
            if (user === role.id) {
                cy.get("#email").type(role.username);
                cy.get("#password").type(role.password);
            }
        })
        cy.get(".btn-login").contains("Masuk").click();
    }

    konfirmasiLogin() {
        cy.get('.btn').click()
    }

    delAngkaRole(a) {
        //hapus number role dosen di env
        var b = '';
        for (var i = 0; i < a.length; i++) {
            if (a[i] >= 'A' && a[i] <= 'z' || a[i] == ' ') b += a[i];
        }
        return b;
    }

    pilihModul(user, modul) {
        aktor.forEach((role) => {
            if (user === role.role) {
                const modulPage = modul.toLowerCase()
                cy.get(`.${modulPage}`).click()
                cy.get(`#${modulPage}`).contains(this.delAngkaRole(user)).should('be.visible').click()
            }
        })
    }

}

export default Login