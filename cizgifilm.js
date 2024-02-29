const moviePosters = [
    'cizgifilm/1.jpeg',
    'cizgifilm/2.jpeg',
    'cizgifilm/3.jpeg',
    'cizgifilm/4.jpeg',
    'cizgifilm/5.jpeg',
    'cizgifilm/6.jpeg',
    'cizgifilm/7.jpeg',
    'cizgifilm/8.jpeg',
    'cizgifilm/9.jpeg',
    'cizgifilm/10.jpeg',
    'cizgifilm/11.jpeg',
    'cizgifilm/12.jpeg',
    'cizgifilm/13.jpeg',
    'cizgifilm/14.jpeg',
    'cizgifilm/15.jpeg',
    'cizgifilm/16.jpeg',
    'cizgifilm/17.jpeg',
    'cizgifilm/18.jpeg',
    'cizgifilm/19.jpeg',
    'cizgifilm/20.jpeg',
    'cizgifilm/21.jpeg',
    'cizgifilm/22.jpeg',
    'cizgifilm/23.jpeg',
    'cizgifilm/24.jpeg',
    'cizgifilm/25.jpeg',
    'cizgifilm/26.jpeg',
    'cizgifilm/27.jpeg',
    'cizgifilm/28.jpeg',
    'cizgifilm/29.jpeg',
    'cizgifilm/30.jpeg',
    'cizgifilm/31.jpeg',
    'cizgifilm/32.jpeg',
    'cizgifilm/33.jpeg',
    'cizgifilm/34.jpeg',
    'cizgifilm/35.jpeg',
    'cizgifilm/36.jpeg',
    'cizgifilm/37.jpeg',
    'cizgifilm/38.jpeg',
    'cizgifilm/39.jpeg',
    'cizgifilm/40.jpeg',
    'cizgifilm/41.jpeg',
    'cizgifilm/42.jpeg',
    'cizgifilm/43.jpeg',
    'cizgifilm/44.jpeg',
    'cizgifilm/45.jpeg',
    'cizgifilm/46.jpeg',
    'cizgifilm/47.jpeg',
    'cizgifilm/48.jpeg',
    'cizgifilm/49.jpeg',
    'cizgifilm/50.jpeg',
    'cizgifilm/51.jpeg',
    'cizgifilm/52.jpeg',
    'cizgifilm/53.jpeg',
    'cizgifilm/54.jpeg',
    'cizgifilm/55.jpeg',
    'cizgifilm/56.jpeg',
    'cizgifilm/57.jpeg',
    'cizgifilm/58.jpeg',
    'cizgifilm/59.jpeg',
    'cizgifilm/60.jpeg',
    'cizgifilm/61.jpeg',
    'cizgifilm/62.jpeg',
    'cizgifilm/63.jpeg',
    'cizgifilm/64.jpeg',
    'cizgifilm/65.jpeg',
    'cizgifilm/66.jpeg',
    'cizgifilm/67.jpeg',
    'cizgifilm/68.jpeg',
    'cizgifilm/69.jpeg',
    'cizgifilm/70.jpeg',
    'cizgifilm/71.jpeg',
    'cizgifilm/72.jpeg',
    'cizgifilm/73.jpeg',
    'cizgifilm/74.jpeg',
    'cizgifilm/75.jpeg',
    'cizgifilm/76.jpeg',
    'cizgifilm/77.jpeg',
    'cizgifilm/78.jpeg',
    'cizgifilm/79.jpeg',
    'cizgifilm/80.jpeg',
    'cizgifilm/81.jpeg',
    'cizgifilm/82.jpeg',
    'cizgifilm/83.jpeg',
    'cizgifilm/84.jpeg',
    'cizgifilm/85.jpeg',
    'cizgifilm/86.jpeg',
    'cizgifilm/87.jpeg',
    'cizgifilm/88.jpeg',
    'cizgifilm/89.jpeg',
    'cizgifilm/90.jpeg',
    'cizgifilm/91.jpeg',
    'cizgifilm/92.jpeg',
    'cizgifilm/93.jpeg',
    'cizgifilm/94.jpeg',
    'cizgifilm/95.jpeg',
    'cizgifilm/96.jpeg',
    'cizgifilm/97.jpeg',
    'cizgifilm/98.jpeg',
    'cizgifilm/99.jpeg',
    'cizgifilm/100.jpeg',
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
