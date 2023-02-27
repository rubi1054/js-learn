// вывести * 5 раза
/*
let s = '*';
console.log(s);
console.log(s);
console.log(s);
console.log(s);
console.log(s);
*/

/*
while (condition) {
    // код
    // также называемый "телом цикла"
  }
  */
/*
  let s = '*';

  //1
  let count = 5;  // count значит "разы"
  while(count > 0){
    console.log (s);
    count--;   // count = count -1
  }

  //2
  let n = 1;
  while(n <= 100){
    console.log (n);
    n++;   // count = count +1
  }
*/

  //вывести числа от 1 до 10
  console.log('вывести числа от 1 до 10');
  let a = 1;
  while(a <= 10){
    console.log (a);
    a++;
  }

  //вывести числа от 10 до 1
  console.log('вывести числа от 10 до 1');
  let b = 10;
  while (b > 0){
    console.log (b);
    b--;
  }

  //вывести числа от 1 до 10 нечетные
  console.log('вывести числа от 1 до 10 нечетные');
  let c = 1;
  while (c <=10){
    console.log (c);
    c = c + 2;
  }

   //вывести сумму чисел от 1 до 10
   console.log('вывести сумму чисел от 1 до 10');
   let d = 1;
   let result = 0;
   while (d <=10){
     result = result + d; //накапливание суммы здесь
     d++;
   }
   console.log (result);

      //вывести сумму нечетных чисел от 1 до 10
      console.log('вывести сумму нечетных чисел от 1 до 10');
      let e = 1;
      let res = 0;
      while (e <=10){
        res = res + e; //накапливание суммы здесь
        e = e + 2;
      }
      console.log (res);

      //произведение чисел от 1 до 10
      console.log('произведение чисел от 1 до 10');
      let val = 1;
      resul = 1;   // при произведении числа в резалт нужно поставить 1, потому что умножение каждого числа на *1 = тоде число
      while(val <=10){
        resul = resul * val;
        val++;
      }
      console.log(resul);




    //вывести сумму чисел от 50 до 70
   console.log('вывести сумму чисел от 50 до 70');
   let limit1 = 50, limit2 = 70, step = 1;
   let f = limit1;
   let re = 0;
   while (f <= limit2){
     re += f;    //re = re + f; 
     f += step;  //f = f + step;
   }
   console.log (re);

   //сокращенные операторы (при том что Х это одно и тоже значение)
   let x = 5;
   x += 2; //x = x + 2;
   x -= 2; //x = x - 2;
   x *= 2; //x = x * 2;
   x /= 2; //x = x / 2;