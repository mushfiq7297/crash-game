function password(obj) {
    const passWord = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
    return passWord;
}



function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) && livingCost !== 'number') {
        return "invalid input";
    }
    else {
        allPayments = 0;
        for (element of arr) {
            if (element >= 3000) {
                element = element * 0.8;
            }
            allPayments = element + allPayments;
        }
        const savings = allPayments - livingCost;
        if (savings < 0) {
            return "earn more";
        }
        else {
            return savings;
        }
    }
}