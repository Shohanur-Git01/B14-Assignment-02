//Problem 05

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
