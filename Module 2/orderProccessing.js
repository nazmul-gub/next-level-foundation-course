// we'll build a order processing system to understand dry and how important a function is.

function isValidPrice(price) {
    return typeof price === "number" && price > 0;
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

function calculateDiscount(price, discountPercent) {
    if(!isValidPrice(price)) {
        return 0;
    }
    let discountAmount = (price * discountPercent) / 100;
    return price - discountAmount;
}

function calculateFinalBill(price, vatPercent = 15) {
    let vat = (price * vatPercent) / 100;
    return price + vat;
}

function formatBDT(amount) {
    return `${amount.toFixed(2)} BDT`;
}

function capitalized(str) {
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function processOrder(user, itemPrice, discountCode) {
    console.log(`--- processing order for ${capitalized(user.name)} ---`);
    if(!isValidEmail(user.email)) {
        console.log("Email is unvalid, please enter a valid email!");
    }

    let currentPrice = itemPrice;

    if(discountCode = "NLB") {
        currentPrice = calculateDiscount(currentPrice, 20);
        console.log("20% discount applied!");
    }

    let totalBill = calculateFinalBill(currentPrice);

    console.log(`Final amount to pay: ${formatBDT(totalBill)}`);
    console.log("Oder completed successfully");
}


let user1 = {
    name : "Jahan",
    email : "Jahan@gmail.com"
}

processOrder(user1, 1840, "NLB");