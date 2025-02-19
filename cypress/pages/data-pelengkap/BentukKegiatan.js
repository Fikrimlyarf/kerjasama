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

    pilihJenisKegiatan(jenisKegiatan) {
        cy.get('.form-group > .form-select').select(jenisKegiatan);
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

    aksi(aksi, bentukKegiatan) {
        let classButton;

        if (aksi == "Simpan") {
            classButton = "check";
        } else if (aksi == "Batal") {
            classButton = "x-close";
        } else if (aksi == "Ubah") {
            classButton = "pencil";
        } else if (aksi == "Hapus") {
            classButton = "trash";
        }

        if (aksi === "Ubah" || aksi === "Hapus") {
            cy.get("td")
                .contains(bentukKegiatan)
                .should("be.visible")
                .parent()
                .find(`.sym.sym-${classButton}-solid`)
                .click();
        } else {
            cy.get(`.sym.sym-${classButton}-solid`).click();
        }
    }

    hapusItem() {
        cy.get("#delete-button").should("be.visible").click();
    }

    hapusAll() {
        cy.get("#delete-many-button").should("be.visible").click();
    }

    alert(alert) {
        if (alert == "Simpan") {
            cy.get(".alert")
                .contains("Berhasil menambahkan data Bentuk Kegiatan")
                .should("be.visible");
        } else if (alert == "Ubah") {
            cy.get(".alert")
                .contains("Berhasil mengubah data Bentuk Kegiatan")
                .should("be.visible");
        } else if (alert == "Hapus") {
            cy.get(".alert")
                .contains(" Berhasil menghapus data Bentuk Kegiatan")
                .should("be.visible");
        } else if (alert == "Duplikat") {
            cy.get(".invalid-feedback")
                .contains("Bentuk Kegiatan sudah ada sebelumnya.")
                .should("be.visible");
        }
    }
}

export default BentukKegiatan;
