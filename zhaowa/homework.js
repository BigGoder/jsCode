Function.prototype.myCall = function(context,...args){
  context = context || window
  let fn = Symbol('call')
  context[fn] = this
  context[fn](...args)
  delete context[fn]
}

Function.prototype.myApply = function(context,args){
  context = context || window
  let fn = Symbol('call')
  context[fn] = this
  if(!Array.isArray(args)) throw new Error('CreateListFromArrayLike')
  context[fn](...args)
  delete context[fn]
}
