// 1) შექმენი 3-ი ცვლადი ჯერ შეინახეთ თქვენი სახელი,გვარი,საყვარელი სპორტი, სტრინგ ლიტერალის გამოყენებით გამოიტანეთ ერთი დიდი წინადადება.

let name = "nikolozi";
let lastname = "lusmanashvili";
let favSport = "gym";
let long = `my name is ${name}, and my last name is ${lastname},my favorite sport is ${favSport}`;
console.log(long);


// 2)შექმენი სია სადაც შეინახავთ ნებისმიერ მონაცემთა ტიპის ელემენტს, შენი დავალებაა ამოიღო სიიდან ერთი რანმომული ელემენტი და გამოიტანო კონსოლში, მინიშნება: Math.random()

let list = [1,2,3,4,5,5,6,7];
let random = (Math.trunc(Math.random()*list.length));
console.log(random);
