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


//result//
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
}, );
