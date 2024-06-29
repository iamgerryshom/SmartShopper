const heroSection = document.querySelector('.hero-section');
const overlay = document.querySelector('.overlay');
const errorContainer = document.querySelector('.error-message');

document.addEventListener('DOMContentLoaded', () => {
    updateOverlayDynamically();
})

window.addEventListener('resize', () => {
    updateOverlayDynamically();
})

window.addEventListener('scroll', () => {
    const heroHeaderText = document.querySelector('.hero-section div.hero-content h1.header');
    const header = document.querySelector('header');

    const headerBottom = header.getBoundingClientRect().bottom;
    const heroHeaderTextTop = heroHeaderText.getBoundingClientRect().top;

    const diff = headerBottom - heroHeaderTextTop;
    console.log(diff)

    if (diff > -65 && diff < 300) {
        const blurValue = diff / 65;
        header.style.backgroundColor = `rgba(3, 3, 3, ${blurValue / 10})`;
        header.style.backdropFilter = `blur(${blurValue}px)`;
    }

})


beginSearch();

function beginSearch() {

    const spinner = document.querySelector('.spinner');
    const sectionHeader = document.querySelector('.section-header');

    const searchBtn = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', () => {
        spinner.style.display = 'flex';
        sectionHeader.style.display = 'block';
        errorContainer.style.display = 'none';

        sectionHeader.textContent = 'Searching for ' + searchInput.value;

        setTimeout(() => {

            /*sectionHeader.textContent = 'This is what we could find!'; */

            sectionHeader.textContent = 'Uhhhhhhhh!';


            showError();
            spinner.style.display = 'none';
        }, 2000);
        
    })
}

function showError() {
    errorContainer.style.display = 'block';
}

function populateProducts() {
    const resultsContainer = document.querySelector('.results-container');

    for (let i = 0; i < 10; i++) {
        const product = document.createElement('div');

        product.innerHTML = `
        <div class="product-item">

            <div class="image-content">
                    <img src="https://img.freepik.com/free-photo/refrigerator-surrounded-by-nature-scene_23-2150165603.jpg?t=st=1719512995~exp=1719516595~hmac=200ec3fc400757d126440b2c134b1bee4950df196429e308e10ab0042b6e02b2&w=826"
                        class="image">
                </div>
                
            <div class="header-content">

                <h3 class="title">Rare mini fridge</h3>
                <h3 class="price">@kes 1200</h3>

            </div>

            <p class="business">Naivas Supermarket</p>

        </div>
        `;

        resultsContainer.appendChild(product);
    }
}


function updateOverlayDynamically() {
    const heroSectionHeight = heroSection.clientHeight;
    overlay.style.height = `${heroSectionHeight}px`;

}


