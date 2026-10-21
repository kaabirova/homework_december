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

// function allProductsFunc(data){
//     let countProducts = 0;
//     data.purchase_records.items["sku"].forEach( allProducts =>{
//         countProducts++
//     })
//     return (countProducts);
// }


function generalStatistics(data){
    console.log("===ОБЩАЯ СТАТИСТИКА:===");
    console.log("Покупатели:", allCustomersFunc(data));
    console.log("Продавцы: ",allSellersFunc(data));
    // console.log("Товары: ",allProductsFunc(data));
    console.log("Чеки: ",allReceiptsFunc(data));

}


generalStatistics(data);