export const toggleTheme = () => {
    const main = document.querySelector('html');
    const button = document.querySelector('#top > img');
    const titles = document.querySelectorAll('main > h2');
    const filterButtons = document.querySelectorAll('#genre-filter > ul > li');
    const sliderTexts = document.querySelectorAll('#price-filter > header > h2');
    const albumCards = document.querySelectorAll('.display__album-card > div');
    const albumInfo = document.querySelectorAll('.display__information-container > span');
    const cancelButtons = document.querySelectorAll('.display__price-container > button');
    
    main.classList.toggle('dark-mode');
    
    button.classList.toggle('dark-mode__background--grey1');
    
    titles.forEach(title => {
        title.classList.toggle('dark-mode__text--grey4');
    });
    
    filterButtons.forEach(filterButton => {
        filterButton.classList.toggle('dark-mode__filter-button');
        if (filterButton.classList.contains('filter__selected') || filterButton.classList.contains('dark-mode__selected')){
            filterButton.classList.toggle('dark-mode__selected');
            filterButton.classList.toggle('filter__selected');
        }
    });
    
    sliderTexts.forEach(sliderText =>{
        if (sliderText.innerText === 'Definir Preço') {
            sliderText.classList.toggle('dark-mode__text--grey4')
        } else {
            sliderText.classList.toggle('dark-mode__text--grey3')
        }
    })
    
    albumCards.forEach(albumCard => {
        albumCard.classList.toggle('dark-mode__background--grey1');
    })
    
    albumInfo.forEach(info => {
        info.classList.toggle('dark-mode__text--grey3');
    })
    
    cancelButtons.forEach(greyButton =>{
        greyButton.classList.toggle('dark-mode__background--grey2');
        greyButton.classList.toggle('dark-mode__text--grey5');
    })
    
    const failedMessage = document.querySelector('ul > p');
    if (failedMessage != null){
        failedMessage.classList.toggle('dark-mode__text--grey3');
    }
}

export const handleThemeChange = () => {
    
    const button = document.querySelector('#top > img');
    
    button.addEventListener('click', () => {
        
        let mode = localStorage.getItem("theme");
        if (mode === null || mode === 'lightMode') {
            localStorage.setItem("theme", "darkMode");
            button.src = './src/assets/img/sun.svg';
            toggleTheme();
        } else if (mode == 'darkMode') {
            localStorage.setItem("theme", "lightMode");
            button.src = './src/assets/img/moon.svg';
            toggleTheme();
        }
    })
}

export const savedThemePreference = () => {
    let mode = localStorage.getItem("theme");
    if (mode === "darkMode") {
        toggleTheme();
    }
}