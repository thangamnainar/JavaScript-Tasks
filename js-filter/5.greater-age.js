const people = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 16 },
    { name: 'Joe', age: 20 },
    { name: 'raj', age: 26 },
    { name: 'ram', age: 18 }
  ];
let array=[];
function filterd(arr,age){
    arr.filter(p => {
        if(p.age > age){
            array[p.name]=[p.age]
        };
    });
};
filterd(people,16)
console.log(array)  