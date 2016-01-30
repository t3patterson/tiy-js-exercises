// Exercise 1 (running a sequence of callbacks in a desired order) 
// ------------------------------------------
// Create a function that accepts 3 callbacks and executes them in 2, 3, 1  order.
//   If the minute of the current hour is odd, run the first, if it is even, run the second  

function twoThreeOne(cb1,cb2,cb3){
  cb2();
  cb3();
  cb1();
}

// Exercise 2 (callbacks w/ conditional) 
// ------------------------------------------
// Create a function accepts 2 callback functions but only calls 1 of them
//    depending on the minute of the day

function runEvenOrOdd(cb1,cb2){ 
  d = new Date();
  var minute = d.getMinutes();

  if(minute % 2 === 0){
    cb1()
  } else {
    cb2()
  }
}

// Exercise 3 (callbacks passing object to make different string) 
// ------------------------------------------
// Write a function that takes an array as the 1st argument and a callback_fn as the 2nd
// ...the callback_fn should receive as parameters:
//     the 1st element of the array, the index #, and the whole array

var someNames = ["Jimmy", "Sally", "Georgie"]

function doSthToFirstElement(arr, fn){
  fn(arr[0],0,arr);
}