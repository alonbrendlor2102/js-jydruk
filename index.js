// Import stylesheets
import './style.css';

// Write Javascript code!



function sum(x) {
  return function(y) {
      return x+y;
  };
}
sum(4)(5);

//write function print3arr which accepts an array [1,2,3,4,5] and add 3 to each array and returns [4,5,6,7,8]
function print3arr(arr) {
  return arr.map( (item) => {
      return item + 3;
  });
}