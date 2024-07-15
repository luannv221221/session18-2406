function renderLoginPage() {
    document.getElementById("body").innerHTML = `
            <div class="secction-login">
                <form action="" class="form">
                    <div class="form-group">
                        <input type="text" placeholder="Email hoặc số điện thoại">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Mật khẩu" value="" id="ip_pass">
                    </div>
                    <div class="form-group">
                        <button>Đăng Nhập</button>
                    </div>
                </form>
            </div>
            `
}