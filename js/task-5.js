let country = prompt('Введите страну')

country = country.toLowerCase();

console.log(country);

let price;

switch (country) {
    case 'китай':
        price = 100;
        break;
    case 'чили':
        price = 250;
        break;
    case 'австралия':
        price = 170;
        break;
    case 'индия':
        price = 80;
        break;
    case 'ямайка':
        price = 120;
        break;
    default:
        price = 1;
}

console.log(price)


if (price !== 1) {
    alert(`Доставка в ${country} будет стоить ${price} кредитов!`);
} else {
    alert('В вашей стране доставка не доступна');
}



