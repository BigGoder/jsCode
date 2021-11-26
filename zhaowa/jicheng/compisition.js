function Parent(name,age){
  this.name = name;
  this.age = age
}

Parent.prototype.getName = function(){
  return this.name
}

Child.prototype = Object.create(Parent.prototype)

function Child(name,age){
  Parent.call(this,name,age)
}

let c = new Child('zzh',18)
console.log('c',c);