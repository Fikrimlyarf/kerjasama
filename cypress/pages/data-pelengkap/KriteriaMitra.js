class KriteriaMitra {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Kriteria Mitra").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiHapusAll() {
        cy.get("#button_delete").should("be.visible").click();
    }

    inputKriteriaMitra(kriteria) {
        cy.get("#form-control-klasifikasi_mitra").clear().type(kriteria);
    }

    inputKeterangan(keterangan) {
        cy.get("#form-control-keterangan").clear().type(keterangan);
    }
}

export default KriteriaMitra;
