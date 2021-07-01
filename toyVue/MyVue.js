import Compile from "./compiler.js"

export default class MyVue{
    /**
     * el 根元素，
     * data:数据，
     * methods:方法
     * **/
    constructor(vm){
        this.$vm = vm
        new Compile(this,this.$vm)
        this.mounted(vm.data)
        this.mounted(vm.methods)
    }

    mounted(data){
        Object.keys(data).forEach(e=>{
            Object.defineProperty(this,e,{
                enumerable:true,
                configurable:true,
                get(){
                    return data[e]
                },
                set(newValue){
                    if(data[e] == newValue) return
                    data[e] = newValue
                }
            })
        })
    }
}