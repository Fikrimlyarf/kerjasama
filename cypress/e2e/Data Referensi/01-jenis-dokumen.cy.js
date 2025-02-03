import Login from "../../pages/auth/Login";
import JenisDokumen from "../../pages/auth/data-pelengkap/JenisDokumen";

const login = new Login();
const docs = new JenisDokumen();
let dataJenis;

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    docs.visitPage();

    cy.fixture("data-referensi/jenis_dokumen").then((data) => {
        dataJenis = data;
    });

});

describe("+ Positif Case", () => {
    it("Admin menambahkan data jenis dokumen", () => {
        dataJenis.listJenisDokumen.forEach((data) => {
            docs.aksiTambah();
            docs.inputJenisDokumen(data);
            docs.aksi("Simpan");
            docs.alert("Simpan");
        });
    });

    it("Admin mencari data jenis dokumen", () => {
        docs.cariData("testing {enter}");
        docs.cekDataList("Testing");
    });

    it("Admin mengubah nama jenis dokumen", () => {
        docs.cariData("testing {enter}");
        docs.cekDataList("Testing");
        docs.aksi("Ubah", "Testing");
        docs.inputJenisDokumen("Testing Lorem Ipsum");
        docs.aksi("Simpan");
        docs.alert("Ubah");
    });

    it("Admin menghapus data jenis dokumentasi", () => {
        docs.cariData("lorem ipsum{enter}");
        docs.aksi("Hapus", "Testing Lorem Ipsum");
        docs.konfirmasiHapus();
        docs.alert("Hapus");
    });

    it("Admin menghapus semua data", () => {
        docs.cariData("testing{enter}");
        docs.checkAll();
        docs.aksiHapusAll();
        docs.konfirmasiHapus(); //fix me
        docs.alert("Hapus");
    });
});

describe("Negatif Case", () => {
    it.only("Admin menambahkan data jenis dokumen dengan nama yang sama", () => {
        docs.aksiTambah();
        docs.inputJenisDokumen(dataJenis.listJenisDokumen[0]);
        docs.aksi("Simpan");
        docs.alert("Duplikat");
    });
});
