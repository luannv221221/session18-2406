function renderRegisterPage() {
    document.getElementById("body").innerHTML = `
            <div class="secction-login">
                <form action="" class="form">
                    <div class="form-group">
                        <input type="text" placeholder="Email" id="email">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Full Name" id="fullName">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Phone" id="phone">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Mật khẩu" value="" id="password">
                    </div>

                    <div class="form-group">
                        <button type="button" onclick="handleRegister()">Đăng Ký</button>
                    </div>
                </form>
            </div>
            `
}