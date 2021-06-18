function load() {
    document.getElementById('register').style = "display:none;";
    document.getElementById('register-text').style = "display:none;";
}

document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login').style="display:none;";
    document.getElementById('login-text').style="display:none;";
    document.getElementById('register').style = "display:block;";
    document.getElementById('register-text').style = "display:block;";
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var uname = document.getElementById('uname');
    var psw = document.getElementById('psw');
    var eaddress = document.getElementById('eaddress');
    var city = document.getElementById('city');
    var mobileNum = document.getElementById('mobileNum');

    if (uname.value.trim() !== "" && psw.value.trim() !== "" && eaddress.value.trim() !== "" && city.value.trim() !== "" && mobileNum.value.trim() !== "") {
        window.location.replace("https://www.mindtree.com");
    }
});