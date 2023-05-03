const aElements = document.getElementsByTagName("a");
const aElementsArray = [...aElements];

aElementsArray.forEach( (a)=>{
    console.log(a)
} )

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];

console.log(nr1);
console.log(nr2);

nr2.push(11);

console.log(nr2);
console.table(nr2);

let nr3 = [...nr1,...nr2] // Spread
console.log("NOVO ARRAY "+nr3)

nr3.forEach( (numero)=>{
    console.log("ITEM DO ARRAY : "+numero)
} );

const imgElements = [...document.getElementsByTagName("img")];

imgElements.forEach( (img)=>{
    console.log(img.src)
} )