var array =[
    { name: "apple", category: "fruit" },
    { name: "banana", category: "fruit" },
    { name: "carrot", category: "vegetable" },
    { name: "lettuce", category: "vegetable" },
    { name: "orange", category: "fruit" },
    { name: "Tomato", category: "vegetable" },
    { name: "grapes", category: "fruit" },
    { name: "potato", category: "vegetable" },
  ]
  let obj ={}
  array.map(s => {
    if (s.category in obj ){
        obj[s.category].push({name:s.name})
    }
    else{
        obj[s.category]=[{name:s.name}]
    }
})
console.log(obj)