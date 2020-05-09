count=0;
const a=document.getElementById('bt+')
const b=document.getElementById('bt-')
const c=document.getElementById('number')
c.innerText=count


a.addEventListener('click', function() {
    count++;
    c.innerText=count
})
b.addEventListener('click', function() {
    count--;
    c.innerText=count
})