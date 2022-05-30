//get elements by class//
var items = document.getElementsByClassName('list-group-item');
var head1=document.getElementsByClassName('Title');
items[2].style.backgroundColor='green';    
for(var i=0; i< items.length;i++)
{
    items[i].style.fontWeight ='bold';
    items[i].style.color='red';
}
//get elements by tagname//
/*var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight ='bold';
li[2].style.background='yellow';
for(var i=0; i< li.length;i++)
{
    li[i].style.background ='yellow';
}
//var head1=document.getElementsByClassName('Title');
//var items = document.getElementsByClassName('list-group-item');*/

  
li[2].style.backgroundColor='green';    
for(var i=0; i< li.length;i++)
{
    li[i].style.fontWeight ='bold';
    li[i].style.color='red';}

    //queryselector//
    var header=document.querySelector('#main-header');
    header.style.boarderBottom ='solid 4px #ccc';
