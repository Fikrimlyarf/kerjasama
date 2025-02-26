import Login from "../../pages/auth/Login";
import SumberDana from "../../pages/data-pelengkap/SumberDana";
import Keyword from "../../pages/keyword";

const login = new Login();
const dana = new SumberDana();
const keyword = new Keyword();
let dataDana;

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    dana.visitPage();

    cy.fixture("data-referensi/sumber_dana").then((data) => {
        dataDana = data;
    });
});

describe("+ Positif Case", () => {
    it("Admin menambahkan data sumber Dana", () => {
        dataDana.listSumberDana.forEach((data) => {
            dana.aksiTambah();
            dana.inputSumberDana(data);
            keyword.aksi("Simpan");
            keyword.alert("Simpan", "Sumber Dana");
        });
    });

    it('Admin mencari data sumber dana', () => {
        keyword.cariData("testing {enter}");
        keyword.cekDataList("Testing");
    });

    it('Admin mengubah nama sumber dana', () => {
        keyword.cariData("testing {enter}");
        keyword.cekDataList("Testing");
        keyword.aksi("Ubah", "Testing");
        dana.inputSumberDana("Testing Lorem Ipsum");
        keyword.aksi("Simpan");
        keyword.alert("Ubah", "Sumber Dana");
    });

    it('Admin menghapus data sumber dana', () => {
        keyword.cariData("lorem ipsum{enter}");
        keyword.aksi("Hapus", "Testing Lorem Ipsum");
        keyword.hapusItem();
        keyword.alert("Hapus", "Sumber Dana");
    });

});

describe("+ Negatif Case", () => {
    it('Admin menambahkan data sumber dana dengan nama yang sama', () => {
        dana.aksiTambah();
        dana.inputSumberDana(dataDana.listSumberDana[0]);
        keyword.aksi("Simpan");
        keyword.alert("Duplikat", "Sumber Dana");
    });
})
