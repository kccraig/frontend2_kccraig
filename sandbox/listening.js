console.log('keep going');

// document.getElementsByTagName('DIV').addEventListener('click', displayDate);
// function displayDate() {
//     document.getElementById(div).innerHTML = Date();
//   }

const tac = document.getElementsByTagName('DIV').innerHTML;
var go = "hi" + tac;
console.log(go);

document.getElementById('myBtn').addEventListener('click', displayDate);

function displayDate() {
    document.getElementById('div1').innerHTML = Date();
}

changeColor = () => {body.style.background = "green"};

document.getElementById('div2').addEventListener('click', changeColor);


hello = () => "Hello World!";
