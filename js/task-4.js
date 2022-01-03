// credits - баланс пользователя.
let credits = 23580;
// pricePerDroid - цена за один дроид.
const pricePerDroid = 3000;

// Итоговая цена за количество дроидов
let totalPrice;

let quantityDroid = prompt('Введите количество которое желаете купить')

if (quantityDroid === null) {
    alert('Отменено пользователем!');
    
} else {
    let how = Number(quantityDroid);
    totalPrice = how * pricePerDroid;

    if (totalPrice > credits) {
        alert('Недостаточно средств на счету!')
    } else {
        let result = credits - totalPrice
        alert(`Вы купили ${how} дроидов, на счету осталось ${result} кредитов.`)
    }
}
