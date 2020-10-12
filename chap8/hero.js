// “const form = document.forms['hero'];
// form.addEventListener('submit', makeHero, false);”

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); 
    const hero = {};
    hero.name = form.heroName.value;
    alert(JSON.stringify(hero));
}
function showPage() {
    const word= document.getElementById('wordPlace').innerHTML;
    const password = "go";
    if (word = passWord) {
        window.open("https://www.w3schools.com/jsref/met_win_open.asp");
}