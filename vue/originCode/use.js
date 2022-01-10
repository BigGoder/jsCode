function Vue(){

}


Vue.use = function(plugin){
  if(!this._installedPlugins){
    this._installedPlugins = []
  }
  if(this._installedPlugins.indexOf(plugin) != -1) return this
  let args = Array.from(arguments)
  args.unshift(this)
  if(typeof plugin === 'function'){
    plugin.apply(null,args)
  }else if(typeof plugin.install === 'function'){
    plugin.install.apply(plugin,args)
  }

  this._installedPlugins.push(plugin)

  return this

}



let obj = {
  name:'zzh',
  install:function(){
    console.log(this.name+'开始安装');
  }
}

Vue.use(obj)
Vue.use(obj)
