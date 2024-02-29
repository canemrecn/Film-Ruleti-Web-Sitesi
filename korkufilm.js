const moviePosters = [
    'korkufilm/1.jpeg',
    'korkufilm/2.jpeg',
    'korkufilm/3.jpeg',
    'korkufilm/4.jpeg',
    'korkufilm/5.jpeg',
    'korkufilm/6.jpeg',
    'korkufilm/7.jpeg',
    'korkufilm/8.jpeg',
    'korkufilm/9.jpeg',
    'korkufilm/10.jpeg',
    'korkufilm/11.jpeg',
    'korkufilm/12.jpeg',
    'korkufilm/13.jpeg',
    'korkufilm/14.jpeg',
    'korkufilm/15.jpeg',
    'korkufilm/16.jpeg',
    'korkufilm/17.jpeg',
    'korkufilm/18.jpeg',
    'korkufilm/19.jpeg',
    'korkufilm/20.jpeg',
    'korkufilm/21.jpeg',
    'korkufilm/22.jpeg',
    'korkufilm/23.jpeg',
    'korkufilm/24.jpeg',
    'korkufilm/25.jpeg',
    'korkufilm/26.jpeg',
    'korkufilm/27.jpeg',
    'korkufilm/28.jpeg',
    'korkufilm/29.jpeg',
    'korkufilm/30.jpeg',
    'korkufilm/31.jpeg',
    'korkufilm/32.jpeg',
    'korkufilm/33.jpeg',
    'korkufilm/34.jpeg',
    'korkufilm/35.jpeg',
    'korkufilm/36.jpeg',
    'korkufilm/37.jpeg',
    'korkufilm/38.jpeg',
    'korkufilm/39.jpeg',
    'korkufilm/40.jpeg',
    'korkufilm/41.jpeg',
    'korkufilm/42.jpeg',
    'korkufilm/43.jpeg',
    'korkufilm/44.jpeg',
    'korkufilm/45.jpeg',
    'korkufilm/46.jpeg',
    'korkufilm/47.jpeg',
    'korkufilm/48.jpeg',
    'korkufilm/49.jpeg',
    'korkufilm/50.jpeg',
    'korkufilm/51.jpeg',
    'korkufilm/52.jpeg',
    'korkufilm/53.jpeg',
    'korkufilm/54.jpeg',
    'korkufilm/55.jpeg',
    'korkufilm/56.jpeg',
    'korkufilm/57.jpeg',
    'korkufilm/58.jpeg',
    'korkufilm/59.jpeg',
    'korkufilm/60.jpeg',
    'korkufilm/61.jpeg',
    'korkufilm/62.jpeg',
    'korkufilm/63.jpeg',
    'korkufilm/64.jpeg',
    'korkufilm/65.jpeg',
    'korkufilm/66.jpeg',
    'korkufilm/67.jpeg',
    'korkufilm/68.jpeg',
    'korkufilm/69.jpeg',
    'korkufilm/70.jpeg',
    'korkufilm/71.jpeg',
    'korkufilm/72.jpeg',
    'korkufilm/73.jpeg',
    'korkufilm/74.jpeg',
    'korkufilm/75.jpeg',
    'korkufilm/76.jpeg',
    'korkufilm/77.jpeg',
    'korkufilm/78.jpeg',
    'korkufilm/79.jpeg',
    'korkufilm/80.jpeg',
    'korkufilm/81.jpeg',
    'korkufilm/82.jpeg',
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