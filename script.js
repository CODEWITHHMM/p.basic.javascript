let arr=[45,23,21];
let a=arr.map((value,index,arr)=>{
    console.log(value, index, arr);
    return value + 1;
})
console.log(a);


