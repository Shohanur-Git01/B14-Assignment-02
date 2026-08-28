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

