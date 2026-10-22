// Домашняя задача
// Используя данные в файле dataset.js, необходимо вывести статистку в таком виде
//
// Для дробного числа можете использовать .toFixed(2), чтобы после точки были две цифры

import { data } from './dataset.js';

function allCustomersFunc(data){
    let countCustomers = 0;
    data["customers"].forEach( allCustomers =>{
        countCustomers++
    })
    return (countCustomers);
}
function allSellersFunc(data){
    let countSellers = 0;
    data["sellers"].forEach( allSellers =>{
        countSellers++
    })
    return (countSellers);
}
function allReceiptsFunc(data){
    let countReceipts = 0;
    data["purchase_records"].forEach( allReceipts =>{
        countReceipts++
    })
    return (countReceipts);
}
function allProductsFunc(data){
    let countProducts = 0;
    data["products"].forEach( allProducts =>{
        countProducts++
    })
    return (countProducts);
}
function totalRevenueFunc(data){
    let total = 0;
    for (let i = 0; i < data.purchase_records.length; i++) {
        total += data.purchase_records[i].total_amount;

    }
    return (total.toFixed(2))
}
function generalDiscountsFunc(data){
    let discount = 0;
    for (let i = 0; i < data.purchase_records.length; i++) {
        discount += data.purchase_records[i].total_discount;

    }
    return (discount.toFixed(2))
}
function averageTicketSizeFunc(data){
    let averageTicket =0;
    averageTicket = totalRevenueFunc(data) / allReceiptsFunc(data)
    return (averageTicket.toFixed(2));

}
function countProductsByCategory(data) {
    let counts = {};
    for (let i = 0; i < data.products.length; i++) {
        let category = data.products[i].category;
        if (!counts[category]) {
            counts[category] = 0;
        }
        counts[category]++;
    }
    return counts;
}
function unprofitableProductsFunc(data){
    let unprofitable = 0;
    let count = 0;
    for (let i = 0; i < data.products.length; i++) {
        let purchase_price = data.products[i].purchase_price;
        let sale_price = data.products[i].sale_price;
        let name = data.products[i].name;
        let sku = data.products[i].sku;
        if (purchase_price < sale_price){
        unprofitable = sale_price - purchase_price;
        count++

        console.log(name, sku, "- убыток", unprofitable.toFixed(2), "за единицу");
        }

    }
    return count;
}


function customersName(data){
   let customers =[];
    for (let i = 0; i < data.customers.length; i++) {
        customers.push((data.customers[i].last_name)+ " " +(data.customers[i].first_name) + "(" + (data.customers[i].workplace) +")" );
    }
    return customers
}



function generalStatistics(data){
    console.log("===ОБЩАЯ СТАТИСТИКА:===");
    console.log("Покупатели:", allCustomersFunc(data));
    console.log("Продавцы: ",allSellersFunc(data));
    console.log("Товары: ",allProductsFunc(data));
    console.log("Чеки: ",allReceiptsFunc(data));
    console.log("===ВЫРУЧКА:===");
    console.log("Общая выручка:", totalRevenueFunc(data));
    console.log("Средний чек: ", averageTicketSizeFunc(data));
    console.log("Общие скидки: ", generalDiscountsFunc(data));
    console.log("=== УБЫТОЧНЫЕ ТОВАРЫ (sale < purchase) ===");
    console.log("Итого убыточных товаров", unprofitableProductsFunc(data), "из", allProductsFunc(data))  ;
    console.log("=== ТОВАРОВ ПО КАТЕГОРИЯМ ===");
    console.log("Категории:",countProductsByCategory(data));
    console.log("=== ПОКУПКИ ПО ПОКУПАТЕЛЯМ ===");
    console.log (customersName(data));




}

generalStatistics(data);

