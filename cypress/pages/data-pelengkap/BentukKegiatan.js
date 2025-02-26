class BentukKegiatan {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Bentuk Kegiatan").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiHapusAll() {
        cy.get("#button_delete").should("be.visible").click();
    }

    aksiSimpan() {
        cy.contains("Simpan").should("be.visible").click();
    }

    aksiUbahData() {
        cy.contains("Ubah Data").should("be.visible").click();
    }  

    aksiKembalikelist() {
        cy.contains("Kembali ke List").should("be.visible").click();
    }

    inputBentukKegiatan(bentuk) {
        cy.get('#form-control-nama_bentuk_kegiatan').clear().type(bentuk);
    }

    inputKeterangan(keterangan) {
        cy.get("#form-control-keterangan").clear().type(keterangan);
    }

    cariData(cari) {
        cy.get('input[placeholder="Cari data ..."]')
            .should("be.visible")
            .type(cari);
    }

    cekDataList(cari) {
        cy.get("td").parent().contains(cari).should("be.visible");
    }

    checkAll() {
        cy.get(".form-check-input").first().click();
    }

    pilihJenis(elm, value) {
        cy.get("[" + elm + "]")
            .next()
            .click();
        cy.get(".select2-search__field").last().type(value);
        cy.get(".select2-results__options")
            .contains(value)
            .click({ force: true });
    }

    pilihSasaran(value) {
        cy.get("#select2-id_sasaran_kinerja-container").parent().click(); 
        cy.get(".select2-search__field").type(value);
        cy.get(".select2-results__options")
        .contains(value)
            .click({ force: true });
    }

}

export default BentukKegiatan;
