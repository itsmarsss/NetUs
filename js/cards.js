const cards = document.getElementById("cards");

function selected(site) {
    window.open(site, "_blank");
}

loadMore();

function loadMore() {
    for (let i = 0; i < 12; i++) {
        let link = 'https://itsmarsss.github.io/Calculator-app';
        let name = 'Name';
        let pfp = 'assets/placeholder.png';
        let about = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi'

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