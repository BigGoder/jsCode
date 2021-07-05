import Dep from './dep.js'

export default class Observer{

    constructor(data){
        this.traverse(data)
    }

    traverse(data){
        if(typeof data != 'object') return
        Object.keys(data).forEach((e)=>{
            this.defineReactive(data,e,data[e])
        })
    }

    defineReactive(data,e,val){
        this.traverse(e)
        let dep = new Dep()
        Object.defineProperty(data,e,{
            configurable:true,
            enumerable:true,
            get(){
                Dep.target && dep.add(Dep.target) 
                return val
            },
            set(newValue){
                if(newValue == val) return
                val = newValue
                dep.notify(newValue)
            }
        })
    }

}
