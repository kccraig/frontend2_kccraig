const date = new Date();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();
document.getElementById('timeplace').innerHTML = month + "/" + day + "/" + year;


const car = {
    make: 'ford',
    model: 'falcon',
    year: '1967',
    similar: ['mustang', 'fairlane', 'focus'],
    speedofcar() {
        return 'bullit is the best';
    }
};
console.table(car);

