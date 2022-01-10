// const MPromise = require('./originCode')
// new MPromise((resolve)=>{
//   setTimeout(()=>{
//     resolve(123)
//   },1000)
// }).then((res)=>{
//   console.log('res',res);
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(456)
//     },2000)
//   })
// }).then((res1)=>{
//   console.log('res1',res1);
// })

let promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('456')
  },2000)
})

let promise2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject('123')
  },1000)
})


async function run(){
  let res = await Promise.all([promise1,promise2.catch(e=>e)])
  console.log('res',res);
}

run()