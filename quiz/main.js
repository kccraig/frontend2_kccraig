// alert('Welcome to Quiz Ninja!');
const name = "birthday";
document.getElementById('namespot').innerHTML = " " + name.length;
document.getElementById('namespot2').innerHTML = " " + name.toUpperCase();
document.getElementById('namespot3').innerHTML = " " + name.indexOf('A');

document.getElementById('hellospan').innerHTML = " `hello` ";

const fruit = `apples`;
const fruittalk = `I like ${fruit}!`;
document.getElementById('fruit').innerHTML = fruittalk;


/*form time*/

//  function searchbutton() {
//      alert("cant find it");

//  }
 const input = form.elements.searchInput;
 input.addEventListener('focus', () => alert('focused'), false);