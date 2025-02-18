import Login from "../../pages/auth/Login";
import BentukKegiatan from "../../pages/auth/data-pelengkap/BentukKegiatan";

const login = new Login();
const bentukKegiatan = new BentukKegiatan();
let dataBentukKegiatan;

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    bentukKegiatan.visitPage();

    cy.fixture("data-referensi/bentuk_kegiatan").then((data) => {
        dataBentukKegiatan = data;
    });
});

describe("+ Positif Case", () => {
    it("Admin menambahkan data bentuk kegiatan", () => {
        dataBentukKegiatan.listBentukKegiatan.forEach((data) => {
            bentukKegiatan.aksiTambah();
            bentukKegiatan.pilihJenisKegiatan(data.jenis);
            bentukKegiatan.inputBentukKegiatan(data.bentukKegiatan);
            bentukKegiatan.inputKeterangan(data.keterangan);
            bentukKegiatan.aksi("Simpan");
            bentukKegiatan.alert("Simpan");
        });
    });

    it('Admin mencari data bentuk kegiatan', () => {
        bentukKegiatan.cariData("testing {enter}");
        bentukKegiatan.cekDataList("Testing");
    });

    it('Admin mengubah nama bentuk kegiatan', () => {
        bentukKegiatan.cariData("testing {enter}");
        bentukKegiatan.cekDataList("Testing");
        bentukKegiatan.aksi("Ubah", "Testing");
        bentukKegiatan.inputBentukKegiatan("Testing Lorem Ipsum");
        bentukKegiatan.inputKeterangan("Lorem Ipsum");
        bentukKegiatan.aksi("Simpan");
        bentukKegiatan.alert("Ubah");
    });

    it('Admin menghapus data bentuk kegiatan', () => {
        bentukKegiatan.cariData("lorem ipsum{enter}");
        bentukKegiatan.aksi("Hapus", "Testing Lorem Ipsum");
        bentukKegiatan.hapusItem();
        bentukKegiatan.alert("Hapus");
    });
})

describe("+ Negatif Case", () => {
    it.only('Admin menambahkan data bentuk kegiatan dengan nama yang sama', () => {
        bentukKegiatan.aksiTambah();
        bentukKegiatan.pilihJenisKegiatan(dataBentukKegiatan.listBentukKegiatan[0].jenis);
        bentukKegiatan.inputBentukKegiatan(dataBentukKegiatan.listBentukKegiatan[0].bentukKegiatan);
        bentukKegiatan.inputKeterangan(dataBentukKegiatan.listBentukKegiatan[0].keterangan);
        bentukKegiatan.aksi("Simpan");
        bentukKegiatan.alert("Duplikat");
    });
})
