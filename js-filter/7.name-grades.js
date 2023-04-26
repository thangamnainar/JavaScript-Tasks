const students = [  
  { name: 'John', grades: [80, 90, 85] },
  { name: 'Mary', grades: [95, 87, 92] },
  { name: 'Joe', grades: [70, 75, 80] }
];
let array=[];
function filterd(arr,grade){
    arr.filter(a => {
        a.grades.filter(b => {
            if (b > grade)
            array[a.name]=[a.grades]
        })
        
    })
};
filterd(students,80)
console.log(array)