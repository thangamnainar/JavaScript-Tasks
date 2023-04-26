const strings = ['hello', 'world', 'this', 'is', 'a', 'test'];
let array =[];
function lenofstring(arr,num){
    arr.filter( s => {
        if (s.length > num){
            array.push(s)
        };
    });
};
lenofstring(strings,3)
console.log(array)