var myArray = [
    { date: "2022-01-01" },
    { date: "2022-01-15" },
    { date: "2022-01-11" },
    { date: "2022-02-01" },
    { date: "2022-03-01" },  
];
function filterd(arr,startDate,endDate){
    return arr.filter(function(obj) {
        var s_date= new Date(obj.date)
        return ((s_date >= (startDate)) && (s_date <= (endDate)))
    })
  };
let xyz=filterd(myArray,new Date('2020-01-01'),new Date('2022-01-11'));
console.log(xyz)
