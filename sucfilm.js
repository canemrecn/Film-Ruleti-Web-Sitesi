const moviePosters = [
    'sucfilm/1.jpeg',
    'sucfilm/2.jpeg',
    'sucfilm/3.jpeg',
    'sucfilm/4.jpeg',
    'sucfilm/5.jpeg',
    'sucfilm/6.jpeg',
    'sucfilm/7.jpeg',
    'sucfilm/8.jpeg',
    'sucfilm/9.jpeg',
    'sucfilm/10.jpeg',
    'sucfilm/11.jpeg',
    'sucfilm/12.jpeg',
    'sucfilm/13.jpeg',
    'sucfilm/14.jpeg',
    'sucfilm/15.jpeg',
    'sucfilm/16.jpeg',
    'sucfilm/17.jpeg',
    'sucfilm/18.jpeg',
    'sucfilm/19.jpeg',
    'sucfilm/20.jpeg',
    'sucfilm/21.jpeg',
    'sucfilm/22.jpeg',
    'sucfilm/23.jpeg',
    'sucfilm/24.jpeg',
    'sucfilm/25.jpeg',
    'sucfilm/26.jpeg',
    'sucfilm/27.jpeg',
    'sucfilm/28.jpeg',
    'sucfilm/29.jpeg',
    'sucfilm/30.jpeg',
    'sucfilm/31.jpeg',
    'sucfilm/32.jpeg',
    'sucfilm/33.jpeg',
    'sucfilm/34.jpeg',
    'sucfilm/35.jpeg',
    'sucfilm/36.jpeg',
    'sucfilm/37.jpeg',
    'sucfilm/38.jpeg',
    'sucfilm/39.jpeg',
    'sucfilm/40.jpeg',
    'sucfilm/41.jpeg',
    'sucfilm/42.jpeg',
    'sucfilm/43.jpeg',
    'sucfilm/44.jpeg',
    'sucfilm/45.jpeg',
    'sucfilm/46.jpeg',
    'sucfilm/47.jpeg',
    'sucfilm/48.jpeg',
    'sucfilm/49.jpeg',
    'sucfilm/50.jpeg',
    'sucfilm/51.jpeg',
    'sucfilm/52.jpeg',
    'sucfilm/53.jpeg',
    'sucfilm/54.jpeg',
    'sucfilm/55.jpeg',
    'sucfilm/56.jpeg',
    'sucfilm/57.jpeg',
    'sucfilm/58.jpeg',
    'sucfilm/59.jpeg',
    'sucfilm/60.jpeg',
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