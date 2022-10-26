/* Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/


const getSum = () => {
    const sum = (a, b) => a + b;     
    return sum;    
  };
  
  let  a = +prompt('Your first number:');
  let b = +prompt('Your second number:');
  
  const sum = getSum();   
  console.log(sum(a,b))