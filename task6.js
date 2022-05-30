 //queryselector//
/* var header=document.querySelector('#main-header');
 header.style.boarderBottom ='solid 4px #ccc';
var input =document.querySelector('input');
input.value='Hello world'

var submit =document.querySelector('input[type="submit"]');
submit.value='SEND'

var item =document.querySelector('.list-group-item');
item.style.color='red';

var thirdItem =document.querySelector('.list-group-item:nth-child(3)');
thirdItem.textContent=' ';

var secondItem =document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

//queryselectorall//
var titles =document.querySelectorAll('.items');

console.log(items);

var odd =document.querySelectorAll('li:nth-child(odd)');

var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='grey';
    even[i].style.backgroundColor='yellow';
}*/
var thirdItem =document.querySelector('.list-group-item:nth-child(3)');
thirdItem.textContent=' ';
var secondItem =document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var items =document.querySelectorAll('.list-group-item');
console.log(items);
items[1].style.color =' green';
var odd =document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}





