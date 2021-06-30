import MyVue from './MyVue.js'
var app = new MyVue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods:{
        btn(){
            this.handler()
        },
        handler(){
            let value = this.message
            alert(value)
        }
    }
})