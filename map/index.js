let a = [1,2,3]
let b = [2,3,4]


let bj =  Array.from(new Set([...a,...b]))

let bc = new Set(b.filter((item)=>!a.includes(item)))

let ac = new Set(a.filter((item)=>!b.includes(item)))

let j =  new Set(a.filter((item)=>b.includes(item)))


let teacher = {
    name:'teacher'
}

function buy(){
    console.log('name',this.name);

    function inner(){
        console.log('nameInner',this.name);
    }

    let innerJinan = ()=>{
        console.log('nameJian',this.name);
    }

    inner()
    innerJinan()
}
let buybuy = buy.bind(teacher)

function outer(){

    buybuy()

}
outer()



function Person(age,name){
    this.age = age;
    this.name = name
}

console.log('xxx',Person.prototype.constructor === Person) 

function factoryCreate(){
    let func = [].shift.call(arguments)
    let o = Object.create(func.prototype)
    let result = func.apply(o,arguments)
    return typeof result =='object' ? result : o
}

let p = factoryCreate(Person,18,'zzh')
console.log('p',p.__proto__.constructor);