import { products, categories } from "./productsData.js"
import { renderCards } from "./render.js";
import { filterByPrice } from "./price-filters.js";

const clearFilters = (list) =>{

    list.forEach(button => {
        if (button.classList.contains("filter__selected")){
            button.classList.remove("filter__selected");
        }
        if (button.classList.contains("dark-mode__selected")){
            button.classList.remove("dark-mode__selected");
        }
    });
}

export const filterFromCategory = (category) => {
    let filteredList = [];

    if (category === 'Todos') {
        filteredList = [...products];
        return filteredList;
    }

    products.forEach(album => {
        if (category == categories[album.category]) {
            filteredList.push(album);
        }
    });

    return filteredList;
}

export const setupFilters = () =>{

    const buttonList = document.querySelectorAll('#genre-filter > ul > li');

    
    buttonList.forEach(button => {
        button.addEventListener('click', ()=> {
            
            let theme = localStorage.getItem("theme");
            clearFilters(buttonList);
            if (theme === "lightMode" || theme === null) {
                button.classList.add('filter__selected');
            } else if ( theme === "darkMode") {
                button.classList.add('dark-mode__selected');
            }
            const rangeBar = document.querySelector('#price-filter >input');
            const currentPrice = rangeBar.value;
            const currentList = filterFromCategory(button.innerText);
            const filteredList = filterByPrice(currentPrice, currentList);
            

            renderCards(filteredList);
        });
    });
}