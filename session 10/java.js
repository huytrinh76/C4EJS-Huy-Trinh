// async function fetchdata(){
//     const pokemon= await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
//     const realdata= await pokemon.json()
//     console.log(realdata)
// }
// fetchdata() 


function dicho(action){
    return new Promise(function (resolve, reject){
        const random=Math.random()
        console.log(random);
        
        if(random<0.5){
            const item='mo rau'
            resolve(item)
        }
        else{
            reject()
        }
    })
}

fetch('https://pokeapi.co/api/v2/pokemon/pikachu/').then(function(data){
    data.json().then(function(realdata){
        console.log(realdata);
        
    })
})

async function fetchdata(){
    const pokemon= await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
    const realdata= await pokemon.json()
    console.log(realdata)
}
console.log(fetchdata());


dicho().then(function(adata){
    console.log(adata);
}).catch(function(){
    console.log('no data');
    
})



// function dichoi(){
//     console.log('di choi thoi');
    
// }
// dicho(dichoi)
// setTimeout(dicho, 3000)
