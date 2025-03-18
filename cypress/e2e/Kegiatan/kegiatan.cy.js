import Login from "../../pages/auth/Login";
import Kegiatan from "../../pages/kegiatan/Kegiatan";
import Kerjasama from "../../pages/kerjasama/Kerjasama";
import Keyword from "../../pages/keyword";


const login = new Login();
const kegiatan = new Kegiatan();
const kerma = new Kerjasama();
const keyword = new Keyword();
let dataKegiatan;
const dokumen = "cypress/fixtures/file-upload/lorem-ipsum.pdf";

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    

    cy.fixture("kegiatan/kegiatan").then((data) => {
        dataKegiatan = data;
    });
});

describe("+ Positif Case", () => {
    it("Admin menambahkan data kegiatan dari menu kegiatan", () => {
        kegiatan.visitPage();
        kegiatan.aksiTambah();
        keyword.autoSelected('name="id_induk_kerjasama"', dataKegiatan.kegiatan[0].induk);
        cy.wait(1000);
        kegiatan.inputDokumenKegiatan(dataKegiatan.kegiatan[0].noDokumen);
        kegiatan.inputDokumenMitra(dataKegiatan.kegiatan[0].noMitra);
        kegiatan.inputJudulKegiatan(dataKegiatan.kegiatan[0].judul);
        keyword.autoSelected('name="id_unit_kerja"', dataKegiatan.kegiatan[0].unit);
        cy.wait(1000);
        keyword.autoSelected('name="id_bentuk_kegiatan"', dataKegiatan.kegiatan[0].bentuk);
        cy.wait(1000);
        keyword.autoSelected('name="id_sasaran_kinerja"', dataKegiatan.kegiatan[0].sasaran)
        cy.wait(1000);
        keyword.autoSelected('name="id_indikator_sasaran"', dataKegiatan.kegiatan[0].indikator);
        cy.wait(1000);
        kegiatan.tglAwal(dataKegiatan.kegiatan[0].tglAwal);
        kegiatan.tglAkhir(dataKegiatan.kegiatan[0].tglAkhir);
        kegiatan.inputHasil(dataKegiatan.kegiatan[0].hasil);
        kegiatan.nilaiKontrak(dataKegiatan.kegiatan[0].nilaiKontrak);
        kegiatan.tautan(dataKegiatan.kegiatan[0].tautan);
        kegiatan.dokumen(dokumen);
        cy.wait(1000);

        dataKegiatan.penanggungJawab.forEach((data, index) => {
            const pihak = index + 1
            data.forEach((pj, indexpj) => {
                Object.keys(pj).forEach((key) => {
                    kegiatan.penanggungJawab(pj[key], pihak ,indexpj, key);
                });
                if (indexpj < dataKegiatan.penanggungJawab.length - 1) {
                    kegiatan.aksiTambahPenanggungJawab(pihak);
                }
            })
        })
        kegiatan.aksiSimpan();
        keyword.alert("Simpan", "Kegiatan");
    });

    it("Admin menambahkan data kegiatan dari menu detail kerjasama", () => {
        kerma.visitPage();
        keyword.cariData(dataKegiatan.kegiatan[1].induk)
        kegiatan.aksi("Detail", dataKegiatan.kegiatan[1].induk);
        kerma.aksiTambahKegiatan();
        kegiatan.inputDokumenKegiatan(dataKegiatan.kegiatan[1].noDokumen);
        kegiatan.inputDokumenMitra(dataKegiatan.kegiatan[1].noMitra);
        kegiatan.inputJudulKegiatan(dataKegiatan.kegiatan[1].judul);
        keyword.autoSelected('name="id_unit_kerja"', dataKegiatan.kegiatan[1].unit);
        cy.wait(1000);
        keyword.autoSelected('name="id_bentuk_kegiatan"', dataKegiatan.kegiatan[1].bentuk);
        cy.wait(1000);
        keyword.autoSelected('name="id_sasaran_kinerja"', dataKegiatan.kegiatan[1].sasaran)
        cy.wait(1000);
        keyword.autoSelected('name="id_indikator_sasaran"', dataKegiatan.kegiatan[1].indikator);
        cy.wait(1000);
        kegiatan.tglAwal(dataKegiatan.kegiatan[1].tglAwal);
        kegiatan.tglAkhir(dataKegiatan.kegiatan[1].tglAkhir);
        kegiatan.inputHasil(dataKegiatan.kegiatan[1].hasil);
        kegiatan.nilaiKontrak(dataKegiatan.kegiatan[1].nilaiKontrak);
        kegiatan.tautan(dataKegiatan.kegiatan[1].tautan);
        kegiatan.dokumen(dokumen);
        cy.wait(1000);

        dataKegiatan.penanggungJawab.forEach((data, index) => {
            const pihak = index + 1
            data.forEach((pj, indexpj) => {
                Object.keys(pj).forEach((key) => {
                    kegiatan.penanggungJawab(pj[key], pihak ,indexpj, key);
                });
                if (indexpj < dataKegiatan.penanggungJawab.length - 1) {
                    kegiatan.aksiTambahPenanggungJawab(pihak);
                }
            })
        })
        kegiatan.aksiSimpan();
        keyword.alert("Simpan", "Kegiatan");
    });
    it('Admin menambahkan data kegiatan dari menu list kegiatan kerjasama', () => {
        kerma.visitPage();
        keyword.cariData(dataKegiatan.kegiatan[2].induk)
        kegiatan.aksi("Detail", dataKegiatan.kegiatan[2].induk);
        kerma.visitListPage()
        kerma.aksiTambah()
    
        kegiatan.inputDokumenKegiatan(dataKegiatan.kegiatan[2].noDokumen);
        kegiatan.inputDokumenMitra(dataKegiatan.kegiatan[2].noMitra);
        kegiatan.inputJudulKegiatan(dataKegiatan.kegiatan[2].judul);
        keyword.autoSelected('name="id_unit_kerja"', dataKegiatan.kegiatan[2].unit);
        cy.wait(1000);
        keyword.autoSelected('name="id_bentuk_kegiatan"', dataKegiatan.kegiatan[2].bentuk);
        cy.wait(1000);
        keyword.autoSelected('name="id_sasaran_kinerja"', dataKegiatan.kegiatan[2].sasaran)
        cy.wait(1000);
        keyword.autoSelected('name="id_indikator_sasaran"', dataKegiatan.kegiatan[2].indikator);
        cy.wait(1000);
        kegiatan.tglAwal(dataKegiatan.kegiatan[2].tglAwal);
        kegiatan.tglAkhir(dataKegiatan.kegiatan[2].tglAkhir);
        kegiatan.inputHasil(dataKegiatan.kegiatan[2].hasil);
        kegiatan.nilaiKontrak(dataKegiatan.kegiatan[2].nilaiKontrak);
        kegiatan.tautan(dataKegiatan.kegiatan[2].tautan);
        kegiatan.dokumen(dokumen);
        cy.wait(1000);

        dataKegiatan.penanggungJawab.forEach((data, index) => {
            const pihak = index + 1
            data.forEach((pj, indexpj) => {
                Object.keys(pj).forEach((key) => {
                    kegiatan.penanggungJawab(pj[key], pihak ,indexpj, key);
                });
                if (indexpj < dataKegiatan.penanggungJawab.length - 1) {
                    kegiatan.aksiTambahPenanggungJawab(pihak);
                }
            })
        })
        kegiatan.aksiSimpan();
        keyword.alert("Simpan", "Kegiatan");
    });
});

