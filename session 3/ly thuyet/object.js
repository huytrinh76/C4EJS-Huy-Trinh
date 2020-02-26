let person={
    name: 'Cường',
    yob: 96,
    home: 'HN',
    job: 'dev',
}
// let key=prompt()
// console.log(person.name)
// console.log(person[key])

for(let k in person){
    console.log(k, person[k])
}