function boi(a, b){
    let r=Math.floor((Math.random()*(b-a+1))+a)
    document.writeln(r)
    return r
}
const x=boi(4,16)
if(x<4){
    document.writeln('Số < 4')
}
else if(x>16){
    document.writeln('Số > 16')
}
else{
    document.writeln('Iron Ferver')
}
