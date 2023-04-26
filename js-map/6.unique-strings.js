var array =['siva','ram','kamal','ram','kumar','kamal','raj']

let arry =[]
array.map(s => {
    if (!(arry.includes(s))){
        arry.push(s)            
    }
})
console.log(arry)