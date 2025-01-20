let more50 = 0, less50 = 0

for(let i = 0; i < 100; i++){
    genNumber = Math.floor(Math.random() * 100)
    if(genNumber > 50){
        more50 += 1
    } else {
        less50 += 1
    }
}
console.log(`Количество сгенерированных чисел, которые больше 50: \x1b[95m ${more50}`)
console.log(`Количество сгенерированных чисел, которые меньше или равные 50: \x1b[95m ${less50}`)
