// ახსენით რა არის block scope, global scope   block scope shemtxvevashi cvladi tu funqciashia moqceuli mxolod funqciashi iqneba da funqciis garet ver gamovidzaxebt da global shemtxvevashi kide sadac gvinda iq gamovidzaxebt



// გააკეთეთ თითო მაგალითი თითო scope ზე და ახსენით კომენტარებით

// global scope

let name = "nikolozi"

const ragaca = () => {
    return `hello my name is ${name} `
}

console.log(ragaca())


// block scope

const func = () => {
    let lastName = "lursmanashvili"
    return `and  my last name is ${lastName}`

}

console.log(func())
// tu chven davapirebt ro lastname gamovidzaxot calke funqciis garet gamogvitans errors
console.log(lastName)   