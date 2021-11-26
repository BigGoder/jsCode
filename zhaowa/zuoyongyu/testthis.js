// var name = 'global'


// let p = {
//   name:'p',
//   out:function(){
//     console.log(this.name);
//   }
// }

// p.out()



// var name = 'lubai';
// var person = {
//     name: 'hahahahahah',
//     sayHi: sayHi
// }
// function sayHi(){
//     console.log(this); // 
//     setTimeout(function(){
//         console.log('Hello,', this.name);
//     })
// }
// person.sayHi();


// function Foo(){
//   Foo.a = function(){
//     console.log(1);
//   }
//   this.a = function(){
//     console.log(2)
//   }
// }

// Foo.prototype.a = function(){
//   console.log(3);
// }

// Foo.a = function(){
//   console.log(4);
// }

// Foo.a(); //4
// let obj = new Foo();
// obj.a(); //2
// Foo.a(); //1

// var length = 10;
// function fn() {
//     console.log(this.length);
// }
 
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn(); 
//     arguments[0]();
//   }
// };
 
// obj.method(fn, 1);


// function fn1(x){
//   return x + 1 
// }


// function fn2(x){
//   return x + 2 
// }

// function fn3(x){
//   return x + 3 
// }

// function fn4(x){
//   return x + 4 
// }

// function compose(fn1,fn2,fn3,fn4){
//   let arr = Array.from(arguments).reverse()
//   return function(x){
//     return arr.reduce((last,ele)=>{
//       return ele(last)
//     },x)
//   }
// }

// let res = compose(fn1,fn2,fn3,fn4)
// console.log(res(1))

// function v(){
//   console.log(a);
//   var a =1
//   console.log(a);
//   function a(){

//   }
//   console.log(a);


// }

// v()

let o = {
  name:'zzh'
}

function a(){
  console.log(this.name);
}

let b=a.bind(o)
console.log('o',o);
console.log('b',b);