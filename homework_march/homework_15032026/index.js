function calculateRentalPrice(model, days){
 //модель машины
  const prices = {
     "Эконом": 10000,
     "Бизнес": 20000,
     "Премиум": 50000
 };

  ///цена аренды за день
  let pricesPerDay = prices[model];

  if(!pricesPerDay){
      return "Модель не найдена"
  }
 console.log("Общая стоимость аренды за", days, "дней:", pricesPerDay*days)
  return pricesPerDay*days;

}


function calculateDeliveryCost(region){
let delivery = {
    "Город": 0,
    "Ближний регион": 5000,
    "Дальний регион":10000
};

const pricesDeliveryCost = delivery[region];
if(!pricesDeliveryCost){
    return "Не найдено"
}
    console.log("Общая стоимость доставки в", region, ":", pricesDeliveryCost, "тенге")
    return pricesDeliveryCost;

}

function calculateTax(region, price){
let tax = {
    "Город": 0.12,
    "Ближний регион": 0.1,
    "Дальний регион": 0.08
}

    let taxSum = calculateDeliveryCost(region)*tax[region];
    console.log("Сумма налога по", region, "составляет:",taxSum, "тенге");
    return taxSum;
}

function processRentalOrder(model, days, region, price){

    let sale

        if( days >= 7 && days <= 14){
           sale = 0.05
    }else if (days > 14){
           sale =  0.1
    }else{
            sale = 1
        }


    let sumOrder = (calculateRentalPrice(model,days) + calculateDeliveryCost(region) + calculateTax(region, price))/sale;
    console.log("Общая сумма составляет:",sumOrder);
    return sumOrder;
}

// calculateRentalPrice("Эконом",4 )
// calculateDeliveryCost("Ближний регион")
// calculateTax("Ближний регион", 5000)
processRentalOrder("Эконом", 4, "Ближний регион")

