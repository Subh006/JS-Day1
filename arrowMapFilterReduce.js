let arr1= [2,4,8,10]
let upArr1 = arr1.map(val=> val+2)
console.log("arr1 - "+arr1);
console.log("upArr1 - "+ upArr1);

let arr2 = [32,63,42,12];
let upArr2 = arr2.filter(val => val < 40);
console.log("arr2 - "+arr2);
console.log("upArr2 - "+ upArr2);

let arr3= [1,2,3,4,5]
let upArr3 = arr3.reduce((prev, curr)=> prev*curr)
console.log("arr3 - "+arr3);
console.log("upArr3 - "+ upArr3);


let arrow = (a,b) => "sum = "+ (a+b);
console.log(arrow(4,6));

console.log("=====================================================");