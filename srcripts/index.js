console.log("Hello World!!!");

//alert("Hello Java Script!!!");

// однострочный комментарий

/*
многострочный комент
и еще
и еще
*/

// объявление переменных
let name = "Yana"; // string
let year = 2023; // number
let month = "Feb"; // string
let a = 10, b = 20, c = 30; // number
let pi = 3.141596; // number
let user1 = "Vasya Testovich", user2 = 'Masha Fox', user3 = 'Tom Adson'; // string
let isMale= false; //boolean
let isWeekend = true; // boolen

// вывод переменных
console.log(name);
console.log(year);
console.log(month, year);
console.log("Month is", month, "and year is", year);

console.log("Sum a and b and c is", a+b+c);

//работа с переменными
let x  = 100;
x = 1;
x = 0; 
x = 9;
console.log(x);
x = 'hello';
console.log(x);
x = 200;
console.log(x);
x = "Tom";
x = "John Smith";
console.log(x);

let y = 5, y2 = 20;
x = y;
console.log("x=", x, "y=", y);
x = y2;
console.log("x=", x, "y=", y);

//арифметические операции
x = 10;
x = 10 + 4 * 5 - 2 + (3 + 4)/2;
console.log(x);
x = 10;
y = 5;
let result;
result = x + y;
console.log(result);
result = x - y; 
console.log(result);
result = x * y;
console.log (result);
result = x / y;
console.log (result);


x = x + 2;
console.log (x);
x = x - 2;
console.log (x);

//икремент
x = x + 1;
console.log ("икремент",x);
x++;
console.log("икремент",x);

//дикремент
x = x - 1;
console.log ("дикремент",x);
x--;
console.log("дикремент",x);

/*практика

1.Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль.
2. Создайте переменные greeting со значением'Hello, ' и userName. Напиши имя пользователя в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.
3. Создайте переменные a=10 и b=20. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение c. Сложите переменные c и d, а результат запишите в переменную res.
*/

//1.
let x1 = 11;
let x2 = true;
let x3 = "java script";
let x4 = "100";

console.log("task1", x1,x2,x3,x4);

//2.
let greeting = "Hello,";
let userName = "Vasya";
console.log(greeting, userName, "!!!");
//alert(greeting+userName+"!!!");

//3. 
let varA = 10; varB = 20;
let varC = varA - varB;
let varD = varC;
let res = varC + varD;
console.log(varA, varB, varC, varD, res);

/*
task 4. Написать программу перевода метров в сантименты. пользователь вводит метры, т.е. есть переменная с метрами, и мы должны вывести переменную с сантиметрами. 

task 5. Написать програмуу которая подсчитает площадь прямоугольника (s площать = a*b). a и b задаем вручную. 
*/

//4.
let valM = 20;
let valCM;
valCM = valM * 100;
console.log("task4", valCM);

//5.
let sizeA, sizeB, square;
sizeA = 30.7;
sizeB = 80.2;
square = sizeA*sizeB;
console.log("task5", square);

//tasks with prompt
let test;
test = prompt("Введи значение переменной test");
console.log("Test is", test);

//Вместо конкретного числа добавляем prompt
//task 4. re-done
let valMet = prompt("Введи значение в метрах");
let valCent;
valCent = valMet * 100;
console.log("task4. re-done:", valCent, "cm");

//task.5 re-done
let sizeAA, sizeBB, squaree;
sizeAA = prompt("Введи значение ширины");
sizeBB = prompt("Введи значение длинны");
squaree = sizeAA * sizeBB
console.log("task5. re-done:", squaree);

