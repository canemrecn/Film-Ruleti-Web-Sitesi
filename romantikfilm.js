const moviePosters = [
    'romantikfilm/1.jpeg',
    'romantikfilm/2.jpeg',
    'romantikfilm/3.jpeg',
    'romantikfilm/4.jpeg',
    'romantikfilm/5.jpeg',
    'romantikfilm/6.jpeg',
    'romantikfilm/7.jpeg',
    'romantikfilm/8.jpeg',
    'romantikfilm/9.jpeg',
    'romantikfilm/10.jpeg',
    'romantikfilm/11.jpeg',
    'romantikfilm/12.jpeg',
    'romantikfilm/13.jpeg',
    'romantikfilm/14.jpeg',
    'romantikfilm/15.jpeg',
    'romantikfilm/16.jpeg',
    'romantikfilm/17.jpeg',
    'romantikfilm/18.jpeg',
    'romantikfilm/19.jpeg',
    'romantikfilm/20.jpeg',
    'romantikfilm/21.jpeg',
    'romantikfilm/22.jpeg',
    'romantikfilm/23.jpeg',
    'romantikfilm/24.jpeg',
    'romantikfilm/25.jpeg',
    'romantikfilm/26.jpeg',
    'romantikfilm/27.jpeg',
    'romantikfilm/28.jpeg',
    'romantikfilm/29.jpeg',
    'romantikfilm/30.jpeg',
    'romantikfilm/31.jpeg',
    'romantikfilm/32.jpeg',
    'romantikfilm/33.jpeg',
    'romantikfilm/34.jpeg',
    'romantikfilm/35.jpeg',
    'romantikfilm/36.jpeg',
    'romantikfilm/37.jpeg',
    'romantikfilm/38.jpeg',
    'romantikfilm/39.jpeg',
    'romantikfilm/40.jpeg',
    'romantikfilm/41.jpeg',
    'romantikfilm/42.jpeg',
    'romantikfilm/43.jpeg',
    'romantikfilm/44.jpeg',
    'romantikfilm/45.jpeg',
    'romantikfilm/46.jpeg',
    'romantikfilm/47.jpeg',
    'romantikfilm/48.jpeg',
    'romantikfilm/49.jpeg',
    'romantikfilm/50.jpeg',
    'romantikfilm/51.jpeg',
    'romantikfilm/52.jpeg',
    'romantikfilm/53.jpeg',
    'romantikfilm/54.jpeg',
    'romantikfilm/55.jpeg',
    'romantikfilm/56.jpeg',
    'romantikfilm/57.jpeg',
    'romantikfilm/58.jpeg',
    'romantikfilm/59.jpeg',
    'romantikfilm/60.jpeg',
    'romantikfilm/61.jpeg',
    'romantikfilm/62.jpeg',
    'romantikfilm/63.jpeg',
    'romantikfilm/64.jpeg',
    'romantikfilm/65.jpeg',
    'romantikfilm/66.jpeg',
    'romantikfilm/67.jpeg',
    'romantikfilm/68.jpeg',
    'romantikfilm/69.jpeg',
    'romantikfilm/70.jpeg',
    'romantikfilm/71.jpeg',
    'romantikfilm/72.jpeg',
    'romantikfilm/73.jpeg',
    'romantikfilm/74.jpeg',
    'romantikfilm/75.jpeg',
    'romantikfilm/76.jpeg',
    'romantikfilm/77.jpeg',
    'romantikfilm/78.jpeg',
    'romantikfilm/79.jpeg',
    'romantikfilm/80.jpeg',
    'romantikfilm/81.jpeg',
    'romantikfilm/82.jpeg',
    'romantikfilm/83.jpeg',
    'romantikfilm/84.jpeg',
    'romantikfilm/85.jpeg',
    'romantikfilm/86.jpeg',
    'romantikfilm/87.jpeg',
    'romantikfilm/88.jpeg',
    'romantikfilm/89.jpeg',
    'romantikfilm/90.jpeg',
    'romantikfilm/91.jpeg',
    'romantikfilm/92.jpeg',
    'romantikfilm/93.jpeg',
    'romantikfilm/94.jpeg',
    'romantikfilm/95.jpeg',
    'romantikfilm/96.jpeg',
    'romantikfilm/97.jpeg',
    'romantikfilm/98.jpeg',
    'romantikfilm/99.jpeg',
    'romantikfilm/100.jpeg',
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