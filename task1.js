/*



function list(names){
    let name = names.map(i => Object.values(i))
    /!*let conv = name.pop()*!/
let names2 = names.map(i => Object.values(i)).slice(0,2)
    // let comb = [names2,...name]
    return comb;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))*/


/*
function total(arr){

        for(let factor = 2; factor < arr; factor++){
            if(arr % factor === 0){
                return false;
            }
        }
return arr.reduce((sum, current) => sum + current, 0)
};

console.log(total([1,2,3,4,5,6]))*/

/*
function opposite(number) {
  return res = (number % 2 === 0) ? 'even' : 'odd'

}

console.log(opposite([6]))*/

/*
function digitize(n) {
    return n.toString().split(',')
}

console.log(digitize(35231))*/

/*
function spacey(array){
return array.map((item, index, array) => item[index])
}
console.log(spacey(['kevin', 'has','no','space']))*/
