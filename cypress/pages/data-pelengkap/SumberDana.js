class SumberDana {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Sumber Dana").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiHapusAll() {
        cy.get('#button_delete').should("be.visible").click()
    }

    inputSumberDana(dana) {
        cy.get("#form-control-sumber_dana").clear().type(dana);
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

    aksi(aksi, sumberDana) {
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
                .contains(sumberDana)
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
            cy.get('.alert').contains('Berhasil menambahkan data Sumber Dana').should('be.visible')
        } else if (alert == 'Ubah'){
            cy.get('.alert').contains('Berhasil mengubah data Sumber Dana').should('be.visible')
        } else if (alert == 'Hapus'){
            cy.get('.alert').contains(' Berhasil menghapus data Sumber Dana').should('be.visible')
        } else if (alert == 'Duplikat'){
            cy.get('.invalid-feedback').contains('Sumber Dana sudah ada sebelumnya.').should('be.visible')
        }
    }
}

export default SumberDana;
