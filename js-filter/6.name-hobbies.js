const people = [  
  { name: 'John', hobbies: ['reading', 'swimming', 'hiking'] },
  { name: 'Mary', hobbies: ['cooking', 'hiking', 'painting'] },
  { name: 'Joe', hobbies: ['swimming', 'photography','reading'] }
];
let array=[];
function filterd(arr,hobbie){
    arr.filter(a => {
        a.hobbies.filter(b => {
            if (b == hobbie){
                array[a.name]=[a.hobbies]
            };
            
        });
        
    });
};
filterd(people,'swimming')
console.log(array)
