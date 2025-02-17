class JenisDokumen {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Jenis Dokumen").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiHapusAll() {
        cy.get('#button_delete').should("be.visible").click()
    }

    inputJenisDokumen(namadokumen) {
        cy.get("#form-control-jenis_dokumen").clear().type(namadokumen);
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
        cy.get('.form-check-input').first().click()
    }

    aksi(aksi, jenisDokumen) {
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
                .contains(jenisDokumen)
                .should("be.visible")
                .parent()
                .find(`.sym.sym-${classButton}-solid`)
                .click();
        } else {
            cy.get(`.sym.sym-${classButton}-solid`).click();
        }
    }

    hapusItem() {
        cy.get('#delete-button').should('be.visible').click()
    }

    hapusAll() {
        cy.get('#delete-many-button').should('be.visible').click()
    }

    alert(alert) {

        if (alert == 'Simpan'){
            cy.get('.alert').contains('Berhasil menambahkan data Jenis Dokumen').should('be.visible')
        } else if (alert == 'Ubah'){
            cy.get('.alert').contains('Berhasil mengubah data Jenis Dokumen').should('be.visible')
        } else if (alert == 'Hapus'){
            cy.get('.alert').contains(' Berhasil menghapus data Jenis Dokumen').should('be.visible')
        } 
        else if (alert == 'Duplikat'){
            cy.get('.invalid-feedback').contains('Jenis Dokumen sudah ada sebelumnya.').should('be.visible')
        }
    }

}

export default JenisDokumen;
