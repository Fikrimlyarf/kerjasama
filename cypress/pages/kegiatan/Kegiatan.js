class Kegiatan {
    visitPage() {
        cy.contains("Kegiatan").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiSimpan() {
        cy.contains("Simpan").should("be.visible").click();
    }

    aksiTambahPenanggungJawab(pihak) {
        cy.contains(`Tambah Penanggung Jawab Pihak ke ${pihak}`).should("be.visible").click();    
    }    

    inputDokumenKegiatan(dokumen) {
        cy.get('#form-control-nomor_dokumen').clear().type(dokumen);
    }

    inputDokumenMitra(dokumen) {
        cy.get('#form-control-nomor_dokumen_mitra').clear().type(dokumen);
    }

    inputJudulKegiatan(judul) {
        cy.get('#form-control-judul_kegiatan').clear().type(judul);
    }

    tglAwal(tglAwal) {
        cy.get('#form-control-tanggal_mulai_berlaku').type(tglAwal);
    }

    tglAkhir(tglAkhir) {
        cy.get('#form-control-tanggal_akhir_berlaku').type(tglAkhir);
    }

    inputHasil(hasil) {
        cy.get('#form-control-hasil_pelaksanaan').clear().type(hasil);
    }

    nilaiKontrak(dana){
        cy.get('#form-control-anggaran').type(dana);
    }

    dokumen(dok) {
        cy.get("#form-control-id_dokumen").selectFile(dok);
    }

    tautan(link) {
        cy.get('#form-control-link_dokumentasi').clear().type(link);
    }

    penanggungJawab(value, pihak, index, element) {
        cy.wait(1000);        
        cy.get(`[name="penanggungJawab.${pihak}.penanggung_jawab.${index}.${element}"]`)
            .should("be.visible")
            .clear()
            .type(value);
    }

    

    aksi(aksi, data) {
        let classButton;

        if (aksi == "Detail") {
            classButton = "eye";
        } else if (aksi == "Hapus") {
            classButton = "trash";
        }

        if (aksi === "Detail") {
            cy.get("td")
                .parent()
                .contains(data)
                .should("be.visible")
                .parent()
                .find(`.sym.sym-${classButton}-solid`)
                .click();
        } else {
            cy.get(`.sym.sym-${classButton}-solid`).last().click();
        }
    }


}

export default Kegiatan;