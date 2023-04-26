let palindromes=['dad','brother','mom','sister','mama','nun']
let array=[];
palindromes.filter(p => {
    if (p==(p.split('').reverse().join(''))){
        array.push(p)
    };
})
console.log(array)