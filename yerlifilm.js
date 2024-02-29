const moviePosters = [
    'yerlifilm/1.jpeg',
    'yerlifilm/2.jpeg',
    'yerlifilm/3.jpeg',
    'yerlifilm/4.jpeg',
    'yerlifilm/5.jpeg',
    'yerlifilm/6.jpeg',
    'yerlifilm/7.jpeg',
    'yerlifilm/8.jpeg',
    'yerlifilm/9.jpeg',
    'yerlifilm/10.jpeg',
    'yerlifilm/11.jpeg',
    'yerlifilm/12.jpeg',
    'yerlifilm/13.jpeg',
    'yerlifilm/14.jpeg',
    'yerlifilm/15.jpeg',
    'yerlifilm/16.jpeg',
    'yerlifilm/17.jpeg',
    'yerlifilm/18.jpeg',
    'yerlifilm/19.jpeg',
    'yerlifilm/20.jpeg',
    'yerlifilm/21.jpeg',
    'yerlifilm/22.jpeg',
    'yerlifilm/23.jpeg',
    'yerlifilm/24.jpeg',
    'yerlifilm/25.jpeg',
    'yerlifilm/26.jpeg',
    'yerlifilm/27.jpeg',
    'yerlifilm/28.jpeg',
    'yerlifilm/29.jpeg',
    'yerlifilm/30.jpeg',
    'yerlifilm/31.jpeg',
    'yerlifilm/32.jpeg',
    'yerlifilm/33.jpeg',
    'yerlifilm/34.jpeg',
    'yerlifilm/35.jpeg',
    'yerlifilm/36.jpeg',
    'yerlifilm/37.jpeg',
    'yerlifilm/38.jpeg',
    'yerlifilm/39.jpeg',
    'yerlifilm/40.jpeg',
    'yerlifilm/41.jpeg',
    'yerlifilm/42.jpeg',
    'yerlifilm/43.jpeg',
    'yerlifilm/44.jpeg',
    'yerlifilm/45.jpeg',
    'yerlifilm/46.jpeg',
    'yerlifilm/47.jpeg',
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