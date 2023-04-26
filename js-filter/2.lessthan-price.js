const items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 }
  ];
  let array =[];
  function fillterd(arr,maxprice){
    arr.filter(n => {
        if(n.price <maxprice){
            array[n.name]=[n.price ]
        };
    });
    
  };
fillterd(items,22)
console.log(array)