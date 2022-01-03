
// total - количество товара на складе
// ordered - сколько единиц товара клиен хочет купить
const total = 100;
const ordered = 10;

if (ordered > total) {
    console.log(`На складе недостаточно твоаров!`)
} else { console.log('Заказ оформлен, с вами свяжется менеджер') };
