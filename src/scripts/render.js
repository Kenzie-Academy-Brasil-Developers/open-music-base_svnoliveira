
export const renderFilters = (list) => {
    const cardContainer = document.querySelector("#genre-filter > ul");
    cardContainer.innerHTML = '';

    list.forEach(category => {
        const card = document.createElement('li');
        card.innerText = `${category}`;
        cardContainer.appendChild(card);

        let mode = localStorage.getItem("theme");

        if (mode === 'darkMode') {
            const icon = document.querySelector('#top > img');
            icon.src = './src/assets/img/sun.svg';
            card.classList.toggle('dark-mode__filter-button');
            if (card.classList.contains('filter__selected') || card.classList.contains('dark-mode__selected')){
                card.classList.toggle('dark-mode__selected');
                card.classList.toggle('filter__selected');
            }
        }
    });
}

export const renderCards = (list) => {

    const cardContainer = document.querySelector('#album-display > ul');
    cardContainer.innerHTML = '';
    if (list.length === 0){
        const failedMessage = document.createElement('p');
        failedMessage.innerText = 'Nenhum album encontrado';
        failedMessage.classList.add('text--light');
        cardContainer.appendChild(failedMessage);
        return
    }
    
    list.forEach(album => {
        const card = document.createElement('li');
        const albumImage = document.createElement('img');
        const textContainer = document.createElement('div');
        const displayInfoContainer = document.createElement('div');
        const bandName = document.createElement('span');
        const year = document.createElement('span');
        const albumTitle = document.createElement('h2');
        const priceContainer = document.createElement('div');
        const albumPrice = document.createElement('span');
        const button = document.createElement('button');
        
        card.classList.add('display__album-card');
        albumImage.src = `${album.img}`;
        albumImage.alt = `${album.title} cover image`;
        displayInfoContainer.classList.add('display__information-container');
        bandName.classList.add('text--small');
        year.classList.add('text--small');
        albumTitle.classList.add('text--normal');
        priceContainer.classList.add('display__price-container');
        albumPrice.classList.add('text--normal');
        button.classList.add('text--light');
        
        bandName.innerText = (`${album.band}`);
        year.innerText = (`${album.year}`);
        albumTitle.innerText = (`${album.title}`);
        albumPrice.innerText = (`R$ ${album.price.toFixed(2)}`);
        button.innerText = 'Comprar';

        cardContainer.appendChild(card);
        card.appendChild(albumImage);
        card.appendChild(textContainer);
        textContainer.appendChild(displayInfoContainer);
        textContainer.appendChild(albumTitle);
        textContainer.appendChild(priceContainer);
        displayInfoContainer.appendChild(bandName);
        displayInfoContainer.appendChild(year);
        priceContainer.appendChild(albumPrice);
        priceContainer.appendChild(button);

        let mode = localStorage.getItem("theme");
        if (mode === 'darkMode') {
                textContainer.classList.toggle('dark-mode__background--grey1');
                bandName.classList.toggle('dark-mode__text--grey3');
                year.classList.toggle('dark-mode__text--grey3');
                button.classList.toggle('dark-mode__background--grey2');
                button.classList.toggle('dark-mode__text--grey5');
        }
    });
}