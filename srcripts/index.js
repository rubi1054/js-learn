/*
for (начало; условие; шаг) {
  // ... тело цикла ...
}
*/
/*
// * 5

let n, s = '*';
for(n=1; n<=5; n++){
    console.log('*');
}

//1 .... 10
for(let i=1; i<=10; i++){
    console.log('i');
}

//1 .... 10 нечетные
for(let i=1; i<=10; i = i+2){
    console.log('i');
}

//10 .... 1
for(let i=10; i>=1; i--){
    console.log('i');
}
*/


//task1. вывести таблицу умножения на 4
//вариант с FOR
console.log('вывести таблицу умножения на 4');
let res, i;
for (i = 1; i <=10; i++){
    res = 4 * i;
    console.log('4 * ', i, '=', res);
}

//вариант с WHILE
let j = 1;
while (j <=10){
    resu = 4*j;
    console.log('4 * ', j, '=', resu);
    j++;
}



//task2. найти произведения чисел от limit1 до limit2
console.log('найти произведения чисел от limit1 до limit2');
let limit1 = 2, limit2 = 5;

//вариант с FOR
resul = 1;
for(v=limit1; v<=limit2; v++){
    resul = resul * v;
}
console.log(resul);

//вариант с WHILE
result = 1;
w=limit1;
while(w<=limit2){
    result = result * w;
    w++;
}
console.log(result);
