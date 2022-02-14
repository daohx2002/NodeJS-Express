var CORRECT_USER = 'admin';
var CORRECT_PASS = 'admin';
var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');
if(formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
}
else{
    formLogin.addEventListener('submit', onFormSubmit);
}
function onFormSubmit(e){
    if(e.preventDefault) e.preventDefault();
    var username = inputUsername.value;
    var password = inputPassword.value;
    if(username == CORRECT_USER && password == CORRECT_PASS){
        window.location = 'http://localhost:5000/';
    }else{
        alert('Sai tai khoan & mat khau');
    }
}