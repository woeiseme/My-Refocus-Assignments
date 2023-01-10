//bmi_calculator.test.js
const bmiCalculator = require("./bmi_calculator");


test("calculates BMI correctly for normal weight", () => {
    expect(bmiCalculator(71, 1.73)).toBe("Normal weight, BMI: 23.7");
});
