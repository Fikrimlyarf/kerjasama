import Login from "../../pages/auth/Login";
import Mitra from "../../pages/mitra/Mitra";

const login = new Login();
const mitra = new Mitra();
let dataMitra;

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    mitra.visitPage();

    cy.fixture("mitra/mitra").then((data) => {
        dataMitra = data;
    });
});

it("Admin menambahkan data mitra", () => {
    dataMitra.listMitra.forEach((data) => {
        mitra.aksiTambah();
        mitra.pilihJenisMitra(data.jenisMitra);
        mitra.inputNamaMitra(data.namaMitra);
        mitra.autoSelected('name="id_kriteria_mitra"', data.kriteria);
        mitra.inputNoIzin(data.noIzin);
        mitra.inputNpwp(data.npwp);
        mitra.pilihLingkup(data.lingkup);
        if (data.lingkup === "Regional" || data.lingkup === "Nasional") {
            cy.wait(1000);
            mitra.autoSelected('name="id_provinsi"', data.provinsi);
            cy.wait(1000);
            mitra.autoSelected('name="id_kota"', data.kota);
            cy.wait(1000);
            mitra.autoSelected('name="id_kecamatan"', data.kecamatan);
            cy.wait(1000);
        } else if (data.lingkup === "Internasional") {
            mitra.autoSelected('name="id_negara"', data.negara);
        }
        mitra.inputKodePos(data.pos);
        mitra.inputAlamat(data.alamat);
        mitra.inputEmail(data.email);
        mitra.inputTlp(data.telepon);
        mitra.inputWeb(data.website);

        dataMitra.kontak.forEach((kontak, index) => {
            mitra.aksiTambahKontak()            
            Object.keys(kontak).forEach((key) => {
                mitra.kontak(kontak[key], index, key);
            });
        })
        mitra.aksiSimpan();
        mitra.alert("Simpan");
        mitra.aksiKembalikelist()
    });
});

it('Admin mengubah data mitra', () => {
    mitra.aksi("Detail", "Testing");
    mitra.aksiUbah();
    mitra.inputNamaMitra("Mitra Testing");
    mitra.aksiSimpan(); 
    mitra.alert("Ubah");
});

it('Admin mencari data mitra', () => {
    mitra.cariData("Mitra Testing {enter}");
    mitra.cekDataList("Mitra Testing");
});

it.only('Admin menghapus data mitra', () => {
    mitra.cariData("Mitra Testing {enter}");
    mitra.aksi("Hapus", "Mitra Testing");   
    mitra.hapusItem();
    mitra.alert("Hapus");
});
