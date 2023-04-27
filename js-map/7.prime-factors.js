// let array = [21,2,18,12,44]
// let obj ={}
// array.map(n =>{
//     if (!(n in obj)){
//         obj[n]=[]
//     }
//     for (i=1;i<=n;i++){
//         if (n%i==0){
//             obj[n].push(i)
//         }
//     }
// })
// console.log(obj)

let number=[21];

function isPrime(num){
    if(num > 1){
        for(let i = 2; i<=num/2; i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
}

function getPrimeFactors(n){
    let factors=[];
    if(isPrime(n)){
        factors.push(n)
    }
    else{
        for (let i=2;i<=n;i++){
            if ((isPrime(i)) && n%i==0){
                factors.push(i)
                n=n/i
                i=1
                if(isPrime(n)){
                    factors.push(n);
                    break;
                }
            }
        }
    }
    return factors;
};

// function getPrimeFactors(val){
//     let temp = val;
//     let factors = [];
//     if(isPrime(temp)){
//         factors.push(temp);
//     }else{
//         for(let i=2;i<=temp;i++){
//             if(isPrime(i) && (temp%i == 0)){
//                 factors.push(i);
//                 temp = temp/i;
//                 i = 1;
//                 if(isPrime(temp)){
//                     factors.push(temp);
//                     break;
//                 }
//             }
//         }
//     }
//     return  {numer : val,factors:factors};
    
// }
let x=number.map((e)=>getPrimeFactors(e))
console.log((x))























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