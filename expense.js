const myForm = document.querySelector('#my-form');
const expInput = document.querySelector('#amount');
const desInput = document.querySelector('#description');
const catInput = document.querySelector('#category');
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
    if(expInput.value === '' || desInput.value === '' || catInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    // Remove error after 2 seconds
    setTimeout(() => msg.remove(), 2000);
  } else {
    let obj={
                expInput:expInput.value,
                desInput:desInput.value,
                catInput:catInput.value
                
     }
    localStorage.setItem(obj.expInput,JSON.stringify(obj));
    showNewExpenseOnScreen(obj)
    expInput.value = '';
    desInput.value = '';
    catInput.value = '';
}
}
function showNewExpenseOnScreen(user){
                   const parentNode = document.getElementById('listofusers');
                   console.log(parentNode);
                   const childHTML = `<li id=${user.expInput}> ${user.expInput} - ${user.desInput} - ${user.catInput}
                       <button onclick=deleteExpense('${user.expInput}')> Delete Expense </button>
                      <button onclick=editExpenseDetails('${user.expInput}')>Edit Expense </button>
                      </li>`
                   parentNode.innerHTML = parentNode.innerHTML + childHTML;
            }
function editExpenseDetails(expInput){
exp= JSON.parse(localStorage.getItem(expInput));
document.getElementById('amount').value= exp.expInput;
document.getElementById('description').value= exp.desInput;
document.getElementById('category').value= exp.catInput;
// console.log(exp.expInput);
// console.log(exp.catInput);
// console.log(exp.desInput);
deleteExpense(expInput)
}
 function deleteExpense(expInput){
  //console.log(expInput)
  localStorage.removeItem(expInput);
  removeExpensefromscreen(expInput);
 }
  function removeExpensefromscreen(expInput){
   const parentNode = document.getElementById('listofusers');
   const childNodeToBeDeleted = document.getElementById(expInput);
   if( childNodeToBeDeleted ){
   parentNode.removeChild(childNodeToBeDeleted)
            }
        }
     function attachEventListeners(){
     document.addEventListener("DOMContentLoaded", (event) => {

});
}
{
    let Details, details;
    Object.keys(localStorage).forEach((key) => {
    Details = localStorage.getItem(key);
    details = JSON.parse(Details);
    console.log("detail", details);
    showNewExpenseOnScreen(details);
    });
}

