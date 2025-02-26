class SumberDana {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Sumber Dana").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiHapusAll() {
        cy.get("#button_delete").should("be.visible").click();
    }

    inputSumberDana(dana) {
        cy.get("#form-control-sumber_dana").clear().type(dana);
    }
}

export default SumberDana;
