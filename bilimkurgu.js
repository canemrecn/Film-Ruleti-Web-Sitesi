const moviePosters = [
    'bilimkurgu/1.jpeg',
    'bilimkurgu/2.jpeg',
    'bilimkurgu/3.jpeg',
    'bilimkurgu/4.jpeg',
    'bilimkurgu/5.jpeg',
    'bilimkurgu/6.jpeg',
    'bilimkurgu/7.jpeg',
    'bilimkurgu/8.jpeg',
    'bilimkurgu/9.jpeg',
    'bilimkurgu/10.jpeg',
    'bilimkurgu/11.jpeg',
    'bilimkurgu/12.jpeg',
    'bilimkurgu/13.jpeg',
    'bilimkurgu/14.jpeg',
    'bilimkurgu/15.jpeg',
    'bilimkurgu/16.jpeg',
    'bilimkurgu/17.jpeg',
    'bilimkurgu/18.jpeg',
    'bilimkurgu/19.jpeg',
    'bilimkurgu/20.jpeg',
    'bilimkurgu/21.jpeg',
    'bilimkurgu/22.jpeg',
    'bilimkurgu/23.jpeg',
    'bilimkurgu/24.jpeg',
    'bilimkurgu/25.jpeg',
    'bilimkurgu/26.jpeg',
    'bilimkurgu/27.jpeg',
    'bilimkurgu/28.jpeg',
    'bilimkurgu/29.jpeg',
    'bilimkurgu/30.jpeg',
    'bilimkurgu/31.jpeg',
    'bilimkurgu/32.jpeg',
    'bilimkurgu/33.jpeg',
    'bilimkurgu/34.jpeg',
    'bilimkurgu/35.jpeg',
    'bilimkurgu/36.jpeg',
    'bilimkurgu/37.jpeg',
    'bilimkurgu/38.jpeg',
    'bilimkurgu/39.jpeg',
    'bilimkurgu/40.jpeg',
    'bilimkurgu/41.jpeg',
    'bilimkurgu/42.jpeg',
    'bilimkurgu/43.jpeg',
    'bilimkurgu/44.jpeg',
    'bilimkurgu/45.jpeg',
    'bilimkurgu/46.jpeg',
    'bilimkurgu/47.jpeg',
    'bilimkurgu/48.jpeg',
    'bilimkurgu/49.jpeg',
    'bilimkurgu/50.jpeg',
    'bilimkurgu/51.jpeg',
    'bilimkurgu/52.jpeg',
    'bilimkurgu/53.jpeg',
    'bilimkurgu/54.jpeg',
    'bilimkurgu/55.jpeg',
    'bilimkurgu/56.jpeg',
    'bilimkurgu/57.jpeg',
    'bilimkurgu/58.jpeg',
    'bilimkurgu/59.jpeg',
    'bilimkurgu/60.jpeg',
    'bilimkurgu/61.jpeg',
    'bilimkurgu/62.jpeg',
    'bilimkurgu/63.jpeg',
    'bilimkurgu/64.jpeg',
    'bilimkurgu/65.jpeg',
    'bilimkurgu/66.jpeg',
    'bilimkurgu/67.jpeg',
    'bilimkurgu/68.jpeg',
    'bilimkurgu/69.jpeg',
    'bilimkurgu/70.jpeg',
    'bilimkurgu/71.jpeg',
    'bilimkurgu/72.jpeg',
    'bilimkurgu/73.jpeg',
    'bilimkurgu/74.jpeg',
    'bilimkurgu/75.jpeg',
    'bilimkurgu/76.jpeg',
    'bilimkurgu/77.jpeg',
    'bilimkurgu/78.jpeg',
    'bilimkurgu/79.jpeg',
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