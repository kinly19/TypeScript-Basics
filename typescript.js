// ================================================== Notes ==================================================
// this function below takes two arguments and adds them together
function add(a, b) {
    return a + b;
}
var result = add(2, 5);
console.log(result);
// this will return 2 + 5 = 7
// but the above function can take either a 'string' type value or an actual number type value
// meaning the results between a 'string' type value of a number and a number type value differ...!
// calling the same function above but using a 'string' type of a number
//  add('2','5') = '25'
//  will lead to javascript concatenating the two 'strings' together '2'+'5'
//  console.log('2' + '5')
// This is where Typescript can help us. 
var newAdd = function (a, b) {
    return a + b;
};
var newResult = newAdd(2, 5);
console.log(newResult);
// With typescript we can now tell our function which value type it should accept... (number)
// trying to call this same function with a 'string' type value, will give us a warning telling us this value 
//  should be a number type value. Now we can see/catch such errors as we write the code.  

// npx tsc to invoke compiler 
// npx tsc --> typescript.ts point to the file to be compiled 
// ===========================================================================================================
