//Problem 01
let teamAGoals = 2;
let teamBGoals = 1;

function matchWinner(teamAGoals, teamBGoals) {

    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }
    else if (teamAGoals > teamBGoals) {
        return "Team A Won";
    }
    else if (teamAGoals < teamBGoals) {
        return "Team B Won";
    }
    else {
        return "Draw";
    }

}
console.log(matchWinner(teamAGoals, teamBGoals));


//Problem 02

const array = [60, 75, 50];
function isElevatorSafe(weights) {

    let totalWeightArray = [weights];
    totalWeigh = 0;

    if (!Array.isArray(weights)) {
        return "Invalid";

    }
    else {
        for (let i = 0; i < weights.length; i++) {
            totalWeigh += weights[i];
        }
    }
    if (totalWeigh <= 400) {
        return "true";
    }
    else {
        return "false";
    }
}
console.log(isElevatorSafe(array));


//Problem 03

const user = 550;

function calculateAiCost(tokensUsed) {
    let tokenPriceOf100 = 5;

    if (typeof tokensUsed !== "number") {
        return "Invalid";
    }
    else {
        if (tokensUsed <= 500) {
            return "0";
        }
        else if (tokensUsed > 500) {
            extraTokens = tokensUsed - 500;
            convertToExtraTokensForPrice = extraTokens / 100;
            usesExtraTokensAmount = convertToExtraTokensForPrice * tokenPriceOf100;
            return Math.floor(usesExtraTokensAmount);
        }
    }
}
console.log(calculateAiCost(user));


// Problem 04

const restaurants = [
    { name: "Chillox", rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 }];

function topRatedRestaurant(restaurants) {

    let topRestaurant = restaurants[0];

    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }
    else {
        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].rating > topRestaurant.rating) {
                topRestaurant = restaurants[i];
            }
        }
    }
    return topRestaurant.name.toUpperCase();
}
console.log(topRatedRestaurant(restaurants));


//Problem 05

const devWatch = [120, "200", 150];

function averageResponseTime(times) {
    if (!Array.isArray(times) || typeof times !== "number") {
        return "Invalid";
    }

    if (times.length == 0) {
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

    return total / times.length;
}
console.log(averageResponseTime(devWatch));
