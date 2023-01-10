
// Sam decides to do cycling 30 minutes everyday for 15 days. 
// Cycling for 30 minutes burns 225 calories on average. 
// Use console.log to tell Sam how much calories
// he would lose:

// Great work, Sam! After 0.5 hours of running every day for a week,
// you may lose a total of 3375 calories

let caloriesPerHalfHour = 225;
let samCyclingTimes = 7;
let CyclingMinutesPerDay = .50;
let maxCyclingTimes = 15;

let totalHoursCycling = samCyclingTimes * CyclingMinutesPerDay;
let totalCaloriesBurned = caloriesPerHalfHour * maxCyclingTimes;

console.log(`Great work, Sam! After ${CyclingMinutesPerDay} hours of cycling every day for a week, you may lose a total of ${totalCaloriesBurned} calories.`);




// Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500
// Thank you for your discipline and hardwork, Sam! You are now 25% away from your goal of saving ₱10,000.


let samToSave = 10000;
let samAlreadySaved = 7500;
let remainingToSave = samToSave - samAlreadySaved;

let percentageAway = remainingToSave / samToSave * 100



console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentageAway}% from your goal of saving ${samToSave}.`);
