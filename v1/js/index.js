function Ant(options){
  this.$el=document.querySelector(options.el);
  this.$data=options.data;
  Object.keys(this.$data).forEach((k)=>{
    this.proxyKeys(k)
  })

  observer(this.$data)

  compile(this,this.$el)

}



Ant.prototype.proxyKeys=function (k) {
  Object.defineProperty(this, k, {
    get(){
      return this.$data[k]
    },
    set(newVal){
      console.log(`proxy set---- ${k}:${newVal}`)
      this.$data[k]=newVal
    }
  })
}