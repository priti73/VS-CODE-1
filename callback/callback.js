const posts=[
    {title: 'post one', body: 'this is post one',createdAt: new Date().getTime()},
    {title: 'post two', body: 'this is post two',createdAt: new Date().getTime()}
];
 let intervalId;
function  lastEditedInSecondsAgo (){
    clearInterval(intervalId);
    intervalId=setInterval (() => {
  let output ='';
  for(let i=0;i<posts.length;i++) {
    output+=`<li>${posts[i].title} - last update${(new Date().getTime() - posts[i].createdAt)/1000}seconds ago</li>`;
  };
  document.body.innerHTML =output;
    }, 1000);
}
function createPost(post ,callback) {
  setTimeout(() =>{
    posts.push({...post,createdAt: new Date().getTime()});
   callback();
  }, 2000);
}
  function create4thPost(post, callback) {
    setTimeout(() =>{
     // posts.push({...post,createdAt: new Date().getTime()});
      callback(post, lastEditedInSecondsAgo );
    }, 4000);
    
}
//getPosts()
createPost({ title: 'post three', body: 'this is post three'}, lastEditedInSecondsAgo );
//createPost()
create4thPost({ title: 'post four', body: 'this is post fourth'},createPost);
console.log(posts);
