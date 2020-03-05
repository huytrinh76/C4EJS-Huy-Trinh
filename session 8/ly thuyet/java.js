const pElement=document.querySelectorAll('.text')
const inputElement=document.getElementById('input')
const button=document.getElementById('button') 
const bodyElement=document.querySelector('body')

const newElement=document.createElement('p')
inputElement.addEventListener('input',function(){
    // console.log(inputElement.value)
    // bodyElement.innerHTML+=`<h1>${inputElement.value}</h1>`
    newElement.innerText=inputElement.value
    bodyElement.appendChild(newElement)
})
// console.log(inputElement)



//cach 1
// function action(){
//     console.log('piu piu')
// }
// pElement.addEventListener('click', action)

//cach 2
for(let i=0;i<pElement.length;i++){
pElement[i].addEventListener('click', function(e){
    // pElement[i].style.fontFamily='Arial';
    // pElement[i].style.color='Gray';
    // pElement[i].style.fontSize='60px';
    e.target.style.fontSize='100px'
})
}
console.log(pElement)

// const pElement1=document.getElementsByTagName('p')
// console.dir(pElement1)
// const pElement2=document.getElementsByClassName('text')
// console.dir(pElement2)
// const pElement3=document.getElementById('para')
// console.dir(pElement3)
// // pElement.style.color='green'

// const container=document.getElementById('container')
// console.dir(container.children)