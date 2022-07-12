console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premovie =async () =>  {
const promisewifebringingticks= new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve('ticket');
    },3000)
});

const getpopcorn = new Promise ((resolve,reject)=>resolve(` popcorn`));
const addbutter = new Promise ((resolve,reject)=>resolve(`butter`));
const getcolddrink = new Promise ((resolve,reject)=>resolve(`colddrink`));
 
 let ticket= await promisewifebringingticks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');

    let popcorn= await getpopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife:i need some butter on my popcorn');
    
    let butter= await addbutter;

    console.log(`husband i got some ${butter} on popcorn`)

    let colddrink= await getcolddrink;
    console.log('wife:i need some colddrink');
    console.log(`husband i got  ${colddrink}`)

return ticket;
}
premovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
