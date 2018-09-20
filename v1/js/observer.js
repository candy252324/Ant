function Observer(data){
  this.data=data;
  this.walk(data);

}

Observer.prototype.walk=function (data) {
  Object.keys(data).forEach((key)=>{
    let value=data[key]
    observer(value)
    Object.defineProperty(data,key,{
      enumerable: true,
      configurable: true,
      get(){
        console.log("observer get")
        return value
      },
      set(newVal){
        console.log(`%c observer set---- ${key}:${newVal}`,"color:green")
        value=newVal
        window.dep.forEach(dep=>{
          if(dep.exp===key){
            dep.update()
          }
        })
      }
    })
  })
}


function observer(data){
  if(Object.prototype.toString.call(data)!=="[object Object]") return;
  new Observer(data)
}