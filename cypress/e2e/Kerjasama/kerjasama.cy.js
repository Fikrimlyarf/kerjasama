import Login from "../../pages/auth/Login";
import Kerjasama from "../../pages/kerjasama/Kerjasama";

const login = new Login();
const kerma = new Kerjasama();

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    kerma.visitPage();
});