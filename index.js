function pal(str) {
  // console.log(str.split(''));
  // const rev = str.split('').reverse().join('');
  // console.log(rev);

  var rev = [];
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    rev += str[i];
  }
  console.log(rev);
  if (str === rev) {
    console.log(`this word is a palindrome: "${str}" , palindrum: "${rev}"`);
    alert(`this word is a palindrome: "${str}" , palindrum: "${rev}"`);
  } else {
    console.log(
      `this is not palindrome: "${str}", after reversing word "${rev}"`
    );
    alert(`this is not palindrome: "${str}", after reversing word "${rev}"`);
  }
}

console.log('Enter a palindrome');
const userInput = prompt('Enter a word that is a palindrome');
pal(userInput);
