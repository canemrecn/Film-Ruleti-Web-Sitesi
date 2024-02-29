const moviePosters = [
    'aksiyonfilm/1.jpeg',
    'aksiyonfilm/2.jpeg',
    'aksiyonfilm/3.jpeg',
    'aksiyonfilm/4.jpeg',
    'aksiyonfilm/5.jpeg',
    'aksiyonfilm/6.jpeg',
    'aksiyonfilm/7.jpeg',
    'aksiyonfilm/8.jpeg',
    'aksiyonfilm/9.jpeg',
    'aksiyonfilm/10.jpeg',
    'aksiyonfilm/11.jpeg',
    'aksiyonfilm/12.jpeg',
    'aksiyonfilm/13.jpeg',
    'aksiyonfilm/14.jpeg',
    'aksiyonfilm/15.jpeg',
    'aksiyonfilm/16.jpeg',
    'aksiyonfilm/17.jpeg',
    'aksiyonfilm/18.jpeg',
    'aksiyonfilm/19.jpeg',
    'aksiyonfilm/20.jpeg',
    'aksiyonfilm/21.jpeg',
    'aksiyonfilm/22.jpeg',
    'aksiyonfilm/23.jpeg',
    'aksiyonfilm/24.jpeg',
    'aksiyonfilm/25.jpeg',
    'aksiyonfilm/26.jpeg',
    'aksiyonfilm/27.jpeg',
    'aksiyonfilm/28.jpeg',
    'aksiyonfilm/29.jpeg',
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