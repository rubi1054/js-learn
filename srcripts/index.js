/*
if(условие){
    //code
} else{
    //code если условие не выполнилось
}

операторы сравнения   >   <   >=   <=   ==  !=


// просим ввести число и узнать больше ли оно 10-ти

let x;
x = prompt('Enter value x');
x = Number(x);


if (isNaN(x)== false){
    if(x >= 10){
        console.log('Yes. X >= 10');
    } else{
        console.log('No. X < 10');
    }  
} else{
    console.log('Ошибка. Введенное значение не число');
}

/* 
if(условие1){
        //code при выполнение условия1
    } else if(условие2){
        //code при выполнение условия2
    } else if(условие3){
        //code при выполнение условия3
    } else{
        // code если ни одно условие не было выполнено
    }
*/

/*
//задача. просим ввести число и узнать больше оно 10 или 100

if(x < 10){
    console.log('x<10');
} else if (x > 100){
    console.log('x>100');
} else{
    console.log('x в диавпазоне от 10 до 100')
}

//task. Пользователь вводит число минут. определить в какую четверть часа он попал
let y = prompt('Введите число минут');
if(y <= 15){
    console.log ('первая четверть');
} else if (y <= 30){
    console.log ('вторая четверть');
} else if (y <= 45){
    console.log ('третья четверть');
} else if (y <= 60){
    console.log ('четвертая четверть');
} else {
    console.log ('другое число');
}

//task. пользователь вводит номер времени года (1 - зима, 2 -весна, 3 - лето, 4 - осень). вывести название времени года по числу
let numMo = prompt('Введите номер времени года');
if (numMo == 1){
    console.log ('It is winter');
} else if (numMo == 2){
    console.log ('It is spring');
} else if (numMo == 3){
    console.log ('It is summer');
} else if (numMo == 4){
    console.log ('It is autumn');
} else{
    console.log ('Error');
}

//task. пользователь вводит возраст. проверить совершеннолетний ли он?
let userAge = prompt('Ваш возраст?');
if (userAge >= 18){
    console.log ('совершеннолетний');
} else{
    console.log ('несовершеннолетний');
}


//task. спросить пользлвателя сколько будет 2 + 2?
let answerUser = prompt('Сколько будет 2 + 2?');
let answerCalculator = 4;
if (answerUser == answerCalculator){
    console.log ('You are right! Congruts!');
} else{
    console.log ('Your answer is incorrect!');
}


//task. товар стоит 120 гр. пользователь покупает определенное количество штук. подсчитай стоимость покупки (скидка 3% если сумма больше 700 грн; скидка 5% если сумма больше 1000 грн)
let unitPrice = 120;
let quantity = Number(prompt('Введите количество товара',1));
let totalPrice = unitPrice * quantity;
if (totalPrice >= 1000) {
    totalPrice = totalPrice - totalPrice*0.05;
} else if (totalPrice >= 700) {
    totalPrice = totalPrice - totalPrice*0.03;
}
console.log ('Сумма к оплате', totalPrice, 'грн');
*/

//task. товар стоит 120 гр. пользователь покупает определенное количество штук. подсчитай стоимость покупки (скидка 3% если сумма больше 700 грн; скидка 5% если сумма больше 1000 грн). Высчитать процент скидки.
let unitPrice = 120;
let quantity = Number(prompt('Введите количество товара',1));
let discount = 0;
let totalPrice = unitPrice * quantity;
if (totalPrice >= 1000) {
    discount = 5;
    totalPrice = totalPrice * (100 - discount)/100;
} else if (totalPrice >= 700) {
    discount = 3;
    totalPrice = totalPrice * (100 - discount)/100;
}
console.log ('Сумма к оплате', totalPrice, 'грн. скидка:', discount, '%');