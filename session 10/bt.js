async function pokemon(){
    const pokemon= await fetch('https://pokeapi.co/api/v2/pokemon/4/')
    const data=await pokemon.json()
    return data
}




async function render(){
    const data= await pokemon()
    const name=data.name
    const weight=data.weight
    const abilities=data.abilities
    const types=data.types
    const show=document.getElementById('show')
    const html=`
    <p>Name: ${name}</p>
    <p>Weight: ${weight}</p>
    `
    show.insertAdjacentHTML('beforeend', html)
    abilities.forEach(function(item){
        show.insertAdjacentHTML('beforeend', `<li>${item.ability.name}</li>`)
    })
    abilities.forEach(function(item){
        console.log(item.ability.name);
        
    })
    types.forEach(function(item){
        console.log(item.type.name);
        
    })
    
    show.insertAdjacentHTML('beforeend', `<img src='${data.sprites.front_default}'>`)

        
    
}
render()