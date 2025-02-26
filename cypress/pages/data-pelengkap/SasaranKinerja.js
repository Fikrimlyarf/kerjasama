class SasaranKinerja {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Sasaran Kinerja").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiTambahIndikator() {
        cy.contains("Tambah Indikator").should("be.visible").click();
    }

    aksiSimpan() {
        cy.contains("Simpan").should("be.visible").click();
    }

    aksiKembalikelist() {
        cy.contains("Kembali ke List").should("be.visible").click();
    }

    aksiUbahData() {
        cy.contains("Ubah Data").should("be.visible").click();
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

    inputSasaranKinerja(sasaran) {
        cy.get('#form-control-sasaran').should("be.visible").clear().type(sasaran);
    }

    inputKeterangan(keterangan) {
        cy.get('#form-control-keterangan').should("be.visible").clear().type(keterangan);
    }

    inputLevel(level) {
        cy.get('#form-control-level').should("be.visible").clear().type(level);
    }

    inputIndikator(value, index, elemet) {
        cy.get(`[name="record.indikator.${index}.${elemet}"]`)
            .clear()
            .type(value);
    }

    
}

export default SasaranKinerja