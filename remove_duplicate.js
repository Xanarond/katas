function removeDuplicateWords(s) {
    let arrlenght = s.length
    let arrlen = s.split('').slice(0, 5).length
    let regexp = `/[a,l,p,h,a]{arrlen}/`
    console.log(regexp)
    console.log(arrlenght)
    console.log(arrlen)
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

