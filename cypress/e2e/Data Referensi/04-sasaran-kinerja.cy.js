import Login from "../../pages/auth/Login";
import SasaranKinerja from "../../pages/data-pelengkap/SasaranKinerja";
import Keyword from "../../pages/keyword";

const login = new Login();
const sasaran = new SasaranKinerja();
const keyword = new Keyword();
let dataSasaran;

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    sasaran.visitPage();

    cy.fixture("data-referensi/sasaran_kinerja").then((data) => {
        dataSasaran = data;
    });
});

describe("+ Positif Case", () => {
    it("Admin menambahkan data sasaran kinerja", () => {
        dataSasaran.listSasaran.forEach((data) => {
            sasaran.aksiTambah();
            sasaran.inputSasaranKinerja(data.namaSasaran);
            sasaran.inputKeterangan(data.keterangan);
            sasaran.inputLevel(data.level);
            data.detail.forEach((xyz, index) => {
                Object.keys(xyz).forEach((key) => {
                    sasaran.inputIndikator(xyz[key], index, key);
                });
                if (index < data.detail.length - 1) {
                    sasaran.aksiTambahIndikator();
                }
            });
            sasaran.aksiSimpan();
            keyword.alert("Simpan", "Sasaran Kinerja");
            sasaran.aksiKembalikelist();
        });
    });

    it("Admin mencari data sasaran kinerja", () => {
        keyword.cariData("testing");
        keyword.cekDataList("Testing");
    });

    it("Admin mengubah data sasaran kinerja", () => {
        keyword.cariData("testing");
        keyword.cekDataList("Testing");
        keyword.aksi("Detail", "Testing");
        sasaran.aksiUbahData()
        sasaran.inputSasaranKinerja("Testing Lorem Ipsum");
        sasaran.aksiSimpan()
        keyword.alert("Ubah", "Sasaran Kinerja");
    });

    it('Admin menghapus data sasaran kinerja', () => {
        keyword.cariData("lorem ipsum");
        keyword.aksi("Hapus", "Testing Lorem Ipsum");
        keyword.hapusItem();
        keyword.alert("Hapus", "Sasaran Kinerja");
    });
});

describe("+ Negatif Case", () => {
    it('Admin menambahkan data sasaran kinerja dengan nama yang sama', () => {
        sasaran.aksiTambah();
        sasaran.inputSasaranKinerja(dataSasaran.listSasaran[0].namaSasaran);
        sasaran.inputKeterangan(dataSasaran.listSasaran[0].keterangan);
        sasaran.inputLevel(dataSasaran.listSasaran[0].level);
        dataSasaran.listSasaran[0].detail.forEach((xyz, index) => {
            Object.keys(xyz).forEach((key) => {
                sasaran.inputIndikator(xyz[key], index, key);
            });
            if (index < dataSasaran.listSasaran[0].detail.length - 1) {
                sasaran.aksiTambahIndikator();
            }
        });
        sasaran.aksiSimpan();
        keyword.alert("Duplikat", "Sasaran Kinerja");
    });
})
