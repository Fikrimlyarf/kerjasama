import Login from "../../pages/auth/Login";
import KriteriaMitra from "../../pages/auth/data-pelengkap/KriteriaMitra";

const login = new Login();
const kriteria = new KriteriaMitra();
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
            kriteria.aksi("Simpan");
            kriteria.alert("Simpan");
        });
    });

    it('Admin mencari data kriteria mitra', () => {
        kriteria.cariData("testing {enter}");
        kriteria.cekDataList("Testing");
    });

    it('Admin mengubah nama kriteria mitra', () => {
        kriteria.cariData("testing {enter}");
        kriteria.cekDataList("Testing");
        kriteria.aksi("Ubah", "Testing");
        kriteria.inputKriteriaMitra("Testing Lorem Ipsum");
        kriteria.inputKeterangan("Lorem Ipsum");
        kriteria.aksi("Simpan");
        kriteria.alert("Ubah");
    });

    it('Admin menghapus data kriteria mitra', () => {
        kriteria.cariData("lorem ipsum{enter}");
        kriteria.aksi("Hapus", "Testing Lorem Ipsum");
        kriteria.hapusItem();
        kriteria.alert("Hapus");
    });
});

describe("+ Negatif Case", () => {
    it.only('Admin menambahkan data kriteria mitra dengan nama yang sama', () => {
        kriteria.aksiTambah();
        kriteria.inputKriteriaMitra(dataKriteria.listKriteriaMitra[0].kriteria);
        kriteria.inputKeterangan(dataKriteria.listKriteriaMitra[0].keterangan);
        kriteria.aksi("Simpan");
        kriteria.alert("Duplikat");
    });
})
