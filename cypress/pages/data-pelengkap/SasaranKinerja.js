class SasaranKinerja {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Sasaran Kinerja").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    hapusItem() {
        cy.get("#delete-button").should("be.visible").click();
    }

    hapusAll() {
        cy.get("#delete-many-button").should("be.visible").click();
    }

    checkAll() {
        cy.get(".form-check-input").first().click();
    }

    

    
}

export default SasaranKinerja