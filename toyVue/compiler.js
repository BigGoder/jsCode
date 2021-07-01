import Watcher from './watcher.js'
import Observer from './observer.js'
const patch = /\{\{(.+?)\}\}/



export default class Compile{
    /**
     * vm vue构造对象
     * v vue实例根元素，
     * data:数据，
     * methods:方法
     * **/
     constructor(v,vm){
        this.$v = v
        this.$vm = vm;
        this.$el = vm.el;
        this.$data = vm.data;
        this.$methods = vm.methods
        new Observer(this.$data)
        this.compile(vm.el)
        
        setTimeout(()=>{
            this.$data.message = 'hello zzh'
        },1000)
    }

    compile(el){
        let app = null
        if(typeof el == 'string'){
            app = document.querySelector(el)
        }else if(el instanceof HTMLElement){
            app = el
        }
        if(!app){
            console.log('根元素非法');
            return
        }
        // let childNodes = el.childNodes
        this.traverseNode(app)
    }
    /**遍历元素节点**/
    traverseNode(node){
        if(node.childNodes && node.childNodes.length){
            const nodes = node.childNodes
            Array.from(nodes).forEach(e=>{
                this.traverseNode(e)
            })
        }
        if(this.isTextNode(node)){
            let content = node.textContent.trim()
            if(patch.test(content)){
                this.update('text',node,RegExp.$1.trim())
            }
        }else if(this.isElNode(node)){
            let attrs = Array.from(node.attributes)
            attrs.length && attrs.forEach((e)=>{
                if(e.name.startsWith('@')){
                    this.eventDirective(node,e.name.substr(1),e.value)
                }     
            })
        }else{
            console.log(3);
        }
    }

    textDirective(node){

    }

    eventDirective(node,eventName,methodName){
        node.addEventListener(eventName,()=>{
            this.$methods[methodName].call(this.$v)
        })
    }

    /**是否是文本节点**/
    isTextNode(node){
        return node.nodeType === 3
    }

    /**是否是元素节点**/
    isElNode(node){
        return node.nodeType === 1
    }

    update(fnName,node,key){
        const fn = this[fnName+'Update']
        let value = this.$data[key]
        fn.call(this,node,key,value)
    }

    textUpdate(node,key,value){
        node.textContent = value
        new Watcher(this.$data,key,(newVaue)=>{
            node.textContent = newVaue
        })
        
    }








}