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
    document.cookie = name + "=" + (ascii_to_hex(value) || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            if (c.substring(nameEQ.length, c.length) == "true" || c.substring(nameEQ.length, c.length) == "false") {
                return c.substring(nameEQ.length, c.length);
            }
            return hex_to_ascii(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

function ascii_to_hex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}