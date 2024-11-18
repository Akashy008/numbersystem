const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let primeArray = []

for (let i = 0; i < numbers.length; i++) {
    const numberr = numbers[i];
    let prime = numberr > 1
    for (let index = 2; index < numberr; index++) {
        if (numberr % index == 0){
            prime = false
           break; 
        } 
        if (prime){
            primeArray.push(numberr)
        }
        
    }
 
}   console.log(primeArray)


let max = primeArray[0];
let min = primeArray[0];
let sum = 0

for (let i = 0; i < primeArray.length; i++) {
    const num  = primeArray[i];
    if (num >= max) max =  num
    if (num <= min) min =  num
   sum = max + min
}

console.log(max,min,sum)