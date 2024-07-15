function renderRegisterPage() {
    document.getElementById("body").innerHTML = `
            <div class="secction-login">
                <form action="" class="form">
                    <div class="form-group">
                        <input type="text" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Full Name">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Phone">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Mật khẩu" value="">
                    </div>

                    <div class="form-group">
                        <button>Đăng Ký</button>
                    </div>
                </form>
            </div>
            `
}