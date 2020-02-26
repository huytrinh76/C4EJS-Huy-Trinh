
function add(a, b){
   let c=a+b
   return c
}

function loop(array, action){
    for(i=0;i<array.length;i++){
        action(array[i], i)
    }
}

// function action(item, i){
//     console.log(i)
//     console.log(item)
    
// }
// function action2(item,index){
//     string=String(item)
//     console.log(string)
// }
// loop([1,2,3,4,5], action)
// loop([1,2,3,4,5], action2)
// setTimeout(action, 2000)
array=['a', 'b', 'c', 'd']
array.forEach(function(item){
    console.log(item)
})
array.filter()
array.map()

array.reduce()