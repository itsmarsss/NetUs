if (getCookie("auth") != "true") {
    window.location = "/NetUs/login.html";
}

updateLocal();

function updateLocal() {
    const pfp = document.getElementById("pfp");
    const aboutme = document.getElementById("aboutme");
    pfp.innerHTML = `<img id="pfp" src="${getCookie("pfp")}" alt="pfp" width="100" height="100">`
    
    aboutme.innerHTML = `<p id="aboutme">${getCookie("aboutme")}</p>`
}