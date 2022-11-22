// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add() {
    const num1 = 4
    const num2 = 3
    printValue(num1 + num2)
}
add()

//TODO: create a function that takes in two values and adds them
function addNums(n1, n2){
    printValue(n1 + n2)
}
addNums(6, 4)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addValues(n1, n2) {
    const sums = n1 + n2
    return sums
}
const summation = addValues(10, 5)
printValue(summation)

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExp = function(){
    printValue(310 + 50)
}
addExp()

//TODO: create a function that takes in two values and adds them
const addVal = function(n1, n2){
    const sum = n1 + n2
    return sum
}
const summ = addVal(10, 9)
printValue(summ)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addVals = function(n1, n2){
    printValue(n1 + n2)
}
addVals(10, 10)

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const addAnonymous = () => {
    printValue(50 + 20)
}
addAnonymous()

//TODO: create a function that takes in two values and adds them
const addAnonymousV = (n1, n2) => {
    printValue(n1 + n2)
}
addAnonymousV(20, 20)

//TODO: create a function that takes in two values, adds them and returns the value of the addition

const addAnonymousVa = (n1, n2) => {
    const adds = n1 + n2
    return adds
}
const addsM = addAnonymousVa(20, 10)
printValue(addsM)

