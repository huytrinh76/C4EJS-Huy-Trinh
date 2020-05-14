function boi(){
    let a=Math.floor((Math.random()*30)+-10)
    document.writeln(a)
    return a
}
const x=boi()
if(x<0){
    document.writeln('Failed: The number is smaller than 0')
}
else if(x>10){
    document.writeln('Failed: The number is bigger than 10')
}
else{
    document.writeln('Passed, Bravo!')
}