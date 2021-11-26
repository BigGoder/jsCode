function Parent(name,age){
  this.name = name;
  this.age = age
}

 function Child(name,age){
   Parent.call(this,name,age)
 }

let c = new Child('zzh',18)
console.log('c',c);