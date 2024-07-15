function showUserLogin() {
    var userLogin = localStorage.getItem("account-login");
    console.log("Email đã đăng nhâp", userLogin);
    document.getElementById("acc").innerHTML = userLogin;
}