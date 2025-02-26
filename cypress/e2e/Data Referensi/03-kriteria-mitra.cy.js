import Login from "../../pages/auth/Login";
import KriteriaMitra from "../../pages/data-pelengkap/KriteriaMitra";
import Keyword from "../../pages/keyword";

const login = new Login();
const kriteria = new KriteriaMitra();
const keyword = new Keyword();
let dataKriteria;

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    kriteria.visitPage();

    cy.fixture("data-referensi/kriteria_mitra").then((data) => {
        dataKriteria = data;
    });
});

describe("+ Positif Case", () => {
    it("Admin menambahkan data kriteria mitra", () => {
        dataKriteria.listKriteriaMitra.forEach((data) => {
            kriteria.aksiTambah();
            kriteria.inputKriteriaMitra(data.kriteria);
            kriteria.inputKeterangan(data.keterangan);
            keyword.aksi("Simpan");
            keyword.alert("Simpan", "Kriteria Mitra");
        });
    });

    it('Admin mencari data kriteria mitra', () => {
        keyword.cariData("testing {enter}");
        keyword.cekDataList("Testing");
    });

    it('Admin mengubah nama kriteria mitra', () => {
        keyword.cariData("testing {enter}");
        keyword.cekDataList("Testing");
        kriteria.aksi("Ubah", "Testing");
        kriteria.inputKriteriaMitra("Testing Lorem Ipsum");
        kriteria.inputKeterangan("Lorem Ipsum");
        keyword.aksi("Simpan");
        keyword.alert("Ubah", "Kriteria Mitra");
    });

    it('Admin menghapus data kriteria mitra', () => {
        keyword.cariData("lorem ipsum{enter}");
        keyword.aksi("Hapus", "Testing Lorem Ipsum");
        keyword.hapusItem();
        keyword.alert("Hapus", "Kriteria Mitra");
    });
});

describe("+ Negatif Case", () => {
    it('Admin menambahkan data kriteria mitra dengan nama yang sama', () => {
        kriteria.aksiTambah();
        kriteria.inputKriteriaMitra(dataKriteria.listKriteriaMitra[0].kriteria);
        kriteria.inputKeterangan(dataKriteria.listKriteriaMitra[0].keterangan);
        kriteria.aksi("Simpan");
        keyword.alert("Duplikat", "Kriteria Mitra");
    });
})
