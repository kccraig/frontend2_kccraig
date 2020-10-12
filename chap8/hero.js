const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();
    const hero = {};
    hero.name = form.heroName.value;
    alert(JSON.stringify(hero));
    hero.realName = form.realName.value;
    console.log(form.powers);
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    console.log(hero.powers);
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    console.log(hero.powers);
    form.category;
    hero.age = form.age.value;
    console.log(hero.age); 
  
    form.city;
    console.log(form.city);

}

// function showPage() {
//     const word= document.getElementById('wordPlace').innerHTML;
//     const password = "go";
//     if (word = passWord) {
//         window.open("https://www.w3schools.com/jsref/met_win_open.asp");
// }