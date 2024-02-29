const moviePosters = [
    'psikolojikfilm/1.jpeg',
    'psikolojikfilm/2.jpeg',
    'psikolojikfilm/3.jpeg',
    'psikolojikfilm/4.jpeg',
    'psikolojikfilm/5.jpeg',
    'psikolojikfilm/6.jpeg',
    'psikolojikfilm/7.jpeg',
    'psikolojikfilm/8.jpeg',
    'psikolojikfilm/9.jpeg',
    'psikolojikfilm/10.jpeg',
    'psikolojikfilm/11.jpeg',
    'psikolojikfilm/12.jpeg',
    'psikolojikfilm/13.jpeg',
    'psikolojikfilm/14.jpeg',
    'psikolojikfilm/15.jpeg',
    'psikolojikfilm/16.jpeg',
    'psikolojikfilm/17.jpeg',
    'psikolojikfilm/18.jpeg',
    'psikolojikfilm/19.jpeg',
    'psikolojikfilm/20.jpeg',
    'psikolojikfilm/21.jpeg',
    'psikolojikfilm/22.jpeg',
    'psikolojikfilm/23.jpeg',
    'psikolojikfilm/24.jpeg',
    'psikolojikfilm/25.jpeg',
    'psikolojikfilm/26.jpeg',
    'psikolojikfilm/27.jpeg',
    'psikolojikfilm/28.jpeg',
    'psikolojikfilm/29.jpeg',
    'psikolojikfilm/30.jpeg',
    'psikolojikfilm/31.jpeg',
    'psikolojikfilm/32.jpeg',
    'psikolojikfilm/33.jpeg',
    'psikolojikfilm/34.jpeg',
    'psikolojikfilm/35.jpeg',
    'psikolojikfilm/36.jpeg',
    'psikolojikfilm/37.jpeg',
    'psikolojikfilm/38.jpeg',
    'psikolojikfilm/39.jpeg',
    'psikolojikfilm/40.jpeg',
    'psikolojikfilm/41.jpeg',
    'psikolojikfilm/42.jpeg',
    'psikolojikfilm/43.jpeg',
    'psikolojikfilm/44.jpeg',
    'psikolojikfilm/45.jpeg',
    'psikolojikfilm/46.jpeg',
    'psikolojikfilm/47.jpeg',
    'psikolojikfilm/48.jpeg',
    'psikolojikfilm/49.jpeg',
    'psikolojikfilm/50.jpeg',
    'psikolojikfilm/51.jpeg',
    'psikolojikfilm/52.jpeg',
    'psikolojikfilm/53.jpeg',
    'psikolojikfilm/54.jpeg',
    'psikolojikfilm/55.jpeg',
    'psikolojikfilm/56.jpeg',
    'psikolojikfilm/57.jpeg',
    'psikolojikfilm/58.jpeg',
    'psikolojikfilm/59.jpeg',
    'psikolojikfilm/60.jpeg',
    'psikolojikfilm/61.jpeg',
    'psikolojikfilm/62.jpeg',
    'psikolojikfilm/63.jpeg',
    'psikolojikfilm/64.jpeg',
    'psikolojikfilm/65.jpeg',
    'psikolojikfilm/66.jpeg',
    'psikolojikfilm/67.jpeg',
    'psikolojikfilm/68.jpeg',
    'psikolojikfilm/69.jpeg',
    'psikolojikfilm/70.jpeg',
    'psikolojikfilm/71.jpeg',
    'psikolojikfilm/72.jpeg',
    'psikolojikfilm/73.jpeg',
    'psikolojikfilm/74.jpeg',
    'psikolojikfilm/75.jpeg',
    'psikolojikfilm/76.jpeg',
    'psikolojikfilm/77.jpeg',
    'psikolojikfilm/78.jpeg',
    'psikolojikfilm/79.jpeg',
    'psikolojikfilm/80.jpeg',
    'psikolojikfilm/81.jpeg',
    'psikolojikfilm/82.jpeg',
    'psikolojikfilm/83.jpeg',
    'psikolojikfilm/84.jpeg',
    'psikolojikfilm/85.jpeg',
    'psikolojikfilm/86.jpeg',
    'psikolojikfilm/87.jpeg',
    'psikolojikfilm/88.jpeg',
    'psikolojikfilm/89.jpeg',
    'psikolojikfilm/90.jpeg',
    'psikolojikfilm/91.jpeg',
    'psikolojikfilm/92.jpeg',
    'psikolojikfilm/93.jpeg',
    'psikolojikfilm/94.jpeg',
    'psikolojikfilm/95.jpeg',
    'psikolojikfilm/96.jpeg',
    'psikolojikfilm/97.jpeg',
    'psikolojikfilm/98.jpeg',
    'psikolojikfilm/99.jpeg',
    'psikolojikfilm/100.jpeg',
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