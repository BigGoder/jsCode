import Dep from './dep.js'



export default class Watcher{
/**
     * data data实例
     * key data中的key
     * cal 方法的回调
 * **/
    constructor(data,key,cal){
        this.$data = data
        this.$key = key
        this.$cal = cal
        Dep.target = this
        this.oldValue = data[key]
        Dep.target = null
    }

    update(){
        let newValue = this.$data[this.$key]
        this.$cal.call(this,newValue)
    }

}