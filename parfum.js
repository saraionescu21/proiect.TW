function imgSlider(anything){
    document.querySelector('.image').src = anything;
}

function hrefSlider(link){
    document.querySelector('.href').href = link;
}

function changeColor(color){
    const cerc = document.querySelector('.cerc');
    cerc.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var currentURL = window.location.href;

        if (currentURL.includes('Parfumbarbati.html')) {
            showRandomPerfume('parfum_barbati/parfum', 6);
        } else if (currentURL.includes('Parfumunisex.html')) {
            showRandomPerfume('parfum_unisex/parfum', 3);
        } else if (currentURL.includes('Parfumfemei.html')) {
            showRandomPerfume('parfum_femei/parfum', 4);
        }
    }
});

function showRandomPerfume(imagePath, maxCount) {
    var randomIndex = Math.floor(Math.random() * maxCount) + 1;
    var imageSource = imagePath + randomIndex + '.png';
    var perfumeLink = 'https://www.notino.ro/'; 

    imgSlider(imageSource);
    hrefSlider(perfumeLink);
}
