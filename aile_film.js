const moviePosters = [
    'ailefilm/1.jpeg',
    'ailefilm/2.jpeg',
    'ailefilm/3.jpeg',
    'ailefilm/4.jpeg',
    'ailefilm/5.jpeg',
    'ailefilm/6.jpeg',
    'ailefilm/7.jpeg',
    'ailefilm/8.jpeg',
    'ailefilm/9.jpeg',
    'ailefilm/10.jpeg',
    'ailefilm/11.jpeg',
    'ailefilm/12.jpeg',
    'ailefilm/13.jpeg',
    'ailefilm/14.jpeg',
    'ailefilm/15.jpeg',
    'ailefilm/16.jpeg',
    'ailefilm/17.jpeg',
    'ailefilm/18.jpeg',
    'ailefilm/19.jpeg',
    'ailefilm/20.jpeg',
    'ailefilm/21.jpeg',
    'ailefilm/22.jpeg',
    'ailefilm/23.jpeg',
    'ailefilm/24.jpeg',
    'ailefilm/25.jpeg',
    'ailefilm/26.jpeg',
    'ailefilm/27.jpeg',
    'ailefilm/28.jpeg',
    'ailefilm/29.jpeg',
    'ailefilm/30.jpeg',
    'ailefilm/31.jpeg',
    'ailefilm/32.jpeg',
    'ailefilm/33.jpeg',
    'ailefilm/34.jpeg',
    'ailefilm/35.jpeg',
    'ailefilm/36.jpeg',
    'ailefilm/37.jpeg',
    'ailefilm/38.jpeg',
    'ailefilm/39.jpeg',
    'ailefilm/40.jpeg',
    'ailefilm/41.jpeg',
    'ailefilm/42.jpeg',
    'ailefilm/43.jpeg',
    'ailefilm/44.jpeg',
    'ailefilm/45.jpeg',
    'ailefilm/46.jpeg',
    'ailefilm/47.jpeg',
    'ailefilm/48.jpeg',
    'ailefilm/49.jpeg',
    'ailefilm/50.jpeg',
    'ailefilm/51.jpeg',
    'ailefilm/52.jpeg',
    'ailefilm/53.jpeg',
    'ailefilm/54.jpeg',
    'ailefilm/55.jpeg',
    'ailefilm/56.jpeg',
    'ailefilm/57.jpeg',
    'ailefilm/58.jpeg',
    'ailefilm/59.jpeg',
    'ailefilm/60.jpeg',
    'ailefilm/61.jpeg',
    'ailefilm/62.jpeg',
    'ailefilm/63.jpeg',
    'ailefilm/64.jpeg',
    'ailefilm/65.jpeg',
    'ailefilm/66.jpeg',
    'ailefilm/67.jpeg',
    'ailefilm/68.jpeg',
    'ailefilm/69.jpeg',
    'ailefilm/70.jpeg',
    'ailefilm/71.jpeg',
    'ailefilm/72.jpeg',
    'ailefilm/73.jpeg',
    'ailefilm/74.jpeg',
    'ailefilm/75.jpeg',
    'ailefilm/76.jpeg',
    'ailefilm/77.jpeg',
    'ailefilm/78.jpeg',
    'ailefilm/79.jpeg',
    'ailefilm/80.jpeg',
    'ailefilm/81.jpeg',
    'ailefilm/82.jpeg',
    'ailefilm/83.jpeg',
    'ailefilm/84.jpeg',
    'ailefilm/85.jpeg',
    'ailefilm/86.jpeg',
    'ailefilm/87.jpeg',
    'ailefilm/88.jpeg',
    'ailefilm/89.jpeg',
    'ailefilm/90.jpeg',
    'ailefilm/91.jpeg',
    'ailefilm/92.jpeg',
    'ailefilm/93.jpeg',
    'ailefilm/94.jpeg',
    'ailefilm/95.jpeg',
    'ailefilm/96.jpeg',
    'ailefilm/97.jpeg',
    'ailefilm/98.jpeg',
    'ailefilm/99.jpeg',
    'ailefilm/100.jpeg',
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