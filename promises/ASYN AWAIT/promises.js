console.log('person1: shows ticket');
console.log('person2: shows ticket');
const promisewifebringingticks= new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve('ticket');
    },3000)
});
const getpopcorn = promisewifebringingticks.then((t) =>{
    console.log('wife: i have the ticks');
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');
return new Promise ((resolve,reject)=>resolve(`${t} popcorn`));
});
const getbutter =getpopcorn.then((t) =>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife:i need some butter on my popcorn');
return new Promise ((resolve,reject)=>resolve(`${t} butter`));
});
const getcolddrink =getbutter.then((t) =>{
    console.log('husband: i got butter');
    console.log('husband: we should go in');
    console.log('wife:i need colddrink');
return new Promise ((resolve,reject)=>resolve(`${t} colddrink`));
});
getcolddrink.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
