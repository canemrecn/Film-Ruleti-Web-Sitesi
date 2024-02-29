const moviePosters = [
    'dramfilm/1.jpeg',
    'dramfilm/2.jpeg',
    'dramfilm/3.jpeg',
    'dramfilm/4.jpeg',
    'dramfilm/5.jpeg',
    'dramfilm/6.jpeg',
    'dramfilm/7.jpeg',
    'dramfilm/8.jpeg',
    'dramfilm/9.jpeg',
    'dramfilm/10.jpeg',
    'dramfilm/11.jpeg',
    'dramfilm/12.jpeg',
    'dramfilm/13.jpeg',
    'dramfilm/14.jpeg',
    'dramfilm/15.jpeg',
    'dramfilm/16.jpeg',
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