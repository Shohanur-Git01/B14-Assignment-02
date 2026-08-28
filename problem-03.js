//Problem 03

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
