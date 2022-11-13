function foodDelivery(input) {
    let chicken = 10.35; 
    let fish = 12.40;
    let veggie = 8.15; 
    let deliveryCost = 2.50
    let chickenMeal = Number(input[0]) * chicken; 
    let fishMeal = Number(input[1]) * fish; 
    let veggieMeal = Number(input[2]) * veggie; 
    let mealSum = chickenMeal + fishMeal + veggieMeal; 
    let desert = mealSum * 0.20; 
    let total = mealSum + desert + deliveryCost
    console.log(total)
}

foodDelivery([2, 4, 3])