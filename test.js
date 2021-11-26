let o = {
  name:'zzh'
}

function a(){
  console.log(this.name);
}

let b=a.bind(o)
console.log('o',o);
console.log('b',b);