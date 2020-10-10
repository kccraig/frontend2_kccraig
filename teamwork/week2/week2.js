function inputclick() {
    const text = document.getElementById("input1").value;
    document.getElementById('empty').innerHTML = "\"" + text + "\"";

}

function numsum() {
    const end = parseInt(document.getElementById("numbox1").value);
    let sum = 0;
    for (let i = 0; i <= end; i++) {
        sum += i;
        document.getElementById('sumbox').innerHTML = sum;
    }

}

function machine() {
    let numb1 = parseInt(document.getElementById("num1").value);
    let numb2 = parseInt(document.getElementById("num2").value);
    let newsum = (numb1 + numb2);
    document.getElementById('addbox').innerHTML = newsum;

}