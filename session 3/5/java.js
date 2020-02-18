let dayso=prompt("Nhập dãy số cần tính tổng vào đây ( mỗi số ngăn cách nhau bằng dấu cách)").split(' ')
let sum=0
console.log(dayso)
for(i=0;i<dayso.length;i++){
    sum+=Number(dayso[i])
}
console.log("Tổng các số trên là", sum)