const landing = document.querySelector('.landing');
imgV = [
    'https://otavie.github.io/portfolio_v2/img/v1.png',
    'https://otavie.github.io/portfolio_v2/img/v2.png',
    'https://otavie.github.io/portfolio_v2/img/v3.png',
    'https://otavie.github.io/portfolio_v2/img/v4.png'
];
imgH = [
    '../img/h1.png', 
    '../img/h2.png', 
    '../img/h3.jpg', 
    '../img/h4.jpg'
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