function saymyname()
{
    console.log("R")
    console.log("A")
    console.log("H")
    console.log("U")
    console.log("L")

      
}
// saymyname()

// addition in function

// function addThreeNumber(number1 ,number2 , number3)
// {
//   console.log(number1 +number2 + number3);
// }
//   addThreeNumber(4,7,"9")


function AddTwoNumber(number1,number2)
{let result = number1 + number2
return result}
// const result = AddTwoNumber(4,5)
// console.log("result: ", result);

function loginusermessage(username){
    return `${username}just loggged in`
}
// console.log(loginusermessage("rahul "));

function calaculatecartprice(...num1){
    return num1
}
// console.log(calaculatecartprice(200,3302,53403))


const user = {
    username :"Rahul",
    age:"20"
}
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)}
// handleobject(user)

const myNewArray = [122,445,687,435]
function returnsecondvalue(getArray){
    return getArray[2]
}
// console.log(returnsecondvalue(myNewArray));


function one()
{
    const username= "rahul"

    function two() {
        const website="youtube"
        console.log(username)
    }
    two()
}
one()