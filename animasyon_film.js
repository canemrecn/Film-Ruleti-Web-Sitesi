const moviePosters = [
    'animasyonfilm/1.jpeg',
    'animasyonfilm/2.jpeg',
    'animasyonfilm/3.jpeg',
    'animasyonfilm/4.jpeg',
    'animasyonfilm/5.jpeg',
    'animasyonfilm/6.jpeg',
    'animasyonfilm/7.jpeg',
    'animasyonfilm/8.jpeg',
    'animasyonfilm/9.jpeg',
    'animasyonfilm/10.jpeg',
    'animasyonfilm/11.jpeg',
    'animasyonfilm/12.jpeg',
    'animasyonfilm/13.jpeg',
    'animasyonfilm/14.jpeg',
    'animasyonfilm/15.jpeg',
    'animasyonfilm/16.jpeg',
    'animasyonfilm/17.jpeg',
    'animasyonfilm/18.jpeg',
    'animasyonfilm/19.jpeg',
    'animasyonfilm/20.jpeg',
    'animasyonfilm/21.jpeg',
    'animasyonfilm/22.jpeg',
    'animasyonfilm/23.jpeg',
    'animasyonfilm/24.jpeg',
    'animasyonfilm/25.jpeg',
    'animasyonfilm/26.jpeg',
    'animasyonfilm/27.jpeg',
    'animasyonfilm/28.jpeg',
    'animasyonfilm/29.jpeg',
    'animasyonfilm/30.jpeg',
    'animasyonfilm/31.jpeg',
    'animasyonfilm/32.jpeg',
    'animasyonfilm/33.jpeg',
    'animasyonfilm/34.jpeg',
    'animasyonfilm/35.jpeg',
    'animasyonfilm/36.jpeg',
    'animasyonfilm/37.jpeg',
    'animasyonfilm/38.jpeg',
    'animasyonfilm/39.jpeg',
    'animasyonfilm/40.jpeg',
    'animasyonfilm/41.jpeg',
    'animasyonfilm/42.jpeg',
    'animasyonfilm/43.jpeg',
    'animasyonfilm/44.jpeg',
    'animasyonfilm/45.jpeg',
    'animasyonfilm/46.jpeg',
    'animasyonfilm/47.jpeg',
    'animasyonfilm/48.jpeg',
    'animasyonfilm/49.jpeg',
    'animasyonfilm/50.jpeg',
    'animasyonfilm/51.jpeg',
    'animasyonfilm/52.jpeg',
    'animasyonfilm/53.jpeg',
    'animasyonfilm/54.jpeg',
    'animasyonfilm/55.jpeg',
    'animasyonfilm/56.jpeg',
    'animasyonfilm/57.jpeg',
    'animasyonfilm/58.jpeg',
    'animasyonfilm/59.jpeg',
    'animasyonfilm/60.jpeg',
    'animasyonfilm/61.jpeg',
    'animasyonfilm/62.jpeg',
    'animasyonfilm/63.jpeg',
    'animasyonfilm/64.jpeg',
    'animasyonfilm/65.jpeg',
    'animasyonfilm/66.jpeg',
    'animasyonfilm/67.jpeg',
    'animasyonfilm/68.jpeg',
    'animasyonfilm/69.jpeg',
    'animasyonfilm/70.jpeg',
    'animasyonfilm/71.jpeg',
    'animasyonfilm/72.jpeg',
    'animasyonfilm/73.jpeg',
    'animasyonfilm/74.jpeg',
    'animasyonfilm/75.jpeg',
    'animasyonfilm/76.jpeg',
    'animasyonfilm/77.jpeg',
    'animasyonfilm/78.jpeg',
    'animasyonfilm/79.jpeg',
    'animasyonfilm/80.jpeg',
    'animasyonfilm/81.jpeg',
    'animasyonfilm/82.jpeg',
    'animasyonfilm/83.jpeg',
    'animasyonfilm/84.jpeg',
    'animasyonfilm/85.jpeg',
    'animasyonfilm/86.jpeg',
    'animasyonfilm/87.jpeg',
    'animasyonfilm/88.jpeg',
    'animasyonfilm/89.jpeg',
    'animasyonfilm/90.jpeg',
    'animasyonfilm/91.jpeg',
    'animasyonfilm/92.jpeg',
    'animasyonfilm/93.jpeg',
    'animasyonfilm/94.jpeg',
    'animasyonfilm/95.jpeg',
    'animasyonfilm/96.jpeg',
    'animasyonfilm/97.jpeg',
    'animasyonfilm/98.jpeg',
    'animasyonfilm/99.jpeg',
    'animasyonfilm/100.jpeg',
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