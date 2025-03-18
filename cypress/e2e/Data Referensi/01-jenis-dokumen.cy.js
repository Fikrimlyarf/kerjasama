import Login from "../../pages/auth/Login";
import JenisDokumen from "../../pages/data-pelengkap/JenisDokumen";
import Keyword from "../../pages/keyword";

const login = new Login();
const docs = new JenisDokumen();
const keyword = new Keyword();
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
            keyword.aksi("Simpan");
            keyword.alert("Simpan", "Jenis Dokumen");
        });
    });

    it("Admin mencari data jenis dokumen", () => {
        keyword.cariData("testing");
        keyword.cekDataList("Testing");
    });

    it("Admin mengubah nama jenis dokumen", () => {
        keyword.cariData("testing");
        keyword.cekDataList("Testing");
        keyword.aksi("Ubah", "Testing");
        docs.inputJenisDokumen("Testing Lorem Ipsum");
        keyword.aksi("Simpan");
        keyword.alert("Ubah", "Jenis Dokumen");
    });

    it("Admin menghapus data jenis dokumentasi", () => {
        keyword.cariData("lorem ipsum");
        keyword.aksi("Hapus", "Testing Lorem Ipsum");
        keyword.hapusItem();
        keyword.alert("Hapus", "Jenis Dokumen");
    });

    it("Admin menghapus semua data", () => {
        keyword.cariData("testing");
        keyword.checkAll();
        docs.aksiHapusAll();
        keyword.hapusAll();
        keyword.alert("Hapus", "Jenis Dokumen");
    });
});

describe("- Negatif Case", () => {
    it("Admin menambahkan data jenis dokumen dengan nama yang sama", () => {
        docs.aksiTambah();
        docs.inputJenisDokumen("Memorandum of Understanding (MoU)");
        keyword.aksi("Simpan");
        keyword.alert("Duplikat", "Jenis Dokumen");
    });
});
