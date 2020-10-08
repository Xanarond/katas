/*
function getSum(a,b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}

console.log(getSum(-549, -199))*/

/*function sqr(arr) {
    let sqr = arr.map(function (x) {
        return Math.pow(x, 2);
    });
    return result = sqr.reduce((sqr, current) => sqr + current, 0);
    //return numbers.reduce((s,a)=>s+a*a,0);
}
console.log(sqr([1,2,2]))*/

/*
var summation = function (num) {
    return num * (num + 1) / 2;
}

console.log(summation(8))*/

/*
function basicOp(operation, value1, value2)
{
    switch (operation) {
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value1
        case '/':
            return value1 / value2
    }
}

console.log(basicOp('+', 4, 7))
console.log()*/

/*
function highAndLow(numbers) {
    let arr = numbers.split(' ')
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return `${max} ${min}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))*/

/*
function findUniq(arr) {
    /!*let res = arr.filter((item, i, ar) => ar.indexOf(item) >= 1).toString();
    return parseInt(res)*!/
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))*/

/*
function domainName(url) {
    let begin = ['http://', 'https://', 'www.', '.com', ]


        /!*if (url.search('http://') !== -1) {
            let result = url.replace('http://', '')
            if (result.search('.com') !== -1) {
                return result.replace('.com', '')
            }
        }*!/

}

console.log(domainName("http://google.com"))*/


function solution(nums){
   return nums !== null  ? nums.sort((a, b) => a - b) : []
}

console.log(solution([1, 2, 10, 50, 5]))
console.log(solution(null))