const tswitch = document.getElementById("switch");
try {
    if (window.sessionStorage.getItem("dark") == "true") {
        toggle();
        tswitch.click();
    }
} catch (error) { }

try {
    if (window.sessionStorage.getItem("auth") == "true") {
        const logins = document.getElementsByClassName("toBeGone");
        logins.forEach(function (element) {
            element.classList.add('hide');
        });
    }else if (window.sessionStorage.getItem("auth") == "false") {
        const logins = document.getElementsByClassName("toBeGone");
        logins.forEach(function (element) {
            element.classList.remove('hide');
        });
    }
} catch (error) { }

let dark = false;
tswitch.addEventListener("mousedown", (event) => {
    toggle();
});

function toggle() {
    document.body.classList.toggle('dark-theme');
    dark = !dark;
    window.sessionStorage.setItem("dark", dark);
}