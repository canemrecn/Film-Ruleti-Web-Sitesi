const moviePosters = [
    'bluerayfilm/1.jpeg',
    'bluerayfilm/2.jpeg',
    'bluerayfilm/3.jpeg',
    'bluerayfilm/4.jpeg',
    'bluerayfilm/5.jpeg',
    'bluerayfilm/6.jpeg',
    'bluerayfilm/7.jpeg',
    'bluerayfilm/8.jpeg',
    'bluerayfilm/9.jpeg',
    'bluerayfilm/10.jpeg',
    'bluerayfilm/11.jpeg',
    'bluerayfilm/12.jpeg',
    'bluerayfilm/13.jpeg',
    'bluerayfilm/14.jpeg',
    'bluerayfilm/15.jpeg',
    'bluerayfilm/16.jpeg',
    'bluerayfilm/17.jpeg',
    'bluerayfilm/18.jpeg',
    'bluerayfilm/19.jpeg',
    'bluerayfilm/20.jpeg',
    'bluerayfilm/21.jpeg',
    'bluerayfilm/22.jpeg',
    'bluerayfilm/23.jpeg',
    'bluerayfilm/24.jpeg',
    'bluerayfilm/25.jpeg',
    'bluerayfilm/26.jpeg',
    'bluerayfilm/27.jpeg',
    'bluerayfilm/28.jpeg',
    'bluerayfilm/29.jpeg',
    'bluerayfilm/30.jpeg',
    'bluerayfilm/31.jpeg',
    'bluerayfilm/32.jpeg',
    'bluerayfilm/33.jpeg',
    'bluerayfilm/34.jpeg',
    'bluerayfilm/35.jpeg',
    'bluerayfilm/36.jpeg',
    'bluerayfilm/37.jpeg',
    'bluerayfilm/38.jpeg',
    'bluerayfilm/39.jpeg',
    'bluerayfilm/40.jpeg',
    'bluerayfilm/41.jpeg',
    'bluerayfilm/42.jpeg',
    'bluerayfilm/43.jpeg',
    'bluerayfilm/44.jpeg',
    'bluerayfilm/45.jpeg',
    'bluerayfilm/46.jpeg',
    'bluerayfilm/47.jpeg',
    'bluerayfilm/48.jpeg',
    'bluerayfilm/49.jpeg',
    'bluerayfilm/50.jpeg',
    'bluerayfilm/51.jpeg',
    'bluerayfilm/52.jpeg',
    'bluerayfilm/53.jpeg',
    'bluerayfilm/54.jpeg',
    'bluerayfilm/55.jpeg',
    'bluerayfilm/56.jpeg',
    'bluerayfilm/57.jpeg',
    'bluerayfilm/58.jpeg',
    'bluerayfilm/59.jpeg',
    'bluerayfilm/60.jpeg',
    'bluerayfilm/61.jpeg',
    'bluerayfilm/62.jpeg',
    'bluerayfilm/63.jpeg',
    'bluerayfilm/64.jpeg',
    'bluerayfilm/65.jpeg',
    'bluerayfilm/66.jpeg',
    'bluerayfilm/67.jpeg',
    'bluerayfilm/68.jpeg',
    'bluerayfilm/69.jpeg',
    'bluerayfilm/70.jpeg',
    'bluerayfilm/71.jpeg',
    'bluerayfilm/72.jpeg',
    'bluerayfilm/73.jpeg',
    'bluerayfilm/74.jpeg',
    'bluerayfilm/75.jpeg',
    'bluerayfilm/76.jpeg',
    'bluerayfilm/77.jpeg',
    'bluerayfilm/78.jpeg',
    'bluerayfilm/79.jpeg',
    'bluerayfilm/80.jpeg',
    'bluerayfilm/81.jpeg',
    'bluerayfilm/82.jpeg',
    'bluerayfilm/83.jpeg',
    'bluerayfilm/84.jpeg',
    'bluerayfilm/85.jpeg',
    'bluerayfilm/86.jpeg',
    'bluerayfilm/87.jpeg',
    'bluerayfilm/88.jpeg',
    'bluerayfilm/89.jpeg',
    'bluerayfilm/90.jpeg',
    'bluerayfilm/91.jpeg',
    'bluerayfilm/92.jpeg',
    'bluerayfilm/93.jpeg',
    'bluerayfilm/94.jpeg',
    'bluerayfilm/95.jpeg',
    'bluerayfilm/96.jpeg',
    'bluerayfilm/97.jpeg',
    'bluerayfilm/98.jpeg',
    'bluerayfilm/99.jpeg',
    'bluerayfilm/100.jpeg',
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