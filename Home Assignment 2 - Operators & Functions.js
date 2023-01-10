// Task1.
// convertToKelvin(tempCelsius) that converts Celsius to Kelvin
// convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin

function celsiusToKelvin(tempCelsius){
    let tempKelvin = (tempCelsius + 273.15)+ " K";
    return tempKelvin
}
console.log(celsiusToKelvin(19))

function fahrenheitToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32)* 5 / 9 + 273.15 + " K";
    return tempKelvin
}

console.log(fahrenheitToKelvin(80))



// Task2.



// You are asked to design an app that enables you to leave a tip.
// The tip should be 10% of a meal cost.

function computeTip(totalBill){
    let tip = (totalBill / 10)
    return tip
}
console.log(computeTip(100))