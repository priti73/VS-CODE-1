//get elements by class//
var items = document.getElementsByClassName('list-group-item');
/*console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight ='bold';
items[2].style.background='yellow';
for(var i=0; i< items.length;i++)
{
    items[i].style.background ='yellow';
}*/

  
items[2].style.backgroundColor='green';    
for(var i=0; i< items.length;i++)
{
    items[i].style.fontWeight ='bold';
    items[i].style.color='red';
}