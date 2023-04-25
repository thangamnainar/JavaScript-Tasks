const names = ['Charlie', 'Bob', 'Alice', 'David', 'Emily'];
names.sort()
 let obj ={}
 names.map(n => {
   if (!(n in obj)){
    obj[n.split('').sort().join('')]=[n]
   }
 })
 console.log(obj)   