import Login from "../../pages/auth/Login";
import Mitra from "../../pages/mitra/Mitra";
import Keyword from "../../pages/keyword";

const login = new Login();
const mitra = new Mitra();
const keyword = new Keyword();
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
        keyword.autoSelected('name="id_kriteria_mitra"', data.kriteria);
        mitra.inputNoIzin(data.noIzin);
        mitra.inputNpwp(data.npwp);
        mitra.pilihLingkup(data.lingkup);
        if (data.lingkup === "Regional" || data.lingkup === "Nasional") {
            cy.wait(1000);
            keyword.autoSelected('name="id_provinsi"', data.provinsi);
            cy.wait(1000);
            keyword.autoSelected('name="id_kota"', data.kota);
            cy.wait(1000);
            keyword.autoSelected('name="id_kecamatan"', data.kecamatan);
            cy.wait(1000);
        } else if (data.lingkup === "Internasional") {
            keyword.autoSelected('name="id_negara"', data.negara);
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
        keyword.alert("Simpan", "Mitra");
        mitra.aksiKembalikelist()
    });
});

it('Admin mengubah data mitra', () => {
    keyword.aksi("Detail", "Testing");
    mitra.aksiUbah();
    mitra.inputNamaMitra("Mitra Testing");
    mitra.aksiSimpan(); 
    keyword.alert("Ubah", "Mitra");
});

it('Admin mencari data mitra', () => {
    keyword.cariData("Mitra Testing");
    keyword.cekDataList("Mitra Testing");
});

it('Admin menghapus data mitra', () => {
    keyword.cariData("Mitra Testing");
    mitra.aksi("Hapus", "Mitra Testing");   
    mitra.hapusItem();
    keyword.alert("Hapus", "Mitra");
});
