
const side1 = 0
const side2 = 2
const side3 = 4

if(side1===side2 && side2===side3){
    console.log('Equilateral triangle')
} else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log('Isosceles triangle')
} else {
    console.log('Scalence triangle')
}


