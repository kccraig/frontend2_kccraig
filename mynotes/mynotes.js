const date = new Date();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();
document.getElementById('timeplace').innerHTML = month + "/" + day + "/" + year;
