// ------------------ Неделя #2 -----------------------------------------------
// ------------------ 1. Строковая интерполяция -------------------------------

var nameInt = 'Сергей'
var lastNameInt = 'Петров'
var oldInt = 30
var jobInt = 'водитель поезда'

var fullInfoInt = `${nameInt} ${lastNameInt} ${oldInt} ${jobInt}`

console.log('1. Строковая интерполяция: ' + fullInfoInt)

console.log(' ')


// ------------------ 2. Объекты ----------------------------------------------

var obj = {
    nameOb: 'Иван',
    lastNameOb: 'Петров',
    oldOb: 40,
    jobOb: 'директор водокачки'
}

console.log('2. Объекты: ' + obj.jobOb)
console.log('2. Объекты: ' + obj['lastNameOb'])

obj.lastNameOb = 'Петрович'
console.log('2. Объекты: ' + obj['lastNameOb'])

obj.hobbyOb = 'WoT'
console.log('2. Объекты: ' + obj['hobbyOb'])

console.log(' ')


// ------------------ 3. Массивы ----------------------------------------------

var arr = ['Сергей', 'Дмитрий', 'Иван']

console.log('3. Массивы: ' + arr.length)

arr.push('Директор водокачки') 
console.log('3. Массивы: ' + arr)
console.log('3. Массивы: ' + arr.length)


var arrObj = [
    {name: 'Сергей', lastName: 'Мелюков'},
    {name: 'Дмитрий', lastName: 'Петров'},
    {name: 'Андрей', lastName: 'Иванов'}
]

for (let i = 0; i < arrObj.length; i++) {
    console.log(arrObj[i])
    console.log(arrObj[i].name)
}

console.log(' ')


// ------------------ 4. Деструктурирующее присваивание: Массивы -----------------------

var input = 'Сергей Петров'
var parts = input.split(' ')

var [partsName, partsLastName] = [parts[0], parts[1]]

console.log('4. Деструктурирующее присваивание: Массивы: ' + input)
console.log('4. Деструктурирующее присваивание: Массивы: ' + parts)
console.log('4. Деструктурирующее присваивание: Массивы: ' + partsName)
console.log('4. Деструктурирующее присваивание: Массивы: ' + partsLastName)

console.log('-----------------------------------------------')



var input2 = 'Петров Сергей Иванович'
let [lastNameDest, nameDest, fathDest] = input2.split(' ')

console.log('4. Деструктурирующее присваивание: Массивы: ' + lastNameDest)
console.log('4. Деструктурирующее присваивание: Массивы: ' + nameDest)
console.log('4. Деструктурирующее присваивание: Массивы: ' + fathDest)

console.log('-----------------------------------------------')



hi(input2.split(' '))

function hi(userInfo) {
    let [ , nameDest, fathDest] = userInfo

    console.log(`4. Деструктурирующее присваивание: Имя отчество пользователя | ${nameDest} ${fathDest}`)
}

console.log(' ')




// ------------------ 5. Деструктурирующее присваивание: Объекты -----------------------

var userObj = {
    nameObj: 'Сергей',
    secondNameObj: 'Иванович'
}

var {nameObj, secondNameObj, lastNameObj = ''} = userObj

console.log('5. Деструктурирующее присваивание: Объекты — ' + `«Привет, меня зовут ${lastNameObj} ${nameObj} ${secondNameObj}»`)

console.log(' ')




// ------------------ 6. Spread-оператор ------------------------------------------------

var numberSpead = [1, 2, 3]

function sumSpread () {
    let sumTotal = 0

    for(let i=0; i < arguments.length; i++ ) {
        sumTotal += arguments[i]
    }

    console.log('6. Spread-оператор: ' + sumTotal)
    return sumTotal
}

sumSpread(...numberSpead)

console.log(' ')




// ------------------ 7. Rest-оператор ------------------------------------------------

var arrRest = [1, 2, 3, 4, 5]

var [firstRest, secondRest, ...restNum] = arrRest

console.log('7. Rest-оператор: ' + `${firstRest} ${secondRest} ${restNum}`)
console.log('7. Rest-оператор: ' + firstRest + secondRest + restNum)

function sumRest(firstRestFunc, secondRestFunc, ...restNumFunc) {
    console.log('7. Rest-оператор: ' + firstRestFunc, secondRestFunc, restNumFunc)
}

sumRest(...arrRest)


console.log('-----------------------------------------------')


var arrNumbersRest1 = [1, 2, 3, 4]
var arrNumbersRest2 = [5, 6, 7]

var arrCommonRest = arrNumbersRest1.concat(arrNumbersRest2)
console.log('7. Rest-оператор (.common): ' + arrCommonRest)

arrCommonRest = [...arrNumbersRest1, ...arrNumbersRest2]
console.log('7. Rest-оператор (rest): ' + arrCommonRest)

console.log(' ')



// ------------------ 8. Цикл for-of ------------------------------------------------

var arrForOf = [1, 2, 3, 4, 5]

for (let arrItem of arrForOf) {
    console.log('8. Цикл for-of: ' + arrItem)
}

console.log(' ')



// ------------------ 9. Symbol. Продвинутая тема -------------------------------------

function range(from, to) {
    var objectWithIterator = {}

    objectWithIterator[Symbol.iterator] = function() {
        var i = from

        return {
            next() {
                return {
                    value: i,
                    done: i++ === to
                }
            }
        }
    }

    return objectWithIterator
}

for (const numberIterator of range(2, 10)) {
    console.log('9. Symbol: ' + numberIterator)
}

