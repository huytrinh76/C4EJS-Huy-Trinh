async function quote(){
    const quotes=await fetch('http://quotes.rest/qod.json')
    const data= await quotes.json()
    return data
}
quote()

async function render(){
    const data=await quote()
    console.log(data);
    const quotes=data.contents.quotes[0].quote
    const author=data.contents.quotes[0].author
    const html=`<p>${quotes}</p><p>${author}</p>`
    const show=document.getElementById('show')
    show.insertAdjacentHTML('beforeend', html)
}
render()