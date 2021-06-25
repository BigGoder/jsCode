// 引用对象的属性也没啥
// constructor正常
// 可以传参

// 缺点：每次都要执行父函数
// 不能继承父函数原型链的方法

function Person(name,age){
    this.name = name;
    this.age = age;

    this.hobby = ['swim','running']
    this.say = function (){
        console.log('name',this.name);
    }
}


Person.prototype.run = function(){
    console.log('can run ');
}

function Child(){
    Person.apply(this,arguments)
}

let c1 = new Child('z',18)
c1.hobby.push('basketball')
let c2 = new Child()
c1.say()
c2.say()
// console.log('c1',c1.constructor);
// console.log('c2',c2);