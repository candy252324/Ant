function Compile(vm,node){
  if(node.hasAttribute("v-model") && ( node.tagName==="INPUT" || node.tagName==="TEXTAREA")){

    let exp=node.getAttribute("v-model")
    node.value=vm.$data[exp]

    let watch=new Watcher(vm,node,exp,"value")
    let dep=new Dep();
    dep.addSub(watch)

    node.addEventListener("input",function () {
      vm.$data[exp]=node.value
    })
  }else if(!node.children.length){
    let reg=/\{\{.+\}\}/
    let textContent=node.textContent;
    if(reg.test(textContent)){
      let exp=textContent.slice(2,-2);
      node.textContent=vm.$data[exp];

      let watch=new Watcher(vm,node,exp,"text")
      let dep=new Dep();
      dep.addSub(watch)
    }
  }
}

function compile(vm, node) {
  new Compile(vm, node)
  if(node.children.length){
    Array.from(node.children).forEach(node=>{
      compile(vm, node)
    })
  }
}