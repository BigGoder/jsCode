// 缺点
// 1 如果有属性是引⽤类型的，⼀旦某个实例修改了这个属性，所有实例都会受到影响
// 2. 创建 Child 实例的时候，不能传参
// 3.新建对象的constructor值有问题


function Person(name,age){
    this.name = name;
    this.age = age;
    this.hobby = ['swim','runing']
}

function Child(name,age){
    this.name = name;
    this.age = age;
}

Child.prototype = new Person('zzh',18)

let c1 = new Child('z',18)
c1.hobby.push('basketball')
let c2 = new Child()
console.log('c1',c1.constructor);
console.log('c2',c2.hobby);
