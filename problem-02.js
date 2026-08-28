//Problem 02

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
