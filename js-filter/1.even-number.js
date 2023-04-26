let array=[2,4,56,33,7,0,43,24,6,43,];
let array2=[];
array.filter(n =>{
    if (n%2==0){
        array2.push(n)
    };
});
console.log(array2);