
const a=document.getElementById('start')
const b=document.getElementById('stop')
const c=document.getElementById('number')
const d=document.getElementById('wrong')

function dem(){
    count=c.value
    d.innerText=count
}
ss=setInterval(function(){
    count--;
    d.innerText=count
    if(count==0){
    clearInterval(ss)
    }
},1000)
a.addEventListener('click', dem)
b.addEventListener('click',ss)