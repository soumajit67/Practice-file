let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3);



console.log("5" + 5); // "55"
console.log("5" - 5); // 0
console.log("5" * 5); // 25
console.log("5" / 5); // 1
console.log("5" % 5); // 0
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
//why are these outputs different? Because of the order of operations and how JavaScript handles type coercion. In the first case, "1" + 2 is evaluated first, resulting in "12", and then "12" + 2 is evaluated, resulting in "122". In the second case, 1 + 2 is evaluated first, resulting in 3, and then 3 + "2" is evaluated, resulting in "32".



console.log(2>1)
console.log(2<1)
console.log(2>=2)
console.log(2<=1)
console.log(2==2)
console.log(2== "2")
console.log(2=== "2")
console.log(0 == false)
console.log(0 === false)