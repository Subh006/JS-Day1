function callback(some) { // this is a callback function because we are passing it as a parameter
    console.log(some);
  }
  
  function calC(num1, num2, cbf) { // this is hof because we are taking another function as a parameter
    let sum = num1 + num2;
    cbf(sum);
  }
  
  calC(6, 1, callback);

  console.log("=====================================================");