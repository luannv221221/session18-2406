function logout() {
    localStorage.removeItem("account-login");
    showUserLogin();
    // chuyển đến trang đăng nhập
    renderLoginPage();
}