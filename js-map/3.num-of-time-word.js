let myArray = ["Sara",'siva','raj','ram','Sara','siva']
let obj={}
myArray.map(e =>{
  if(!(e in obj)){
    obj[e]=1
  }else{
    obj[e]+=1
  }
})
console.log(obj)





// function count (x){
//     var WordCount = {};
//     x.map((value)=>{
//       if (value in WordCount){
//         WordCount[value] +=1;
//       }
//       else{
//         WordCount[value] = 1;
//       }
//     })
//     return WordCount
//   };


// console.log(count(myArray))
