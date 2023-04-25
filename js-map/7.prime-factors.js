let array = [21,45,18,12,44]
let obj ={}
array.map(n =>{
    if (!(n in obj)){
        obj[n]=[]
    }
    for (i=1;i<=n;i++){
        if (n%i==0){
            obj[n].push(i)
        }
    }
})
console.log(obj)
























// let array = [21,45,18,12,44]
// function primeFactors(n) {
//     const factors = [];
//     let divisor = 2;
    
//     while (n > 2) {
//       if (n % divisor === 0) {
//         factors.push(divisor);
//         n = n / divisor;
//       } else {
//         divisor++;
//       }
//     }
    
//     return factors;
//   }
  
//   function primeFactorsArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       const factors = primeFactors(num);
//       let obj ={};
//       obj[num]=factors
//       console.log(obj)
//     }
//   }
  
// console.log(primeFactorsArray(array))