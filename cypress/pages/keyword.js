class Keyword {
    cariData(cari) {
        cy.get('input[placeholder="Cari data ..."]')
            .should("be.visible")
            .type(cari);
    }

    cekDataList(cari) {
        cy.get("td").parent().contains(cari).should("be.visible");
    }

    hapusItem() {
        cy.get("#delete-button").should("be.visible").click();
    }

    autoSelected(elm, value) {
        cy.get("[" + elm + "]")
            .next()
            .click();
        cy.get(".select2-search__field").type(value);
        cy.get(".select2-results__options")
            .contains(value)
            .click({ force: true });
    }

    aksi(aksi, data) {
        let classButton;

        if (aksi == "Simpan") {
            classButton = "check";
        } else if (aksi == "Batal") {
            classButton = "x-close";
        } else if (aksi == "Ubah") {
            classButton = "pencil";
        } else if (aksi == "Hapus") {
            classButton = "trash";
        } else if (aksi == "Detail") {
            classButton = "eye";
        }

        if (aksi === "Ubah" || aksi === "Hapus" || aksi === "Detail") {
            cy.get("td")
                .contains(data)
                .should("be.visible")
                .parent()
                .find(`.sym.sym-${classButton}-solid`)
                .click();
        } else {
            cy.get(`.sym.sym-${classButton}-solid`).click();
        }
    }

    alert(alert, title) {
        if (alert == "Simpan") {
            cy.get(".alert")
                .contains(`Berhasil menambahkan data ${title}`)
                .should("be.visible");
        } else if (alert == "Ubah") {
            cy.get(".alert")
                .contains(`Berhasil mengubah data ${title}`)
                .should("be.visible");
        } else if (alert == "Hapus") {
            cy.get(".alert")
                .contains(`Berhasil menghapus data ${title}`)
                .should("be.visible");
        } else if (alert == "Duplikat") {
            cy.get(".invalid-feedback")
                .contains(`${title} sudah ada sebelumnya.`)
                .should("be.visible");
        }
    }
}

export default Keyword;
