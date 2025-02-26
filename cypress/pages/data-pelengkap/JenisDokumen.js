class JenisDokumen {
    visitPage() {
        cy.contains("Data Referensi").should("be.visible").click();
        cy.contains("Jenis Dokumen").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiHapusAll() {
        cy.get("#button_delete").should("be.visible").click();
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
        cy.get(".form-check-input").first().click();
    }
}

export default JenisDokumen;
