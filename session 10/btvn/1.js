let x=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("Promise is da best"),5000)
})

async function render(){
    a=await x
    console.log(a);
}
render()
x.then(
    show=>document.writeln(show)
)