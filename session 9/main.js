let items=[
    'Backpack',
    'MiBand Watch',
    'Ring',
]
console.log(items)

const itemul=document.getElementById('item-ul')
console.log(itemul)

for(let i = 0; i < items.length; i++) {
    itemul.insertAdjacentHTML('beforeend', `<li>${items[i]}</li>`)
    itemul.removeChild(itemul.childNodes[1])
}

const text=document.getElementById('text')
function add(){
    const x=document.createElement('li')
    const y=document.createTextNode(text.value)
    x.appendChild(y)
    itemul.appendChild(x)
    console.log(text.value)
    text.value=null
}
