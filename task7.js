//traversing the dom//
var itemList=document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentelement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//childnode
console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor ='Yellow';

//Firstchild
//console.log(itemList.firstChild);
//firstelementchild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello';

//lastchild
//console.log(itemList.lastChild);
//firstelementchild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='Hello 4';

//nextsibling
//console.log(itemList.nextSibling);
//nextElementsibling
//console.log(itemList.nextElementSibling);

//previoussibling
//console.log(itemList.previousSibling);
//previouselementsibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createlement

//create div
var newDiv=document.createElement('div');

//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';

//add attr
newDiv.setAttribute('title','Hello div');

//create text node
var newDivText=document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);

var container =document.querySelector('header .container');
var h1 =document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontsize='30px';
container.insertBefore(newDiv,h1);

//create div
var newDiv=document.createElement('div');

//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';

//add attr
newDiv.setAttribute('title','Hello div');

//create text node
var newDivText=document.createTextNode('Hello ');

//add text to div
newDiv.appendChild(newDivText);

var contain =document.querySelector('h2 .title');
var h2 =document.querySelector('h2 ul');
console.log(h2);

newDiv.style.fontsize='30px';
contain.insertBefore(newDiv,h2);




/*newDiv1.appendChild(newDivText1);
//newDiv1.appendChild(newDivText1 );//+itemList.children;
//console.log(newDiv1);
//parentnode=document.getElementById('items');
itemList.children='newDivText1'+itemList.children;
console.log(itemList.children);

var itemList = document.getElementById('items');
var li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode('hii'));
console.log(li);*/