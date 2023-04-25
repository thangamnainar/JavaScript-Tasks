const myArray = [
        { name: "John" },
        { name: "Mary" },
        { name: "Bob" },
        { name: "Alice" }
      ];  
    let c_name= myArray.map(x=>x.name.toUpperCase())
    console.log(c_name)
    console.log(myArray)