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
function getCustomerPurchasesText(data) {
    const customersMap = {};
    data.customers.forEach(customer => {
        customersMap[customer.id] = {
            name: `${customer.first_name} ${customer.last_name}`,
            workplace: customer.workplace,
            receiptsCount: 0,
            totalSpent: 0
        };
    });

    data.purchase_records.forEach(record => {
        const customer = customersMap[record.customer_id];
        if (customer) {
            customer.receiptsCount += 1;
            customer.totalSpent += record.total_amount;
        }
    });

    const lines = ["=== ПОКУПКИ ПО ПОКУПАТЕЛЯМ ==="];

    Object.values(customersMap).forEach(customer => {
        const totalFormatted = customer.totalSpent.toFixed(2);
        lines.push(`${customer.name} (${customer.workplace}): ${customer.receiptsCount} чеков, ${totalFormatted} тг.`);
    });

    return lines.join("\n");
}
function getSellerPurchasesText(data) {
    const sellersMap = {};
    data.sellers.forEach(seller => {
        sellersMap[seller.id] = {
            name: `${seller.first_name} ${seller.last_name}`,
            position: seller.position,
            receiptsCount: 0,
            totalSpent: 0
        };
    });

    data.purchase_records.forEach(record => {
        const seller = sellersMap[record.seller_id];
        if (seller) {
            seller.receiptsCount += 1;
            seller.totalSpent += record.total_amount;
        }
    });

    const lines = ["=== ВЫРУЧКА ПО ПРОДАВЦАМ ==="];

    Object.values(sellersMap).forEach(seller => {
        const totalFormatted = seller.totalSpent.toFixed(2);
        lines.push(`${seller.name} (${seller.position}): ${seller.receiptsCount} чеков, ${totalFormatted} тг.`);
    });

    return lines.join("\n");
}
function getProductsPurchasesText(data) {
    const categoriesMap = {};

    data.products.forEach(product => {
        const margin = product.sale_price - product.purchase_price;

        if (!categoriesMap[product.category]) {
            categoriesMap[product.category] = {
                name: product.category,
                totalMargin: 0,
                count: 0
            };
        }

        categoriesMap[product.category].totalMargin += margin;
        categoriesMap[product.category].count += 1;
    });

    const lines = ["=== СРЕДНЯЯ МАРЖА ПО КАТЕГОРИЯМ ==="];

    Object.values(categoriesMap).forEach(category => {
        const avgMargin = (category.totalMargin / category.count).toFixed(2);
        lines.push(`${category.name}: ${avgMargin} тг. средняя маржа`);
    });

    return lines.join("\n");
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
    console.log (getCustomerPurchasesText(data));
    console.log(getSellerPurchasesText(data));
    console.log(getProductsPurchasesText(data));

}

generalStatistics(data);

