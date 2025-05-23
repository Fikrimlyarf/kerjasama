class Mitra {
    visitPage() {
        cy.contains("Mitra").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiTambahKontak() {
        cy.contains("Tambah Kontak").should("be.visible").click();
    }

    aksiSimpan() {
        cy.contains("Simpan").should("be.visible").click();
    }

    aksiUbah() {
        cy.contains("Ubah Data").should("be.visible").click();
    }

    hapusItem() {
        cy.get("#delete-button").should("be.visible").click();
    }

    aksiKembalikelist() {
        cy.contains("Kembali ke List").should("be.visible").click();
    }

    pilihJenisMitra(jenisMitra) {
        cy.get('[data-testid="radio_jenis_mitra"]')
            .contains("label", jenisMitra)
            .click();
    }

    pilihLingkup(lingkup) {
        cy.get('[data-testid="radio_tingkat_mitra"]')
            .contains("label", lingkup)
            .click();
    }

    inputNamaMitra(namaMitra) {
        cy.get("#form-control-nama_mitra").clear().type(namaMitra);
    }

    inputNoIzin(noIzin) {
        cy.get("#form-control-kode_mitra").clear().type(noIzin);
    }

    inputNpwp(npwp) {
        cy.get("#form-control-npwp_mitra").clear().type(npwp);
    }

    inputKodePos(kodePos) {
        cy.get("#form-control-kode_pos").clear().type(kodePos);
    }

    inputAlamat(alamat) {
        cy.get("#form-control-alamat").clear().type(alamat);
    }

    inputEmail(email) {
        cy.get("#form-control-email").clear().type(email);
    }

    inputTlp(tlp) {
        cy.get("#form-control-telepon").clear().type(tlp);
    }

    inputWeb(web) {
        cy.get("#form-control-website").clear().type(web);
    }

    kontak(value, index, elemet) {
        cy.get(`input[name="record.kontak.${index}.${elemet}"]`)
            .clear()
            .type(value);
    }

    aksi(aksi, mitra) {
        let classButton;

        if (aksi == "Detail") {
            classButton = "eye";
        } else if (aksi == "Hapus") {
            classButton = "trash";
        }

        if (aksi === "Detail") {
            cy.get("td")
                .contains(mitra)
                .should("be.visible")
                .parent()
                .find(`.sym.sym-${classButton}-solid`)
                .click();
        } else {
            cy.get(`.sym.sym-${classButton}-solid`).last().click();
        }
    }

}

export default Mitra;
