import Login from "../../pages/auth/Login";
import Kerjasama from "../../pages/kerjasama/Kerjasama";
import Keyword from "../../pages/keyword";

const login = new Login();
const kerma = new Kerjasama();
const keyword = new Keyword();
let dataKerma;
const dokumen = "cypress/fixtures/file-upload/lorem-ipsum.pdf";

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    kerma.visitPage();

    cy.fixture("kerma/kerjasama").then((data) => {
        dataKerma = data;
    });
});

describe("+ Positif Case", () => {
    it.only("Admin menambahkan data kerjasama", () => {
        dataKerma.listKerjasama.forEach((data) => {
            kerma.aksiTambah();
            keyword.autoSelected('name="id_unit_kerja"', data.unit);
            kerma.inputJudulKerjasama(data.judul);
            keyword.autoSelected('name="id_mitra"', data.mitra);
            kerma.inputDokumenKerjasama(data.noKerjasama);
            kerma.inputDokumenMitra(data.noMitra);
            keyword.autoSelected('name="id_jenis_dokumen"', data.jenisDokumen);
            kerma.inputDeskripsiKerjasama(data.deskripsi);
            keyword.autoSelected('name="id_sumber_dana"', data.dana);
            kerma.inputAnggran(data.anggaran);
            kerma.inputTglAwal(data.tglAwal);
            kerma.inputTglAkhir(data.tglAkhir);
            keyword.autoSelected('name="id_status_kerjasama"', data.status);
            kerma.dokumen(dokumen, { fileName: "dokumen-kerjasama.pdf" });

            kerma.pihak1().within(() => {
                kerma.pihakDari(data.pihak1);
                kerma.alamatPihak(data.alamat, 1, "alamat");

            });
            dataKerma.penanggungJawab.pj1.forEach((pj, index) => {
                Object.keys(pj).forEach((key) => {
                    kerma.penanggungJawab1(pj[key], index, key);
                });
                if (index < dataKerma.penanggungJawab.pj1.length - 1) {
                    kerma.aksiTambahPenanggungJawab1();
                }
            });

            kerma.alamatPihak(data.alamat, 2, "alamat");

            dataKerma.penanggungJawab.pj2.forEach((pj, index) => {
                Object.keys(pj).forEach((key) => {
                    kerma.penanggungJawab2(pj[key], index, key);
                });
                if (index < dataKerma.penanggungJawab.pj2.length - 1) {
                    kerma.aksiTambahPenanggungJawab2();
                }
            });

            kerma.aksiSimpan();
        });
    });

    it('Admin mencari data kerjasama', () => {
        keyword.cariData("Pengembangan Teknologi {enter}");
        keyword.cekDataList("Pengembangan Teknologi");
    });
});
