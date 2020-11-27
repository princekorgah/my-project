localStorage.setItem('result', 'passed');
localStorage.setItem('todo', 'take quiz again');
var myResult = localStorage.getItem('result');
console.log(myResult);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo', 'Record youtuve videos');
console.log(localStorage.getItem('todo'));


//localStorage.removeItem('result');
localStorage.clear();

myResult = localStorage.getItem('result');
console.log(myResult);

