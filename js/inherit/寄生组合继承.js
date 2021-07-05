function Person(name,age){
    this.name = name;
    this.age = age;
    this.hobby = ['swim','running']
}


Person.prototype.run = function(){
    console.log('can run');
}

function Child(){
    Person.apply(this,arguments)
}

Child.prototype =Object.create(Person.prototype)  // 为什么不能用这种方式 Person.prototype
Child.prototype.constructor = Child
Child.prototype.swim = function(){
    console.log('can swim');
}

let c1 = new Child('z',18)
c1.hobby.push('basketball')
let c2 = new Person()


c1.swim()
c2.swim()
// console.log('c1',c1);
// console.log('c2',c2);
// 答案  子原型链和父原型链共享了