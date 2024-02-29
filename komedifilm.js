const moviePosters = [
    'komedifilm/1.jpeg',
    'komedifilm/2.jpeg',
    'komedifilm/3.jpeg',
    'komedifilm/4.jpeg',
    'komedifilm/5.jpeg',
    'komedifilm/6.jpeg',
    'komedifilm/7.jpeg',
    'komedifilm/8.jpeg',
    'komedifilm/9.jpeg',
    'komedifilm/10.jpeg',
    'komedifilm/11.jpeg',
    'komedifilm/12.jpeg',
    'komedifilm/13.jpeg',
    'komedifilm/14.jpeg',
    'komedifilm/15.jpeg',
    'komedifilm/16.jpeg',
    'komedifilm/17.jpeg',
    'komedifilm/18.jpeg',
    'komedifilm/19.jpeg',
    'komedifilm/20.jpeg',
    'komedifilm/21.jpeg',
    'komedifilm/22.jpeg',
    'komedifilm/23.jpeg',
    'komedifilm/24.jpeg',
    'komedifilm/25.jpeg',
    'komedifilm/26.jpeg',
    'komedifilm/27.jpeg',
    'komedifilm/28.jpeg',
    'komedifilm/29.jpeg',
    'komedifilm/30.jpeg',
    'komedifilm/31.jpeg',
    'komedifilm/32.jpeg',
    'komedifilm/33.jpeg',
    'komedifilm/34.jpeg',
    'komedifilm/35.jpeg',
    'komedifilm/36.jpeg',
    'komedifilm/37.jpeg',
    'komedifilm/38.jpeg',
    'komedifilm/39.jpeg',
    'komedifilm/40.jpeg',
    'komedifilm/41.jpeg',
    'komedifilm/42.jpeg',
    'komedifilm/43.jpeg',
    'komedifilm/44.jpeg',
    'komedifilm/45.jpeg',
    'komedifilm/46.jpeg',
    'komedifilm/47.jpeg',
    'komedifilm/48.jpeg',
    'komedifilm/49.jpeg',
    'komedifilm/50.jpeg',
    'komedifilm/51.jpeg',
    'komedifilm/52.jpeg',
    'komedifilm/53.jpeg',
    'komedifilm/54.jpeg',
    'komedifilm/55.jpeg',
    'komedifilm/56.jpeg',
    'komedifilm/57.jpeg',
    'komedifilm/58.jpeg',
    'komedifilm/59.jpeg',
    'komedifilm/60.jpeg',
    'komedifilm/61.jpeg',
    'komedifilm/62.jpeg',
    'komedifilm/63.jpeg',
    'komedifilm/64.jpeg',
    'komedifilm/65.jpeg',
    'komedifilm/66.jpeg',
    'komedifilm/67.jpeg',
    'komedifilm/68.jpeg',
    'komedifilm/69.jpeg',
    'komedifilm/70.jpeg',
    'komedifilm/71.jpeg',
    'komedifilm/72.jpeg',
    'komedifilm/73.jpeg',
    'komedifilm/74.jpeg',
    'komedifilm/75.jpeg',
    'komedifilm/76.jpeg',
    'komedifilm/77.jpeg',
    'komedifilm/78.jpeg',
    'komedifilm/79.jpeg',
    'komedifilm/80.jpeg',
    'komedifilm/81.jpeg',
    'komedifilm/82.jpeg',
    'komedifilm/83.jpeg',
    'komedifilm/84.jpeg',
    'komedifilm/85.jpeg',
    'komedifilm/86.jpeg',
    'komedifilm/87.jpeg',
    'komedifilm/88.jpeg',
    'komedifilm/89.jpeg',
    'komedifilm/90.jpeg',
    'komedifilm/91.jpeg',
    'komedifilm/92.jpeg',
    'komedifilm/93.jpeg',
    'komedifilm/94.jpeg',
    'komedifilm/95.jpeg',
    'komedifilm/96.jpeg',
    'komedifilm/97.jpeg',
    'komedifilm/98.jpeg',
    'komedifilm/99.jpeg',
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