function Watcher(vm,node,exp,attr){
  this.vm=vm;
  this.node=node;
  this.exp=exp;  // name, age
  this.attr=attr;  // value , text
}

Watcher.prototype.update=function(){

  if(this.attr==="text"){
    this.node.textContent=this.vm.$data[this.exp]
  }
  if(this.attr==="value"){
    this.node.value=this.vm.$data[this.exp]
  }
}