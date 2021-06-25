// let promise1 = new Promise((resolve, reject) => {reject();});
// promise1
//  .then(null, function() {
//     throw '123'
//  })
//  .then(3, 1)
//  .then(2, 1)
//  .then(
//     () => {
//     console.log('promise2 已完成');
//  },
//  (e) => {
//     console.log('promise2 已拒绝',e);
//  }); 




 class MPromise{


    constructor(handFunc){//pending fulfilled rejected
        this.status = 'pending'
        this.value = null;
        this.fulfilledLists = []
        this.rejectedList = []
        handFunc(this.triggerResolve.bind(this),this.triggerRejected.bind(this))
    }


    then(onfulfilled,onrejected){
        return new MPromise((onNextFulfilled,onNextejected)=>{
            const {status,value} = this
            switch(status){
                case 'pending':
                    this.fulfilledLists.push(onfulfilled)
                    this.rejectedList.push(onrejected)
                    break
                case 'fulfilled':
                    //this.triggerOnFulfilled()
                    break;
                default:
                    break
            }
        })
    }

    catch(){

    }

    triggerResolve(val){
        setTimeout(()=>{
            this.value = val
            this.status = 'fulfilled'
            this.triggerOnFulfilled()
        },0)
    }

    triggerRejected(){

    }

    triggerOnFulfilled(){
        this.fulfilledLists.forEach(item => item())
    }

    triggerOnRejected(){

    }

    static resolve(){

    }

    static reject(){

    }

    static all(){

    }
    static race(){

    }

 }


 new MPromise((resolve)=>{
     resolve('123')
 }).then((v)=>{
     console.log('v',v);
 })