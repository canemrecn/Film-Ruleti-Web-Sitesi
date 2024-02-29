const moviePosters = [
    'savasfilm/1.jpeg',
    'savasfilm/2.jpeg',
    'savasfilm/3.jpeg',
    'savasfilm/4.jpeg',
    'savasfilm/5.jpeg',
    'savasfilm/6.jpeg',
    'savasfilm/7.jpeg',
    'savasfilm/8.jpeg',
    'savasfilm/9.jpeg',
    'savasfilm/10.jpeg',
    'savasfilm/11.jpeg',
    'savasfilm/12.jpeg',
    'savasfilm/13.jpeg',
    'savasfilm/14.jpeg',
    'savasfilm/15.jpeg',
    'savasfilm/16.jpeg',
    'savasfilm/17.jpeg',
    'savasfilm/18.jpeg',
    'savasfilm/19.jpeg',
    'savasfilm/20.jpeg',
    'savasfilm/21.jpeg',
    'savasfilm/22.jpeg',
    'savasfilm/23.jpeg',
    'savasfilm/24.jpeg',
    'savasfilm/25.jpeg',
    'savasfilm/26.jpeg',
    'savasfilm/27.jpeg',
    'savasfilm/28.jpeg',
    'savasfilm/29.jpeg',
    'savasfilm/30.jpeg',
    'savasfilm/31.jpeg',
    'savasfilm/32.jpeg',
    'savasfilm/33.jpeg',
    'savasfilm/34.jpeg',
    'savasfilm/35.jpeg',
    'savasfilm/36.jpeg',
    'savasfilm/37.jpeg',
    'savasfilm/38.jpeg',
    'savasfilm/39.jpeg',
    'savasfilm/40.jpeg',
    'savasfilm/41.jpeg',
    'savasfilm/42.jpeg',
    'savasfilm/43.jpeg',
    'savasfilm/44.jpeg',
    'savasfilm/45.jpeg',
    'savasfilm/46.jpeg',
    'savasfilm/47.jpeg',
    'savasfilm/48.jpeg',
    'savasfilm/49.jpeg',
    'savasfilm/50.jpeg',
    'savasfilm/51.jpeg',
    'savasfilm/52.jpeg',
    'savasfilm/53.jpeg',
    'savasfilm/54.jpeg',
    'savasfilm/55.jpeg',
    'savasfilm/56.jpeg',
    'savasfilm/57.jpeg',
    'savasfilm/58.jpeg',
    'savasfilm/59.jpeg',
    'savasfilm/60.jpeg',
    'savasfilm/61.jpeg',
    'savasfilm/62.jpeg',
    'savasfilm/63.jpeg',
    'savasfilm/64.jpeg',
    'savasfilm/65.jpeg',
    'savasfilm/66.jpeg',
    'savasfilm/67.jpeg',
    'savasfilm/68.jpeg',
    'savasfilm/69.jpeg',
    'savasfilm/70.jpeg',
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