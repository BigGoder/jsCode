class MPromise{
  FULLFILLED = 'fullfilled'
  REJECTED = 'rejected'
  PENDDING = 'pendding'
  _status = 'pendding'
  constructor(fn){
    this.status = 'pendding'
    this.value = ''
    this.reason = ''
    this.fullfilledList = []
    this.rejectList = []
    try {
      fn(this.resolve.bind(this),this.reject.bind(this))
    } catch (error){
      this.reject(error)
    }
  }

  get status(){
    return this._status;
  }

  set status(newStatus){
    this._status = newStatus
    switch(newStatus){
      case this.FULLFILLED:
        this.fullfilledList.forEach(callback=>{
          callback()
        })
      break;
      case this.REJECTED:
        this.rejectList.forEach(callback=>{
          callback()
        })
      break;
    }
  }

  resolve(value){
    if(this.status == this.PENDDING){
      this.value = value
      this.status = this.FULLFILLED
    }
  }

  reject(reason){
    if(this.status == this.PENDDING){
      this.reason = reason
      this.status = this.FULLFILLED
    }
  }

  then(onFullfilled,onRejected){
    const realOnFullfilled = this.isFunction(onFullfilled) ? onFullfilled : value => value
    const realOnRejected = this.isFunction(onRejected) ? onRejected : value => value

    const promise2 = new MPromise((resolve,rejected)=>{

      const microFullfilled = ()=>{
        queueMicrotask(()=>{
          try {
            const x = realOnFullfilled(this.value)
            this.resolvePromise(promise2,x,resolve,rejected)
          } catch (error) {
            this.reject(error)
          }
        })
      }
  
      const microRejected = ()=>{
        queueMicrotask(()=>{
          try {
            const x = realOnRejected(this.reason)
            this.resolvePromise(promise2,x,resolve,rejected)
          } catch (error) {
            this.reject(error)
          }
        })
      }

      switch(this.status){
        case this.FULLFILLED:
          microFullfilled()
          break;
        case this.REJECTED:
          microRejected()
          break;
        default:
          this.fullfilledList.push(microFullfilled)
          this.rejectList.push(microRejected)
          break;
      }
    })
    return promise2
  }

  resolvePromise(promise2, x, resolve, reject) {
      // 如果 newPromise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 newPromise
      // 这是为了防止死循环
      if (promise2 === x) {
          return reject(new TypeError('The promise and the return value are the same'));
      }

      if (x instanceof MPromise) {
          // 如果 x 为 Promise ，则使 newPromise 接受 x 的状态
          // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
          queueMicrotask(() => {
              x.then((y) => {
                  this.resolvePromise(promise2, y, resolve, reject);
              }, reject);
          })
      } else if (typeof x === 'object' || this.isFunction(x)) {
          // 如果 x 为对象或者函数
          if (x === null) {
              // null也会被判断为对象
              return resolve(x);
          }

          let then = null;

          try {
              // 把 x.then 赋值给 then 
              then = x.then;
          } catch (error) {
              // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
              return reject(error);
          }

          // 如果 then 是函数
          if (this.isFunction(then)) {
              let called = false;
              // 将 x 作为函数的作用域 this 调用
              // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
              try {
                  then.call(
                      x,
                      // 如果 resolvePromise 以值 y 为参数被调用，则运行 resolvePromise
                      (y) => {
                          // 需要有一个变量called来保证只调用一次.
                          if (called) return;
                          called = true;
                          this.resolvePromise(promise2, y, resolve, reject);
                      },
                      // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                      (r) => {
                          if (called) return;
                          called = true;
                          reject(r);
                      });
              } catch (error) {
                  // 如果调用 then 方法抛出了异常 e：
                  if (called) return;

                  // 否则以 e 为据因拒绝 promise
                  reject(error);
              }
          } else {
              // 如果 then 不是函数，以 x 为参数执行 promise
              resolve(x);
          }
      } else {
          // 如果 x 不为对象或者函数，以 x 为参数执行 promise
          resolve(x);
      }
  }

  isFunction(param){
    return typeof param == 'function'
  }


  static all(promiseList) {
    var resPromise = new MPromise(function(resolve, reject) {
      var count = 0;
      var result = [];
      var length = promiseList.length;
  
      if(length === 0) {
        return resolve(result);
      }

      promiseList.forEach(function(promise, index) {
        MPromise.resolve(promise).then(function(value){
          count++;
          result[index] = value;
          if(count === length) {
            resolve(result);
          }
        }, function(reason){
          reject(reason);
        });
      });
    });
  
    return resPromise;
  }

  static resolve(parameter){
    if(parameter instanceof MPromise) {
      return parameter;
    }
  
    return new MPromise(function(resolve) {
      resolve(parameter);
    });
  }

  static reject(reason) {
    return new MPromise(function(resolve, reject) {
      reject(reason);
    });
  }

  static allSettled(promiseList) {
    return new MPromise(function(resolve){
      var length = promiseList.length;
      var result = [];
      var count = 0;
  
      if(length === 0) {
        return resolve(result);
      } else {
        for(var i = 0; i < length; i++) {
  
          (function(i){
            var currentPromise = MPromise.resolve(promiseList[i]);
  
            currentPromise.then(function(value){
              count++;
              result[i] = {
                status: 'fulfilled',
                value: value
              }
              if(count === length) {
                return resolve(result);
              }
            }, function(reason){
              count++;
              result[i] = {
                status: 'rejected',
                reason: reason
              }
              if(count === length) {
                return resolve(result);
              }
            });
          })(i)
        }
      }
    });
  }

  static race(promiseList) {
    var resPromise = new MPromise(function(resolve, reject) {
      var length = promiseList.length;
  
      if(length === 0) {
        return resolve();
      } else {
        for(var i = 0; i < length; i++) {
          MPromise.resolve(promiseList[i]).then(function(value) {
            return resolve(value);
          }, function(reason) {
            return reject(reason);
          });
        }
      }
    });
  
    return resPromise;
  }
  
  static deferred() {
    var result = {};
    result.promise = new MPromise(function(resolve, reject) {
      result.resolve = resolve;
      result.reject = reject;
    });
  
    return result;
  };

  static defer() {
    var result = {};
    result.promise = new MPromise(function(resolve, reject) {
      result.resolve = resolve;
      result.reject = reject;
    });
  
    return result;
  };


}

 module.exports =  MPromise