const E_kilometer = document.querySelector('#kilometer')
const E_meter = document.querySelector('#meter')
const E_centimeter = document.querySelector('#centimeter')
const E_millimeter = document.querySelector('#millimeter')
const E_celsius = document.querySelector('#celsius')
const E_Kelvin = document.querySelector('#kelvin')
const E_Fahrenheit = document.querySelector('#fahrenheit')
const E_kilogram = document.querySelector('#kilogram')
const E_gram = document.querySelector('#gram')
const E_milligram = document.querySelector('#milligram')




function kilometer(value){
    E_meter.value = value * 1000
    E_centimeter.value = value * 10000
    E_millimeter.value = value * 1000000
}


function meter(value){
    E_kilometer.value = value / 1000
    E_centimeter.value = value * 10000
    E_millimeter.value = value * 1000000
}

function centimeter(value){
    E_kilometer.value = value / 1000
    E_meter.value = value / 100
    E_millimeter.value = value * 10
}

function millimeter(value){
    E_kilometer.value = value / 1000000
    E_meter.value = value / 10000
    E_centimeter.value = value / 10
}

function celsius(value){
    E_Kelvin.value = value + 273.15
    E_Fahrenheit.value = (value * 9/5) + 32
}

function kelvin(value){
    E_celsius.value = value - 273.15
    E_Fahrenheit.value = (value - 273.15) * (9/5) + 32
}

function fahrenheit(value){
    E_celsius.value = (value - 32 ) * (5/9)
    E_Kelvin.value = (value + 459.67 ) *(5/9)
}

function kilogram(value){
    E_gram.value = value * 1000
    E_milligram.value = value * 1000000
}

function gram(value){
    E_kilogram.value = value / 1000
    E_milligram.value = value * 1000
}

function milligram(value){
    E_kilogram.value = value / 1000000
    E_gram.value = value / 1000
}