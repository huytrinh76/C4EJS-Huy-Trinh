
let product=[
    a={
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
    },
    b={
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
    },
    c={
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
    },
    d={
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
    }
]
//5.1
for(i=0;i<product.length;i++){
    console.log(i+1, product[i].name, 'Price', product[i].price)
}

//5.2
n=Number(prompt('Nhập vị trí bạn muốn xem:'))-1
console.log('Thông tin của bạn muốn xem là:')
if(Number.isNaN(n)){
    alert('Bạn hãy nhập số')
}
else if(n<4, n>0){
    for(k in product[n]){
        console.log(k, ':', product[n][k])
    }
}

else{
    alert('Bạn nhập sai thứ tự')
}
console.log('-----------------------------------------------------------')


//5.3
m=prompt("Nhập category vào đây").toLowerCase()
console.log(`Category bạn vừa nhập là ${m}`)
for(i=0;i<product.length;i++){
if(product[i].category.toLowerCase()==m){
    console.log('Name:', product[i].name)
    console.log('Price:', product[i].price)
    console.log('Category:', product[i].category)
    console.log('-----------------------------------------------------------')
}

}



//5.4
console.log('Thêm thông tin providers vào danh sách sản phẩm:')
product[0].providers=['Phukienzero', 'Dientuccc']
product[1].providers=['Tgdd', 'Ddghn', 'VhStore']
product[2].providers=['Tgdd']
product[3].providers=['Tgdd']
for(i=0;i<product.length;i++){
    console.log('Name:', product[i].name)
    console.log('Price:', product[i].price)
    console.log('Providers:', product[i].providers)
    console.log('-----------------------------------------------------------')
}

//5.5 em làm bị rối tung :)

