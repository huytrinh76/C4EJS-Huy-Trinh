
function censoredString(a){
    array=['u', 'e', 'o', 'a', 'i'];
    b=''
    for(i=0;i<a.length;i++){
        if(array.indexOf(a[i])==-1){
            b+=a[i]
        }
        else{
            b+='*'
        }
    }
    console.log(b)
}

censoredString('Corona Virus')
