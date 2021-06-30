import Compile from "./compiler.js"

export default class MyVue{
    /**
     * el 根元素，
     * data:数据，
     * methods:方法
     * **/
    constructor(vm){
        this.$vm = vm
        new Compile(this.$vm)
    }

    mounted(){
        Object.keys(this.$vm).forEach(e=>{
            Object.defineProperty(this,e,)
        })
    }
}