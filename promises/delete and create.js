const posts=[
    {title: 'post one', body: 'this is post one',createdAt: new Date().getTime()},
    {title: 'post two', body: 'this is post two',createdAt: new Date().getTime()}
];
function  lastEditedInSecondsAgo (){
  let output ='';
  for(let i=0;i<posts.length;i++) {
  output+=`<li>${posts[i].title} - last update${(new Date().getTime() - posts[i].createdAt)/1000}seconds ago</li>`;
  };
  document.body.innerHTML =output;
 }
                                                                     
function createPost(post ,callback) {
      posts.push({...post,createdAt: new Date().getTime()});
      callback();
  }
function create4thPost(post, callback) {
     callback(post, lastEditedInSecondsAgo );
}
function DeletePost() {
    return new Promise((resolve,reject)=>{
       let res=posts.pop();
    if(res!=undefined)
       resolve(res);
     else{
   reject("Array is empty");
   }   
           
    })
     
  } 
  function checkDelete(){
    DeletePost()
    .then(result=>{
        console.log(result);
     
    })
    .catch(error=>{
        console.log(error);
        return;
    })
  } 
  createPost({ title:'post three',body:'this is post three'},lastEditedInSecondsAgo);
  create4thPost({title:'post four',body:'this is post fourth'},createPost);
  checkDelete()
  checkDelete()
  checkDelete()

