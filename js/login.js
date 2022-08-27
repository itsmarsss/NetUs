const errormsg = document.querySelectorAll('.error');
const username = document.getElementById('username');
const password = document.getElementById('password');

function login() {
    const Http = new XMLHttpRequest();
    const url = 'www.google.com';
    const user = username.value;
    const pass = password.value;
    const json =
    `
    {
        "username": "${user}",
        "password": "${pass}"
    }
    `;
    Http.open("GET", url);
    Http.send(JSON.parse(json));


    Http.onreadystatechange = (e) => {
        const status = Http.responseText
        if(status === "authorized") {
            window.location.href = "home.html";
        }else {
            errormsg.forEach(function (element) {
                element.classList.add('show-error');
            });
        }
    }

}