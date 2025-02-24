import Login from "../../pages/auth/Login";

const login = new Login();

beforeEach(() => {
    login.visit();
    login.user("Admin Support");
    login.konfirmasiLogin();
    login.pilihModul("Admin Support Sevima", "Kerjasama");
    kerma.visitPage();

});