const landing = document.querySelector('.landing');
imgV = [
    'https://otavie.github.io/portfolio_v2/img/v1.png',
    'https://otavie.github.io/portfolio_v2/img/v2.png',
    'https://otavie.github.io/portfolio_v2/img/v3.png',
    'https://otavie.github.io/portfolio_v2/img/v4.png'
];
imgH = [
    'https://otavie.github.io/portfolio_v2/img/h1.png',
    'https://otavie.github.io/portfolio_v2/img/h2.png',
    'https://otavie.github.io/portfolio_v2/img/h3.png',
    'https://otavie.github.io/portfolio_v2/img/h4.png'
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
        clearInterval(imagesV);
        setInterval(imagesH, 4000);
        
    }
}

function changeBg_T(){
    if (!(mediaQuery.matches)){
        clearInterval(imagesH);
        setInterval(imagesV, 4000);
        
    }
}

window.onload = changeBg();
window.onload = changeBg_T();