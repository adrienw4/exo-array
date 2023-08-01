//exo 1
let myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];
 
function myArrayLength(myArray) {
    console.log(myArray.length);
    
}  
myArrayLength(myAlphabet);
// length 31

//exo 2
const planets = ["mars","neptune","terre","venus","jupiter"]
planets.forEach((planet,index) => {
    console.log(planet, index);
    });
// exo 3
const someDataTypes = ["5",12,'5', null]
