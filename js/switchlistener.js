const tswitch = document.getElementById("switch");
try {
    if (window.sessionStorage.getItem("dark") == "true") {
        toggle();
        tswitch.click();
    }
} catch (error) { }

if (getCookie("auth") == "true") {
    const logins = document.querySelectorAll(".toBeGone");
    logins.forEach(function (element) {
        element.classList.add('hide');
    });
} else if (getCookie("auth") == "false") {
    const logins = document.querySelectorAll(".toBeGone");
    logins.forEach(function (element) {
        element.classList.remove('hide');
    });
}

let dark = false;
tswitch.addEventListener("mousedown", (event) => {
    toggle();
});

function toggle() {
    document.body.classList.toggle('dark-theme');
    dark = !dark;
    window.sessionStorage.setItem("dark", dark);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}