function forLoop(array) {
  var newArray = array.slice();
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      newArray.push('I am 1 strange loop.')
    } 
    else {
      newArray.push(`I am ${i} strange loops.`)
    }
  }
  return newArray;
}

function whileLoop(number) {
 var countdown = number
 while (countdown > 0) {
   console.log(--countdown);
 }
}