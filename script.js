const moviePosters = [
    'afişler/1.jpeg',
    'afişler/2.jpeg',
    'afişler/3.jpeg',
    'afişler/4.jpeg',
    'afişler/5.jpeg',
    'afişler/6.jpeg',
    'afişler/7.jpeg',
    'afişler/8.jpeg',
    'afişler/9.jpeg',
    'afişler/10.jpeg',
    'afişler/11.jpeg',
    'afişler/12.jpeg',
    'afişler/13.jpeg',
    'afişler/14.jpeg',
    'afişler/15.jpeg',
    'afişler/16.jpeg',
    'afişler/17.jpeg',
    'afişler/18.jpeg',
    'afişler/19.jpeg',
    'afişler/20.jpeg',
    'afişler/21.jpeg',
    'afişler/22.jpeg',
    'afişler/23.jpeg',
    'afişler/24.jpeg',
    'afişler/25.jpeg',
    'afişler/26.jpeg',
    'afişler/27.jpeg',
    'afişler/28.jpeg',
    'afişler/29.jpeg',
    'afişler/30.jpeg',
    'afişler/31.jpeg',
    'afişler/32.jpeg',
    'afişler/33.jpeg',
    'afişler/34.jpeg',
    'afişler/35.jpeg',
    'afişler/36.jpeg',
    'afişler/37.jpeg',
    'afişler/38.jpeg',
    'afişler/39.jpeg',
    'afişler/40.jpeg',
    'afişler/41.jpeg',
    'afişler/42.jpeg',
    'afişler/43.jpeg',
    'afişler/44.jpeg',
    'afişler/45.jpeg',
    'afişler/46.jpeg',
    'afişler/47.jpeg',
    'afişler/48.jpeg',
    'afişler/49.jpeg',
    'afişler/50.jpeg',
    'afişler/51.jpeg',
    'afişler/52.jpeg',
    'afişler/53.jpeg',
    'afişler/54.jpeg',
    'afişler/55.jpeg',
    'afişler/56.jpeg',
    'afişler/57.jpeg',
    'afişler/58.jpeg',
    'afişler/59.jpeg',
    'afişler/60.jpeg',
    'afişler/61.jpeg',
    'afişler/62.jpeg',
    'afişler/63.jpeg',
    'afişler/64.jpeg',
    'afişler/65.jpeg',
    'afişler/66.jpeg',
    'afişler/67.jpeg',
    'afişler/68.jpeg',
    'afişler/69.jpeg',
    'afişler/70.jpeg',
    'afişler/71.jpeg',
    'afişler/72.jpeg',
    'afişler/73.jpeg',
    'afişler/74.jpeg',
    'afişler/75.jpeg',
    'afişler/76.jpeg',
    'afişler/77.jpeg',
    'afişler/78.jpeg',
    'afişler/79.jpeg',
    'afişler/80.jpeg',
    'afişler/81.jpeg',
    'afişler/82.jpeg',
    'afişler/83.jpeg',
    'afişler/84.jpeg',
    'afişler/85.jpeg',
    'afişler/86.jpeg',
    'afişler/87.jpeg',
    'afişler/88.jpeg',
    'afişler/89.jpeg',
    'afişler/90.jpeg',
    'afişler/91.jpeg',
    'afişler/92.jpeg',
    'afişler/93.jpeg',
    'afişler/94.jpeg',
    'afişler/95.jpeg',
    'afişler/96.jpeg',
    'afişler/97.jpeg',
    'afişler/98.jpeg',
    'afişler/99.jpeg',
    'afişler/100.jpeg',
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