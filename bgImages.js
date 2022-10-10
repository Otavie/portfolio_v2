const landing = document.querySelector('.landing');
imgV = [
    // 'https://otavie.github.io/portfolio_v2/img/v1.jpg'
    'img/v1.jpg',
    'img/v2.jpg',
    'img/v3.jpg',
    'img/v4.jpg'
];
imgH = [
    // 'https://otavie.github.io/portfolio_v2/img/h1.jpg'
    'img/h1.jpg',
    'img/h2.jpg',
    'img/h3.jpg',
    'img/h4.jpg'
];

function imagesH (){
    const i = Math.floor(Math.random() * imgH.length);
    landing.style.backgroundImage = 'url('+imgH[i]+')';
}

function imagesV (){
    const j = Math.floor(Math.random() * imgV.length);
    landing.style.backgroundImage = 'url('+imgV[j]+')';
}

var mediaQuery = window.matchMedia("(min-width: 600px)");

if (mediaQuery.matches){
    window.onload = function(){
        imagesH();
    }
}else{
    window.onload = function(){
        imagesV();
    }
}
