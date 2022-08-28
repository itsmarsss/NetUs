if (getCookie("auth") != "true") {
    window.location = "/NetUs/login.html";
}

updateLocal();

function updateLocal() {
    const pfp = document.getElementById("pfp");
    const aboutme = document.getElementById("aboutme");
    const pfpL = getCookie('pfp');
    const aboutmeL = getCookie('aboutme');
    
    pfp.outerHTML = `<img id="pfp" src="${pfpL}" alt="pfp" width="100" height="100">`;
    
    aboutme.outerHTML = `<p id="aboutme">${aboutmeL}</p>`;
}

function logout() {
    deleteAllCookies();
    window.location = "/NetUs/login.html";
}