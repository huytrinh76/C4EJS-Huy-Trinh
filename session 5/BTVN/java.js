
//1
// function censoredString(a){
//     array=['u', 'e', 'o', 'a', 'i'];
//     b=''
//     for(i=0;i<a.length;i++){
//         if(array.indexOf(a[i])==-1){
//             b+=a[i]
//         }
//         else{
//             b+='*'
//         }
//     }
//     console.log(b)
// }
// censoredString('Corona Virus')

//2
// function getFrequencies(array){
//     object={};
//     for(i=0;i<array.length;i++){
//         dem1=0;
//         for(let x in object){
//             if(x==array[i]){
//                 dem1++;
//             }
//         }
//         if(dem1==0){
//             dem2=0;
//             for(j=i;j<array.length;j++){
//                 if(array[i]==array[j]){
//                     dem2++;
//                 }
//             }
//         object[array[i]]=dem2
//     }  
//     }
//     return object;
// }
// console.log(getFrequencies(['a','b','b','d','c','a','a']))

//3
// function keysAndValues(object){
//     array=[];
//     for(let a in object){
//         array.push(a)
//     }
//     for(let a in object){    
//         array.push(object[a])
//     }
//     return array;
// }
// console.log(keysAndValues({A: 4, B: 8, C: 55}))

//5
// function mapLetters(string){
//     object={}
//     for(i=0;i<string.length;i++){
//         dem=0;
//         for(a in object){
//             if(a==string.charAt(i)){
//                 dem++;
//             }
//             if(dem==0){
//                 array=[]
//                 for(j=i;j<string.length;j++){
//                     if(string.charAt(i)==string.charAt(j)){
//                         array.push(j)
//                     }
                    
//                 }
//                 object[string.charAt(i)]=array;
//             }
//         }
       
//     }
//     return object;
// }
// console.log(mapLetters("NaturalVision Remastered"))
//anh xem hộ em bài 5 sao em mãi ko chạy đc đúng, em chả biết code sai ở đâu :<

//6
function reverseObject(object){
    object2={}
        for(a in object){
            object2[object[a]]=a
        }
    return object2;
}
console.log({
    'NaturalVision' :'Name',
    'Remastered' :'Category',
})