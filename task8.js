var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

itemList.addEventListener('submit',editItem );

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete1';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('x'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  //itemList.appendChild(li);

   // Create del button element
   var editBtn = document.createElement('button');

   // Add classes to del button
   editBtn.className = 'btn btn-dark float-right edit';
 
   // Append text node
   editBtn.appendChild(document.createTextNode('edit'));
 
   // Append button to li
   li.appendChild(editBtn);
 
   // Append li to list
   itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete1'))
  {
    if(confirm('Are You Sure?'))
    {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function editItem(e)
  {
    if(e.target.classList.contains('edit'))
    {
    if(confirm('do u want to edit?'))
      {
        var li = e.target.parentElement;
        itemList.editChild(newItem);
      }
    }
 }
