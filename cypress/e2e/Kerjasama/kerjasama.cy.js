import Login from "../../pages/auth/Login";
import Kerjasama from "../../pages/kerjasama/Kerjasama";
import Keyword from "../../pages/keyword";

const login = new Login();
const kerma = new Kerjasama();
const keyword = new Keyword();
let dataKerma

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    kerma.visitPage();

    cy.fixture("kerma/kerjasama").then((data) => {
        dataKerma = data;
    });
});

describe("+ Positif Case", () => {
    it('Admin menambahkan data kerjasama', () => {
        dataKerma.listKerjasama.forEach((data) => {
            kerma.aksiTambah();
            kerma.inputDokumenKerjasama(data.noKerjasama);
            kerma.inputDokumenMitra(data.noMitra)
            keyword.autoSelected('name="id_jenis_dokumen"', data.jenisDokumen);
        })
    });
})