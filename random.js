/*
function generateIntegers(m, n) {
    let arr = []
    arr.length = 4
    var positiveArr = arr.filter(function(number) {
        arr.push(Math.floor(Math.random()))
    });
    console.log(positiveArr)
}

generateIntegers(2, 5)
*/


/*function halvingSum(n) {
return Math.round(n + n/2 + n/4 + n/8 + n/16)
}

console.log(halvingSum(25))
console.log(halvingSum(127))*/


function capitalize(s) {
    let arr = [];
    let str = s.toLowerCase().split(''); // Переводим строку в нижний регистр, и разбиваем на массив.
    let j = 0;
    for (let i = 0; i < str.length; i++) { // проходимся циклом по этим массивам
        if (str[i] === ' ') {
            j = 0;
        } else {
            if (j % 2 === 0) {
                str[i] = str[i].toUpperCase(); // переводим элемент с четным индексом в верхний регистр
            }
            j++;
        }
    }
    return str.join('');
}

console.log(capitalize('hello'))
