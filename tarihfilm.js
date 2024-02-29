const moviePosters = [
    'tarihfilm/1.jpeg',
    'tarihfilm/2.jpeg',
    'tarihfilm/3.jpeg',
    'tarihfilm/4.jpeg',
    'tarihfilm/5.jpeg',
    'tarihfilm/6.jpeg',
    'tarihfilm/7.jpeg',
    'tarihfilm/8.jpeg',
    'tarihfilm/9.jpeg',
    'tarihfilm/10.jpeg',
    'tarihfilm/11.jpeg',
    'tarihfilm/12.jpeg',
    'tarihfilm/13.jpeg',
    'tarihfilm/14.jpeg',
    'tarihfilm/15.jpeg',
    'tarihfilm/16.jpeg',
    'tarihfilm/17.jpeg',
    'tarihfilm/18.jpeg',
    'tarihfilm/19.jpeg',
    'tarihfilm/20.jpeg',
    'tarihfilm/21.jpeg',
    'tarihfilm/22.jpeg',
    'tarihfilm/23.jpeg',
    'tarihfilm/24.jpeg',
    'tarihfilm/25.jpeg',
    'tarihfilm/26.jpeg',
    'tarihfilm/27.jpeg',
    'tarihfilm/28.jpeg',
    'tarihfilm/29.jpeg',
    'tarihfilm/30.jpeg',
    'tarihfilm/31.jpeg',
    'tarihfilm/32.jpeg',
    'tarihfilm/33.jpeg',
    'tarihfilm/34.jpeg',
    'tarihfilm/35.jpeg',
    'tarihfilm/36.jpeg',
    'tarihfilm/37.jpeg',
    'tarihfilm/38.jpeg',
    'tarihfilm/39.jpeg',
    'tarihfilm/40.jpeg',
    'tarihfilm/41.jpeg',
    'tarihfilm/42.jpeg',
    'tarihfilm/43.jpeg',
    'tarihfilm/44.jpeg',
    'tarihfilm/45.jpeg',
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