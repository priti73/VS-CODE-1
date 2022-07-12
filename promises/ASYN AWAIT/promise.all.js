console.log('person1: shows ticket');
console.log('person2: shows ticket');


const premovie =async () =>  {
const promisewifebringingticks= new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve('ticket');
    },3000)
});
const getpopcorn = new Promise ((resolve,reject)=>resolve(` popcorn`));
const getbutter = new Promise ((resolve,reject)=>resolve(`butter`));
const getcolddrink = new Promise ((resolve,reject)=>resolve(`colddrink`));
 
 let ticket= await promisewifebringingticks;
 let[popcorn,butter,colddrink]= await Promise.all([getpopcorn,getbutter,getcolddrink])
console.log(`${popcorn},${butter},${colddrink}`);
return ticket;

}
premovie().then((m)=> console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
