function planatrip() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('lets go to manali');

        },1000)
    })
}
function reachManali() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('reached manali');

        },2000)
    })
}

async function fun1(){
    const msg=await planatrip();
    console.log(msg)
    const msg1=await reachManali();
    console.log(msg1)

}
planatrip().then((msg)=>{
    console.log(msg)
})
reachManali().then((msg1)=>{
    console.log(msg1)
})