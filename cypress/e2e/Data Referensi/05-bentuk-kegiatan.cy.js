import Login from "../../pages/auth/Login";
import BentukKegiatan from "../../pages/data-pelengkap/BentukKegiatan";
import Keyword from "../../pages/keyword";

const login = new Login();
const bentuk = new BentukKegiatan();
const keyword = new Keyword();
let dataBentukKegiatan;

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    bentuk.visitPage();

    cy.fixture("data-referensi/bentuk_kegiatan").then((data) => {
        dataBentukKegiatan = data;
    });
});

describe("+ Positif Case", () => {
    it("Admin menambahkan data bentuk kegiatan", () => {
        dataBentukKegiatan.listBentukKegiatan.forEach((data) => {
            bentuk.aksiTambah();
            bentuk.pilihJenis('name="id_jenis_kegiatan"', data.jenis); //fix me
            bentuk.inputBentukKegiatan(data.bentukKegiatan);
            bentuk.inputKeterangan(data.keterangan);
            data.sasaran.forEach((pilih, index) => {
                if (index < pilih.length - 1) {
                    bentuk.pilihSasaran(pilih);
                }
            });
            bentuk.aksiSimpan();
            keyword.alert("Simpan", "Bentuk Kegiatan");
            bentuk.aksiKembalikelist();
        });
    });

    it("Admin mencari data bentuk kegiatan", () => {
        keyword.cariData("testing {enter}");
        keyword.cekDataList("Testing");
    });

    it("Admin mengubah nama bentuk kegiatan", () => {
        keyword.cariData("testing {enter}");
        keyword.cekDataList("Testing");
        keyword.aksi("Detail", "Testing");
        bentuk.aksiUbahData();
        bentuk.inputBentukKegiatan("Testing Lorem Ipsum");
        bentuk.inputKeterangan("Lorem Ipsum");
        bentuk.aksiSimpan();
        keyword.alert("Ubah", "Bentuk Kegiatan");
    });

    it("Admin menghapus data bentuk kegiatan", () => {
        keyword.cariData("lorem ipsum{enter}");
        keyword.aksi("Hapus", "Testing Lorem Ipsum");
        keyword.hapusItem();
        keyword.alert("Hapus", "Bentuk Kegiatan");
    });
});

describe("+ Negatif Case", () => {
    it("Admin menambahkan data bentuk kegiatan dengan nama yang sama", () => {      
        bentuk.aksiTambah();
        bentuk.pilihJenis('name="id_jenis_kegiatan"', dataBentukKegiatan.listBentukKegiatan[0].jenis); //fix me
        bentuk.inputBentukKegiatan(dataBentukKegiatan.listBentukKegiatan[0].bentukKegiatan);
        bentuk.inputKeterangan(dataBentukKegiatan.listBentukKegiatan[0].keterangan);
        bentuk.aksiSimpan();
        keyword.alert("Duplikat", "Bentuk Kegiatan");
    });
});
