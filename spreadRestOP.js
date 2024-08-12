function restop(x, ...rest) {
    return rest;
}
console.log(restop(10, 1, 2, 3, 4, 5, 7));


function spreadop(a, b, c) {
    return a + " " + b + " " + c;
}

arr = [1, 2, 3]
console.log(spreadop(...arr));


console.log("=====================================================");