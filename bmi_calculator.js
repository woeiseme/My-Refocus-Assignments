function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight, BMI: "+bmi.toFixed(1);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight, BMI: "+bmi.toFixed(1);
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight, BMI: "+bmi.toFixed(1);
    } else {
        return "Obesity, BMI: "+bmi.toFixed(1);
    }
}

console.log(bmiCalculator(71, 1.80)); 
