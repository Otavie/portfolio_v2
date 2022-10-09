const landing = document.querySelector('.landing');
imgV = [
    'https://otavie.github.io/portfolio_v2/img/v1.jpg',
    'https://otavie.github.io/portfolio_v2/img/v2.jpg',
    'https://otavie.github.io/portfolio_v2/img/v3.jpg',
    'https://otavie.github.io/portfolio_v2/img/v4.jpg'
];
imgH = [
    'https://otavie.github.io/portfolio_v2/img/h1.jpg',
    'https://otavie.github.io/portfolio_v2/img/h2.jpg',
    'https://otavie.github.io/portfolio_v2/img/h3.jpg',
    'https://otavie.github.io/portfolio_v2/img/h4.jpg'
];


function imagesH (){
    const i = Math.floor(Math.random() * imgH.length);
    landing.style.backgroundImage = 'url('+imgH[i]+')';
}

function imagesV (){
    const j = Math.floor(Math.random() * imgV.length);
    landing.style.backgroundImage = 'url('+imgH[j]+')';
}

var mediaQuery = window.matchMedia("(min-width: 600px)");

function changeBg(){
    if (mediaQuery.matches){
        imagesH();
    }else{
        imagesV();
    }
}

window.onload = changeBg();