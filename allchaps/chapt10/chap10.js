strict = () => {
    'use strict';
}


// function amIOldEnough(age){
//     const ageText = document.getElementById('hiAlert');
//     ageText.addEventListener('keyup',function(event) {

//     })
//     const age = document.getElementById('hiAlert').innerHTML;

//     if (age = 12) {
//         alert(age);
//         return 'No, sorry.';
//     } else if (age < 18) {
//         return 'Only if you are accompanied by an adult.';
//     }
//     else {
//         return 'Yep, come on in!';
//     }
// }

sayHi = () => {
    alert('hi honey!');
}

const input = document.getElementById('hiAlert');
input.addEventListener('keyup'), function(event) {
    if (event.keyCode === 13) {
const age = input;
    if (age = 12) {
                alert(age);
                
            } else if (age < 18) {
                alert(age + "you're a teenager");
            }
            else {
                alert("too old");
            }
}
}