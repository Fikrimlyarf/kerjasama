import Login from "../../pages/auth/Login";
import SasaranKinerja from "../../pages/data-pelengkap/SasaranKinerja";

const login = new Login();
const sasaran = new SasaranKinerja();

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
});

describe("+ Positif Case", () => {
    it('Admin menambahkan data sasaran kinerja', () => {
        
    });
})