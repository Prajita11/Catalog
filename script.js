//nav
// script.js

const toggleDropdown = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
};

window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-trigger')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});



window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-trigger')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});




// Fetch data from the API 
async function fetchNews() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json');
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        return data.news;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

window.onload = async function() {
    const newsSection = document.querySelector('.news .cards');

    try {
        const news = await fetchNews();
        let newsHTML = '';

        news.forEach(article => {
            const articleHTML = `
                <div class="card">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="card-content">
                        <h5>${article.title}</h5>
                        <p>${article.content}</p>
                        <a href="${article.link}" target="_blank">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
            newsHTML += articleHTML;
        });

        newsSection.innerHTML = newsHTML;
    } catch (error) {
        console.error('Error displaying news:', error);
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');

    let counter = 0;
    const itemWidth = carouselItems[0].offsetWidth + 20; // Adjusting for margin (10px on each side)

    nextBtn.addEventListener('click', () => {
        if (counter < carouselItems.length - 1) {
            counter++;
            carousel.style.transition = 'transform 0.4s ease-in-out';
            carousel.style.transform = `translateX(${-itemWidth * counter}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carousel.style.transition = 'transform 0.4s ease-in-out';
            carousel.style.transform = `translateX(${-itemWidth * counter}px)`;
        }
    });
});

// Function to alert when "Why Catalog" button is clicked
function alertWhyCatalog() {
    alert('Why Catalog button clicked!');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-trigger')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// script.js
function showSearchBox() {
    const searchBox = document.getElementById('search-box');
    searchBox.classList.add('show');
}

function hideSearchBox() {
    const searchBox = document.getElementById('search-box');
    searchBox.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.getElementById('search-box');
    const closeBtn = document.querySelector('.search-box .close');

    searchIcon.addEventListener('click', () => {
        searchBox.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        searchBox.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == searchBox) {
            searchBox.style.display = 'none';
        }
    });
});

function handleSearchSubmit(event) {
    event.preventDefault(); 
    searchBox.style.display = 'none'; 
    window.location.href = '#'; 
    return false;
}


