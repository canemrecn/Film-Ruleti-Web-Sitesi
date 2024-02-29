const moviePosters = [
    'fantastikfilm/1.jpeg',
    'fantastikfilm/2.jpeg',
    'fantastikfilm/3.jpeg',
    'fantastikfilm/4.jpeg',
    'fantastikfilm/5.jpeg',
    'fantastikfilm/6.jpeg',
    'fantastikfilm/7.jpeg',
    'fantastikfilm/8.jpeg',
    'fantastikfilm/9.jpeg',
    'fantastikfilm/10.jpeg',
    'fantastikfilm/11.jpeg',
    'fantastikfilm/12.jpeg',
    'fantastikfilm/13.jpeg',
    'fantastikfilm/14.jpeg',
    'fantastikfilm/15.jpeg',
    'fantastikfilm/16.jpeg',
    'fantastikfilm/17.jpeg',
    'fantastikfilm/18.jpeg',
    'fantastikfilm/19.jpeg',
    'fantastikfilm/20.jpeg',
    'fantastikfilm/21.jpeg',
    'fantastikfilm/22.jpeg',
    'fantastikfilm/23.jpeg',
    'fantastikfilm/24.jpeg',
    'fantastikfilm/25.jpeg',
    'fantastikfilm/26.jpeg',
    'fantastikfilm/27.jpeg',
    'fantastikfilm/28.jpeg',
    'fantastikfilm/29.jpeg',
    'fantastikfilm/30.jpeg',
    'fantastikfilm/31.jpeg',
    'fantastikfilm/32.jpeg',
    'fantastikfilm/33.jpeg',
    'fantastikfilm/34.jpeg',
    'fantastikfilm/35.jpeg',
    'fantastikfilm/36.jpeg',
    'fantastikfilm/37.jpeg',
    'fantastikfilm/38.jpeg',
    'fantastikfilm/39.jpeg',
    'fantastikfilm/40.jpeg',
    'fantastikfilm/41.jpeg',
    'fantastikfilm/42.jpeg',
    'fantastikfilm/43.jpeg',
    'fantastikfilm/44.jpeg',
    'fantastikfilm/45.jpeg',
    'fantastikfilm/46.jpeg',
];


const showPosterButton = document.getElementById('showPosterButton');
const posterContainer = document.getElementById('posterContainer');
const moviePoster = document.getElementById('moviePoster');

showPosterButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * moviePosters.length);
    const randomPoster = moviePosters[randomIndex];
    
    moviePoster.src = randomPoster;
    posterContainer.style.display = 'block';
    
    showPosterButton.style.display = 'none';
});
// Dropdown menüyü göster/gizle
function toggleDropdown() {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

// Dropdown menüye tıklandığında toggleDropdown fonksiyonunu çağır
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.nav-link.dropdown-toggle').addEventListener('click', toggleDropdown);
});