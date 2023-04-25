const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 42 },
    { name: 'David', age: 28 },
    { name: 'Emily', age: 25 },
    { name: 'siva', age: 38 }
  ];
let obj={}
people.map(n => {
    if (n.age in obj ){
        obj[n.age].push({name:n.name})
    }
    else{
        obj[n.age]=[{name:n.name}]
    }
})
console.log(obj)