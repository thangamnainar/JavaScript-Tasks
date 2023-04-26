const items = [  
    { name: 'Item 1', category: 'A' }, 
    { name: 'Item 2', category: 'B' }, 
    { name: 'Item 4', category: 'A' },
    { name: 'Item 5', category: 'c' },
    { name: 'Item 6', category: 'A' }
];
let array=[];
items.filter(s => {
    if(!(array.includes(s.category))){
        array.push(s.category)
    };
});
console.log(array);