const errormsg = document.getElementsByClassName('error');
const username = document.getElementById('username');
const password = document.getElementById('password');

function login() {
    const Http = new XMLHttpRequest();
    const url = 'urlhere';
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
                if (isElementInViewport(element)) {
                    element.classList.add('show-error');
                }
            });
        }
    }

}