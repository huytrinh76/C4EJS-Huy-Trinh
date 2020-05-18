async function fetchdata(){
    const art=await fetch('https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72')
    const data=await art.json()
    return data
}
fetchdata()
async function render(){
    const data=await fetchdata()
    const show=document.getElementById('show')
    data.forEach(function(item){
        const html=`<p>${item.name}</p><img src='${item.avatar}'><p>${item.createdAt}</p><button onclick='deletepost(${item.id})'>Delete</button>`
        show.insertAdjacentHTML('beforeend', html)
    })
}
async function deletepost(id){
    console.log(id);
    await fetch(`https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72/${id}`, {
        method: 'delete'
    })
    
}
render()
// const deletebutton=document.getElementById('delete')
// deletebutton.addEventListener('click', async()=>{
//     let res=fetch('https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72/11', {
//         method: 'delete'
//     })
// })
// function upload(url, data){
//     let res=await fetch(url, {
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
// }

let foruser=document.getElementById('form')
foruser.addEventListener('submit', (e)=>{
    e.preventDefault()
    let data={
        'name': foruser.user.value
    }
    fetch('https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(data);
})

// const deletebutton=document.getElementById('deleteinfor')
// deletebutton.addEventListener('click', async()=>{
//     let res=fetch(`https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72/${id}`, {
//         method: 'delete'
//     })
// })