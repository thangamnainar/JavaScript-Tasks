var arr= ['sivssa','kamal']
let obj={}
arr.map(s => {
    s.split("").map(letter =>{
        if (letter in obj){
            obj[letter]+=1
        }
        else{
            obj[letter]=1
        }
    })
})
console.log(obj)
