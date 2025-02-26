class Kerjasama {
    visitPage() {
        cy.contains("Kerjasama").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    inputDokumenKerjasama(dokumen) {
        cy.get('#form-control-nomor_dokumen').clear().type(dokumen);
    }

    inputDokumenMitra(dokumen) {
        cy.get('#form-control-nomor_dokumen_mitra').clear().type(dokumen);
    }
}

export default Kerjasama;