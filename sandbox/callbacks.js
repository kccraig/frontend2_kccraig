[1,2,3].forEach(function (item, index) {
    console.log(item, index);
});


const three = [1, 2, 3];
const doubled = three.map(function (item) {
    return item * 2;
});
console.log( three === doubled, doubled);

const four = [4, 5, 6];
const thriced = four.map(function (item) {
    return item * 3;
});
console.log(four === thriced, thriced);


const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item % 2 ===0;
});
console.log(ints === evens, evens);

const nums = [4, 5, 6];
const odds = nums.filter(function (item) {
    return item % 2 !== 0;
});
console.log(nums !== odds, odds);


// [20, 21, 22, 23, 24, 25, 25, 27, 28]
const huns = [20, 21, 22, 23, 24, 25, 25, 27, 28].every(function (item) {
    return item < 100;
});
console.log(huns);

const allthrees = [20, 21, 22, 23, 24, 25, 25, 27, 28].every(function (item) {
    return item % 3 === 0;
});
console.log(allthrees);

const mylists = [20, 21, 22, 23, 24, 25, 25, 27, 28];
const threesies = mylists.filter(function (item) {
    return item % 3 ===0;
});
console.log(threesies);

