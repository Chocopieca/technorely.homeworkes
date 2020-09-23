// 1 задание
function printNumbers(from, to) {
    let numbers = "";
    for ( let i = from; i <= to; i++) {numbers += i;};
    let randNumber = numbers[Math.floor(Math.random()*numbers.length)];
    console.log(randNumber);
};

// setInterval(printNumbers, 1000, 0, 9);
// setTimeout(function run() {
//     printNumbers(0, 9);
//     setTimeout(run, 1000);
// }, 1000);

// 2 задание
function clock() {
    setInterval(time, 1000);
    function time() {
        setTimeout(console.clear(), 1000);
        let time = new Date();
        let timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        console.log(timeNow);
    }
}

// clock();

// 3 задание
function debounce(f, ms) {
    let isCooldown = false;
    return function() {
        if(isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms); 
    };
  };
  
let f = debounce(alert, 1000);
  
//   f(1); // выполняется немедленно
//   f(2); // проигнорирован
  
//   setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
//   setTimeout( () => f(4), 1000); // выполняется
//   setTimeout( () => f(5), 1500);

// 4 задача
function throttle(func, ms) {
    let isThrottle = false,
      saveArgs,
      seveThis;
  
    function wrapper() {
  
      if(isThrottle) {
        saveArgs = arguments;
        seveThis = this;
        return
      }
  
      isThrottle = true;
  
      func.apply(this, arguments);
  
      setTimeout(() => {
        isThrottle = false;
        if(saveArgs) {
            wrapper.apply(seveThis, saveArgs);
            saveArgs = saveThis = null;
        }
      },ms)
    }
    return wrapper
  }  

// зачем это ???
// function f(a) {
//     console.log(a)
// }

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)