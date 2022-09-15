console.log('person 1:shows ticket');
console.log('person 2:shows ticket');
const preMovie=aasync()=>{
    setTimeout(() => resolve('ticket'),3000);
});
const getPopcorn=new Promise((resolve,reject) => resolve('popcorn'));
const getCandy=new Promise((resolve,reject) => resolve('candy'));
const getColdDrinks=new Promise((resolve,reject) => resolve('Colddrinks'));

let ticket=await promiseWifeBringingTicks;
console.log(`wife:i have the ${ticket}`);
console.log('husband:we should go in');
console.log('wife:no i am hungry');

let popcorn=await getPopcorn;
console.log(`husband:i got some ${popcorn}`);
console.log('husband:we should go in');
console.log('wife:i need butter on my popcorn');

let butter=await addButter;
console.log(`husband:i got some ${butter} on popcorn`);
console.log('husband:anything else');
console.log('wife:lets go we are getting late');

let Colddrinks=await getColdDrinks;
console.log(`husband:i will get some ${Colddrinks}`);
console.log('wife:Thank you');

let[popcorn,candy,Colddrinks]=await Promise.all([getPopcorn,getCandy,getColdDrinks])

console.log(`${popcorn},${candy},${Colddrinks}`)

return ticket;
}
preMovie().then((m) => console.log(`person3:shows ${m}`));
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');