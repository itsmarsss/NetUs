const tswitch = document.getElementById("switch");
try {
    if (window.sessionStorage.getItem("dark") == "true") {
        toggle();
        tswitch.click();
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