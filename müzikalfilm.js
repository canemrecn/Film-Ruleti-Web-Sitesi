const moviePosters = [
    'müzikalfilm/1.jpeg',
    'müzikalfilm/2.jpeg',
    'müzikalfilm/3.jpeg',
    'müzikalfilm/4.jpeg',
    'müzikalfilm/5.jpeg',
    'müzikalfilm/6.jpeg',
    'müzikalfilm/7.jpeg',
    'müzikalfilm/8.jpeg',
    'müzikalfilm/9.jpeg',
    'müzikalfilm/10.jpeg',
    'müzikalfilm/11.jpeg',
    'müzikalfilm/12.jpeg',
    'müzikalfilm/13.jpeg',
    'müzikalfilm/14.jpeg',
    'müzikalfilm/15.jpeg',
    'müzikalfilm/16.jpeg',
    'müzikalfilm/17.jpeg',
    'müzikalfilm/18.jpeg',
    'müzikalfilm/19.jpeg',
    'müzikalfilm/20.jpeg',
    'müzikalfilm/21.jpeg',
    'müzikalfilm/22.jpeg',
    'müzikalfilm/23.jpeg',
    'müzikalfilm/24.jpeg',
    'müzikalfilm/25.jpeg',
    'müzikalfilm/26.jpeg',
    'müzikalfilm/27.jpeg',
    'müzikalfilm/28.jpeg',
    'müzikalfilm/29.jpeg',
    'müzikalfilm/30.jpeg',
    'müzikalfilm/31.jpeg',
    'müzikalfilm/32.jpeg',
    'müzikalfilm/33.jpeg',
    'müzikalfilm/34.jpeg',
    'müzikalfilm/35.jpeg',
    'müzikalfilm/36.jpeg',
    'müzikalfilm/37.jpeg',
    'müzikalfilm/38.jpeg',
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