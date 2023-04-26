let peopels=[
    {name:'siva',email:'siva@gamil.com'},
    {name:'kamal',email:'kamal.mohan.@gamil.ai'},
    {name:'mohan',email:'mohan@gamil.com'},
    {name:'john',email:'john@gamil.john'},
    {name:'ram',email:'ram@gamcomil.ai'},
];
var array=[];
let domain='ai'
peopels.filter(e =>{
    let x=e.email.split('.')
    let y=x.length-1
    if(x[y]==domain){
        array.push(e)
    }
   
})

console.log(array)  