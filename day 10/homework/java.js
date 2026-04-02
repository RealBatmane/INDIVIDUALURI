// 1)ახსენით ეს მეთოდები კომენტარებით და მოიყვანეთ 2-2 მაგალითი თითოეულზე:
// // .length   gvichvenebs raodenobas
// // .join()   
// // .toString()   stringad aqcevs 
// // .pop()   shlis bolo monacems
// // .push()   amatebs boloshi
// // .shift()  pirvel indexs shlis
// // Array.isArray();  amowmebs aris tu ara masivi
// // .concat()
// // .slice() 
// .splice() 

let a = "123"
console.log(a.length)


let b = "123321"
console.log(b.length)

let c = ["a","b","c"]
console.log(c.join("-"))


let d = ["a","b","c"]
console.log(c.join(" "))

let e = 123
console.log(e.toString())

let f = 123321
console.log(e.toString())

let g = [1,2,3,4,5,6,7]
g.pop();
console.log(g)

let h = [1,2,3,4,5,6,7414221]
g.pop();
console.log(g)

let i = [1,2,3]
h.push(4)
console.log(h)

let j = [1,2,3]
h.push(4)
console.log(h)

let k = [1,2,3];
k.shift();
console.log(k)


let l = [1,2,3,4,5,6];
k.shift();
console.log(k)




// დავალება 2: შეასწორე Scope Pollution (დაბინძურება)
// ქვემოთ მოცემულ კოდში ფუნქცია changePrice შემთხვევით ცვლის გლობალურ ფასს. შეასწორე კოდი ისე, რომ ფუნქციამ შექმნას საკუთარი ლოკალური ცვლადი და არ შეეხოს გლობალურს.

let price = 100;

const changePrice = () => {
    let price = 50; // აქ არის შეცდომა
    console.log("ახალი ფასი ფუნქციაში:",price);
};

changePrice();
console.log("გლობალური ფასი:", price); // აქ ისევ 100 უნდა ეწეროს!  






// დავალება 3: Lexical Scope და Scope Chain
// გამოიცანი, რას დაბეჭდავს ეს კოდი:

// JavaScript
let nickname = "Gigi";

function outer() {
    let nickname = "Gio";

    function inner() {
        console.log(nickname);
    }

    inner();
}

outer();
// კითხვა: დაიბეჭდება "Gigi" თუ "Gio"? გახსოვდეს ლექსიკური არე — ფუნქცია ჯერ თავისთან ეძებს, მერე კი მშობელთან






//     დავალება 4: პარამეტრები და Scope
// ფუნქციის პარამეტრებიც ლოკალური სკოუპის ნაწილია. გამოიცანი შედეგი:

// JavaScript
let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);
// კითხვა: რატომ არ შეიცვალა გლობალური hero Superman-ით? და რა როლი ითამაშა აქ "Iron Man"-მა?
