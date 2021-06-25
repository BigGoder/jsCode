class Person{

    constructor(name){
        this.name = name
        this.family = 'happiness'
    }

    getFamilyName(){
        console.log(this.family);
    }
}

class Child extends Person{
    constructor(){
        super('zzh')
    }
}

let c1 = new Child()
console.log(c1.name);