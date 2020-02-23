let dev=[
    a={
        name: 'HTML',
        Complete: false,
    },
    b={
        name: 'CSS',
        Complete: false,
    },
    c={
        name: 'Basic of JavaScript',
        Complete: false,
    },
    d={
        name: 'Node Package Manager (npm)',
        Complete: false,
    },
    e={
        name: 'Git',
        Complete: false,
    },
]
//6.1
for(i=0;i<dev.length;i++){
    console.log(i+1, dev[i])
}



tuychon=prompt('Nhập lựa chọn của bạn vào đây (thêm, xóa, thay thế, sửa)').toLowerCase()
if(tuychon=='thêm'){
    themmoi=prompt('Nhập mới vào đây')
    alert(`Bạn vừa thêm ${themmoi}`)
    themmoi={
        name: themmoi, 
        Complete: false,
    }
    dev.push(themmoi)
    console.log('Danh sách sau khi thực hiện là:')
    for(i=0;i<dev.length;i++){
        console.log(i+1, dev[i])
    }
}
else if(tuychon=='xóa'){
    xoa=Number(prompt('Nhập vị trí muốn xóa'))-1
    if(Number.isNaN(xoa)){
        alert('Nhập số cơ mà bạn ơi')
    }
    else{
        dev.splice(xoa, 1)
    }
    console.log('Danh sách sau khi thực hiện là:')
    for(i=0;i<dev.length;i++){
        console.log(i+1, dev[i])
    }
}
else if(tuychon=='thay thế'){
    tt=Number(prompt('Nhập thứ tự bạn muốn thay thế'))-1
        if(Number.isNaN(tt)){
            alert("Nhập số cơ mà bạn ơi")
        
    }
    else{
        thaythe=prompt('Nhập tên thay thế mới')
        thaythe={
            name: thaythe,
            Complete: false,
        }
        dev[tt]=thaythe
    }
    console.log('Danh sách sau khi thực hiện là:')
    for(i=0;i<dev.length;i++){
        console.log(i+1, dev[i])
        
    }
}
else if(tuychon=='sửa'){
    sua=Number(prompt('Nhập vị trí bạn muốn sửa'))-1
    if(Number.isNaN(sua)){
        alert('Nhập số plzz')
    }
    else{
    dev[sua].Complete=true
    console.log('Danh sách sau khi thực hiện là:')
    for(i=0;i<dev.length;i++){
        console.log(i+1, dev[i])
}
}
}
else{
    alert('U pick the wrong house, fool')
}
