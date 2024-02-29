const moviePosters = [
    'gizemfilm/1.jpeg',
    'gizemfilm/2.jpeg',
    'gizemfilm/3.jpeg',
    'gizemfilm/4.jpeg',
    'gizemfilm/5.jpeg',
    'gizemfilm/6.jpeg',
    'gizemfilm/7.jpeg',
    'gizemfilm/8.jpeg',
    'gizemfilm/9.jpeg',
    'gizemfilm/10.jpeg',
    'gizemfilm/11.jpeg',
    'gizemfilm/12.jpeg',
    'gizemfilm/13.jpeg',
    'gizemfilm/14.jpeg',
    'gizemfilm/15.jpeg',
    'gizemfilm/16.jpeg',
    'gizemfilm/17.jpeg',
    'gizemfilm/18.jpeg',
    'gizemfilm/19.jpeg',
    'gizemfilm/20.jpeg',
    'gizemfilm/21.jpeg',
    'gizemfilm/22.jpeg',
    'gizemfilm/23.jpeg',
    'gizemfilm/24.jpeg',
    'gizemfilm/25.jpeg',
    'gizemfilm/26.jpeg',
    'gizemfilm/27.jpeg',
    'gizemfilm/28.jpeg',
    'gizemfilm/29.jpeg',
    'gizemfilm/30.jpeg',
    'gizemfilm/31.jpeg',
    'gizemfilm/32.jpeg',
    'gizemfilm/33.jpeg',
    'gizemfilm/35.jpeg',
    'gizemfilm/36.jpeg',
    'gizemfilm/37.jpeg',
    'gizemfilm/38.jpeg',
    'gizemfilm/39.jpeg',
    'gizemfilm/40.jpeg',
    'gizemfilm/41.jpeg',
    'gizemfilm/42.jpeg',
    'gizemfilm/43.jpeg',
    'gizemfilm/44.jpeg',
    'gizemfilm/45.jpeg',
    'gizemfilm/46.jpeg',
    'gizemfilm/47.jpeg',
    'gizemfilm/48.jpeg',
    'gizemfilm/49.jpeg',
    'gizemfilm/50.jpeg',
    'gizemfilm/51.jpeg',
    'gizemfilm/52.jpeg',
    'gizemfilm/53.jpeg',
    'gizemfilm/54.jpeg',
    'gizemfilm/55.jpeg',
    'gizemfilm/56.jpeg',
    'gizemfilm/57.jpeg',
    'gizemfilm/58.jpeg',
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