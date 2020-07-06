// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//Rewrite the above function as an arrow function
let arr = [ 2, 4, 6 ];
// const double = (arr) => {
// 	arr.map = (val) => {
// 		val * 2;
// 	};
// };

const double = (arr) => arr.map((val) => val * 2);
console.log(double);
