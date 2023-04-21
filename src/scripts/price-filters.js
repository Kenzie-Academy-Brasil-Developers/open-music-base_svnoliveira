import { products } from "./productsData.js";
import { renderCards } from "./render.js";
import { filterFromCategory } from "./filters.js";

const checkHighestPrice = () => {

    let highestPrice = 0;
    products.map(album => {
        const number = album.price;
        if (number > highestPrice){
            highestPrice = number;
        }
    });
    return highestPrice;
}

export const filterByPrice = (price, categoryList) =>{
    let filteredList = [];
    categoryList.forEach(album => {
        if (album.price <= price) {
            filteredList.push(album);
        }
    });
    return filteredList;
}

const findCurrentCategory = () => {
    const categoryButtons = document.querySelectorAll('#genre-filter > ul > li');
    let category = 'Todos';
    categoryButtons.forEach(button => {
        if (button.classList.contains('filter__selected') || button.classList.contains('dark-mode__selected')) {
            category = button.innerText;
        }
    });
    return category;
}

export const handleSlider = () => {
    const priceText = document.querySelector('#price');
    const rangeBar = document.querySelector('#price-filter >input');

    rangeBar.max = checkHighestPrice();
    rangeBar.value = rangeBar.max;
    let defaultValue = parseInt(rangeBar.value).toFixed(2);
    priceText.innerText = `Até R$ ${defaultValue}`;

    rangeBar.addEventListener('change', () =>{
        let currentValue = parseInt(rangeBar.value).toFixed(2);
        priceText.innerText = `Até R$ ${currentValue}`;
        
        const currentCategory = findCurrentCategory();

        const currentList = filterFromCategory(currentCategory);
        
        const filteredList = filterByPrice(currentValue, currentList);
        renderCards(filteredList);
    })
}