let quanao=[
    'áo phông',
    'quần bò',
    'áo sơ mi',
    'áo có mũ',
    'quần đùi',
    'quần thể thao',
]
console.log("Đây là list quần áo của shop")
for(i=0;i<quanao.length;i++){
    console.log(i+1, quanao[i])}
tuychon=prompt("Nhập lựa chọn của bạn vào đây (thêm, thay thế, đọc, xóa)").toLowerCase()
if(tuychon=="thêm"){
    themquanao=prompt("Thêm loại quần áo vào đây")
    quanao.push(themquanao)
    console.log("Danh sách sau khi thực hiện là")
        for(i=0;i<quanao.length;i++){
            console.log(i+1, quanao[i])}
    }


else if(tuychon=="thay thế"){
ttthaythe=Number(prompt("Nhập số thứ tự của loại quần áo bạn muốn thay thế"))-1
        if(Number.isNaN(ttthaythe)){
    alert("Bạn hãy nhập số")
        }
        else{
        thaythe=prompt("Nhập loại quần áo bạn muốn thay thế")
        quanao[ttthaythe]=thaythe
        }
        console.log("Danh sách sau khi thực hiện là")
        for(i=0;i<quanao.length;i++){
            console.log(i+1, quanao[i])}
}


else if(tuychon=="xóa"){
xoaquanao=Number(prompt("Nhập thứ tự bạn muốn xóa loại quần áo đó đi"))-1
    if(Number.isNaN(xoaquanao)){
        alert("Bạn hãy nhập số")
        }
        else{
        quanao.splice(xoaquanao, 1)
        }
        console.log("Danh sách sau khi thực hiện là")
        for(i=0;i<quanao.length;i++){
            console.log(i+1, quanao[i])}
}

else{
    alert("Bạn nhập sai lựa chọn")
}
