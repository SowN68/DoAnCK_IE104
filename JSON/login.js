

const button = document.querySelector('.btn-login');
const body = document.querySelector('body');
button.addEventListener('click', checkLogin);

function checkLogin(event) {
            event.preventDefault();

            const username = document.getElementById('login_username').value;
            const pw = document.getElementById('login_password').value;
            const alert = document.querySelector('.aler-login');

            if (username == '19522140@gm.uit.edu.vn' && pw == '123456') {
                        alert.innerText = `Đăng nhập thành công!`;
            }
            if (pw != '123456') {
                        alert.innerText = `Sai mật khẩu`;
            }
            if (username != '19522140@gm.uit.edu.vn' && pw != '123456') {
                        alert.innerText = `Tài khoản này không tồn tại`;
            }
            if (username != '19522140@gm.uit.edu.vn') {
                        alert.innerText = `Tài khoản này không tồn tại`;
            }
            
}
