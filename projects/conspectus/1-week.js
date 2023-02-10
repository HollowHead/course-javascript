// ------------------ Неделя #1 -----------------------------------------------
// ------------------ 3. Область видимости и замыкание ------------------------

var aZam = 10; 

function fn1(b, c) {
    function fn2(d, e) {
        let funcSum = aZam + b + c + d + e;
        console.log('3. Область видимости и замыкание: ' + funcSum);
        return funcSum;
    };

    fn2(3, 4);
};

var resultZam = fn1(1, 2);
console.log(fn1(1, 2));






// ------------------ 5. Типы объявления функций --------------------------------------
// ------------------ Expression (в контексте другого выражения) ВСПЛЫТИЯ НЕТ! --------

var sumExp = function(a, b) {
    return a + b
}

// ------------------ Declaration (сама по себе) ВСПЛЫТИЕ ЕСТЬ! -----------------------

function sumDecl(a, b) {
    return a + b
}

var resulDecl = sumDecl(1, 2);






// ------------------ 6. Стрелочные функции --------------------------------------------

var sumArr =  function(a , b) {
    return a + b
}

var resultArr = sumArr(1, 2);

console.log('6. Стрелочные функции #1: ' + resultArr);

// -------------------------------------------------------------------------------------

var sumArr2 =  (a , b) => {
    return a + b
}

resultArr = sumArr2(3, 4);

console.log('6. Стрелочные функции #2: ' + resultArr);

// -------------------------------------------------------------------------------------

var sumArr3 =  (a , b) => a + b;

resultArr = sumArr3(5, 6);

console.log('6. Стрелочные функции #3: ' + resultArr);

// -------------------------------------.map --------------------------------------------

var arr = [1, 2, 3, 4];

var arrMapArr = arr.map(function(number){
    return number * number
});

console.log('6. Стрелочные функции #4.1: ' + arr);
console.log('6. Стрелочные функции #4.2: ' + arrMapArr);

// -------------------------------------.map 2 -------------------------------------------

var arrMapArr2 = arr.map(n => n * n);

console.log('6. Стрелочные функции #4.3: ' + arrMapArr2);