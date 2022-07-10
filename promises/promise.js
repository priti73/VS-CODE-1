const posts=[
    {title: 'post 1st', body: 'this is post 1',createdAt: new Date().getTime()},
    {title: 'post 2nd', body: 'this is post 2',createdAt: new Date().getTime()},
    {title: 'post 3rd', body: 'this is post 3',createdAt: new Date().getTime()},
    {title: 'post 4th', body: 'this is post 4',createdAt: new Date().getTime()},
    {title: 'post 5th', body: 'this is post 5',createdAt: new Date().getTime()}
];
function DeletePost() {
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
           let res=posts.pop();
           if(res!=undefined)
               resolve(res);
            else{
                reject("Array is empty");
            }   
           
          }, 1000);  
    })
     
  } 
  function checkDelete(){
    DeletePost()
    .then(result=>{
        console.log(result);
        //checkDelete();
    })
    .catch(error=>{
        console.log(error);
        return;
    })
  } 
  checkDelete() 
  checkDelete()
  checkDelete() 
  checkDelete()
  checkDelete() 
  checkDelete()


  
