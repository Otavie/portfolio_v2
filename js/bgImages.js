const landing = document.querySelector('.landing');
imgV = [
    'https://otavie.github.io/portfolio_v2/img/v1.png',
    'https://otavie.github.io/portfolio_v2/img/v2.png',
    'https://otavie.github.io/portfolio_v2/img/v3.png',
    'https://otavie.github.io/portfolio_v2/img/v4.png'
    // '../img/v1.png', 
    // '../img/v2.png', 
    // '../img/v3.png', 
    // '../img/v4.png'
];
imgH = [
    'https://otavie.github.io/portfolio_v2/img/h1.png',
    'https://otavie.github.io/portfolio_v2/img/h2.png',
    'https://otavie.github.io/portfolio_v2/img/h3.png',
    'https://otavie.github.io/portfolio_v2/img/h4.png'
    // '../img/h1.png', 
    // '../img/h2.png', 
    // '../img/h3.jpg', 
    // '../img/h4.jpg'
];

var mediaQuery = window.matchMedia("(min-width: 600px)");
function bgChanger(){
    if (mediaQuery.matches){
        setInterval(function(){
            const i = Math.floor(Math.random() * imgH.length);
            landing.style.backgroundImage = 'url('+imgH[i]+')';
        }, 4000);
        clearInterval();
    }else{
        setInterval(function(){
            const j = Math.floor(Math.random() * imgH.length);
            landing.style.backgroundImage = 'url('+imgV[j]+')';
        }, 4000);
        clearInterval();
    }
}

window.onload = bgChanger();