const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();
    const hero={};
    hero.name = form.heroName.value;
    alert(JSON.stringify(hero));
    return hero;
    
    hero.powers = [];
    for (let i=0; i< form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.realName = form.realName.value;

    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

}
// document.forms.hero.powers[0].checked = true;

// const heros= document.getElementById('realName').innerHTML;
// console.log(heros);