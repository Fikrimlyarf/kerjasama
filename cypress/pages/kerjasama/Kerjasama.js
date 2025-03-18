class Kerjasama {
    visitPage() {
        cy.contains("Kerjasama").should("be.visible").click();
    }

    visitListPage() {
        cy.contains("Daftar Kegiatan").should("be.visible").click();
    }

    aksiTambah() {
        cy.contains("Tambah Data").should("be.visible").click();
    }

    aksiTambahKegiatan() {
        cy.contains("Tambah Data Kegiatan").should("be.visible").click();
    }

    aksiSimpan() {
        cy.contains("Simpan").should("be.visible").click();
    }

    inputDokumenKerjasama(dokumen) {
        cy.get("#form-control-nomor_dokumen").clear().type(dokumen);
    }

    inputDokumenMitra(dokumen) {
        cy.get("#form-control-nomor_dokumen_mitra").clear().type(dokumen);
    }

    inputJudulKerjasama(judul) {
        cy.get("#form-control-judul_kerjasama").clear().type(judul);
    }

    inputDeskripsiKerjasama(deskripsi) {
        cy.get("#form-control-deskripsi").clear().type(deskripsi);
    }

    inputAnggran(anggaran) {
        cy.get("#form-control-anggaran").clear().type(anggaran);
    }

    inputTglAwal(tglAwal) {
        cy.get("#form-control-tanggal_mulai_berlaku").type(tglAwal);
    }

    inputTglAkhir(tglAkhir) {
        cy.get("#form-control-tanggal_akhir_berlaku").type(tglAkhir);
    }

    dokumen(dok) {
        cy.get("#form-control-id_dokumen").selectFile(dok);
    }

    pihak1() {
        return cy.get("#pihak-ke1");
    }

    pihakDari(pihak) {
        cy.get('[data-testid="radio_penanggungJawab.1.pihak_penanggung_jawab.jenis_pihak"]')
            .contains(pihak)
            .click();
    }

    aksiTambahPenanggungJawab1() {
        cy.contains("Tambah Penanggung Jawab Pihak ke 1").should("be.visible").click();    
    }

    aksiTambahPenanggungJawab2() {
        cy.contains("Tambah Penanggung Jawab Pihak ke 2").should("be.visible").click();    
    }

    alamatPihak(alamat, index, elemet ) {
        
        cy.wait(1000);
        cy.get(`[name="penanggungJawab.${index}.pihak_penanggung_jawab.${elemet}"]`)
            .should("be.visible")
            .type(alamat);
    }

    penanggungJawab1(value, index, elemet) {
        cy.wait(1000);        
        cy.get(`[name="penanggungJawab.1.penanggung_jawab.${index}.${elemet}"]`)
            .should("be.visible")
            .clear()
            .type(value);
    }

    penanggungJawab2(value, index, elemet) {
        cy.wait(1000);        
        cy.get(`[name="penanggungJawab.2.penanggung_jawab.${index}.${elemet}"]`)
            .should("be.visible")
            .clear()
            .type(value);
    }
}

export default Kerjasama;
