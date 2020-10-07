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
//  const input = form.elements.searchInput;
//  input.addEventListener('focus', () => alert('focused'), false);

 const list = new Set();
 list.add(3);
 list.add(2) .add(4) .add(7);
 const letters = new Set('apples');
 list.delete(4);
 const musicSet = new Set().add('jorge').add('michael').add('paul');
console.log(musicSet);
const musicArray = Array.from(musicSet);
console.log(musicArray);
console.log(musicArray.length);
 console.log(letters);
 console.log(list);

 sayHi = () => {
     alert("HI!");
 }