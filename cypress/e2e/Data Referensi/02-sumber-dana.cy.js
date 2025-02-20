import Login from "../../pages/auth/Login";
import SumberDana from "../../pages/data-pelengkap/SumberDana";

const login = new Login();
const dana = new SumberDana();
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
            dana.aksi("Simpan");
            dana.alert("Simpan");
        });
    });

    it('Admin mencari data sumber dana', () => {
        dana.cariData("testing {enter}");
        dana.cekDataList("Testing");
    });

    it('Admin mengubah nama sumber dana', () => {
        dana.cariData("testing {enter}");
        dana.cekDataList("Testing");
        dana.aksi("Ubah", "Testing");
        dana.inputSumberDana("Testing Lorem Ipsum");
        dana.aksi("Simpan");
        dana.alert("Ubah");
    });

    it('Admin menghapus data sumber dana', () => {
        dana.cariData("lorem ipsum{enter}");
        dana.aksi("Hapus", "Testing Lorem Ipsum");
        dana.hapusItem();
        dana.alert("Hapus");
    });

});

describe("+ Negatif Case", () => {
    it('Admin menambahkan data sumber dana dengan nama yang sama', () => {
        dana.aksiTambah();
        dana.inputSumberDana(dataDana.listSumberDana[0]);
        dana.aksi("Simpan");
        dana.alert("Duplikat");
    });
})
