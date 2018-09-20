function Dep() {
  // this.subs=[];
}

window.dep=[]
Dep.prototype.addSub=function (sub) {
  // this.subs.push(sub)
  window.dep.push(sub)
}