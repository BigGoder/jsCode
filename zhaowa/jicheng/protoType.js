// 原型链继承
// function Parent(){
//   this.name = 'zzh'
//   this.action = ['running','swim']
// }


// function Child(){
// }

// Child.prototype = new Parent()
// Child.prototype.constructor = Child
// let c = new Child()
// console.log('c',Object.getPrototypeOf(c).constructor);



function TestNew(name){
  return {
    name:'gyt'
  }
}

let t = new TestNew('fj')
console.log('t',t);