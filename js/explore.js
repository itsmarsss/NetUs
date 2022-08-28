const cards = document.getElementById("cards");
const query = document.getElementById("query");

query.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        cards.innerHTML = "";
        getUsers();
        loadAll();
    }
});

function selected(site) {
    window.open(site, "_blank");
}

let users = [];

getUsers();

function getUsers() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", '/NetUs/UsersServlet', false);
    xmlHttp.send(null);
    const response = xmlHttp.responseText;
    console.log(response);
    users = JSON.parse(response)
}

loadAll();

function loadAll() {
    const length = users.length;
    const queryTerm = query.value;
    try {
        for (var i = 0; i <= length; i++) {
            console.log(i);
            let user = users.shift();
            let link = hex_to_ascii(user.website);
            let name = hex_to_ascii(user.username);
            let pfp = hex_to_ascii(user.pfp); //'assets/placeholder.png'
            let about = hex_to_ascii(user.aboutme); //'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi'

            if (name.toLowerCase().includes(queryTerm.toLowerCase())
                || about.toLowerCase().includes(queryTerm.toLowerCase())) {
                cards.innerHTML +=
                    `<div class="card show-on-scroll">
                <div class="user" id="link" onclick="selected('${link}')">
                    <div class="top">
                        <img class="pfp" src="${pfp}" width="50" height="50"></td>

                        <h3 class="name">
                            ${name}
                        </h3>
                    </div>
                    <div class="bottom">
                        <h5 class="about">
                            About: <em>${about}</em>
                        </h5>
                    </div>
                </div>
            </div>`
            }
        }
    } catch (error) { }
}

function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
