const cardList = [
    {
        group: "florals",
        name: "pippsissewa",
        colors: "green",
        imgSrc: "pipp.JPG",
        imgAlt: "pippsissewa flower",
        medium: "screenprinted"
    },
    {
        group: "boats",
        name: "smallboat",
        colors: "blue",
        imgSrc: "boat.JPG",
        imgAlt: "image of boat",
        medium: "linoprinted"
    },
    {
        group: "florals",
        name: "magnolia",
        colors: "creme",
        imgSrc: "magnolia.JPG",
        imgAlt: "magnolia flower",
        medium: "screenprinted"
    },
    {
        group: "florals",
        name: "rose",
        colors: "red",
        imgSrc: "rose.JPG",
        imgAlt: "rose flower",
        medium: "linoprinted"
    },
    {
        group: "birds",
        name: "egret",
        colors: "blue",
        imgSrc: "egret.JPG",
        imgAlt: "egret",
        medium: "watercolor"
    },
    {
        group: "bugs",
        name: "butterfly",
        colors: "orange",
        imgSrc: "butterfly.JPG",
        imgAlt: "butterfly",
        medium: "screenprinted"
    }

];

const imageFolder = "messing/images";
window.addEventListener("load", () => {
    showcardList();
}
);
console.log(cardList.length);

function showcardList() {
    const cardListElement = document.getElementById('here');
    cardListElement.innerHTML = "";
    rendercardList(cardList, cardListElement);
}
function rendercardList(cards, parent) {
    cards.forEach(card => {
        parent.appendChild(renderOneCard(card));
    });
}
function renderOneCard(card) {
    const item = document.createElement("li");
    item.innerHTML = `<h2>${card.name}</h2>
    <div class="image"><img src ="${imageFolder}${card.imgSrc}" 
    alt="${card.imgAlt}"></div>
    <div>
    <div>
    <h3>Card Name</h3>
    <p>${card.medium}</p>
    </div>
    <div>
    <h3>Card Subject</h3>
    <p>${card.group}</p>
    </div>
    <div>
    <h3>Predominant Color</h3>
    <p>${card.colors}</p>
</div>
</div>`;
}
