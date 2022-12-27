const landing = document.querySelector('.landing');
imgV = [
    // 'https://otavie.github.io/portfolio_v2/img/v1.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v2.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v3.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v4.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v5.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v6.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v7.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v8.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v9.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v10.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v11.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/v12.jpg'
    '/img/v1.jpg',
    '/img/v2.jpg',
    '/img/v3.jpg',
    '/img/v4.jpg',
    '/img/v5.jpg',
    '/img/v6.jpg',
    '/img/v7.jpg',
    '/img/v8.jpg',
    '/img/v9.jpg',
    '/img/v10.jpg',
    '/img/v11.jpg',
    '/img/v12.jpg'
];
imgH = [
    // 'https://otavie.github.io/portfolio_v2/img/h1.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h2.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h3.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h4.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h5.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h6.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h7.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h8.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h9.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h10.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h11.jpg',
    // 'https://otavie.github.io/portfolio_v2/img/h12.jpg'
    '/img/h1.jpg',
    '/img/h2.jpg',
    '/img/h3.jpg',
    '/img/h4.jpg',
    '/img/h5.jpg',
    '/img/h6.jpg',
    '/img/h7.jpg',
    '/img/h8.jpg',
    '/img/h9.jpg',
    '/img/h10.jpg',
    '/img/h11.jpg',
    '/img/h12.jpg'
];


function imagesH (){
    const i = Math.floor(Math.random() * imgH.length);
    landing.style.backgroundImage = 'url('+imgH[i]+')';
    landing.style.transition = 'background 5s ease-in-out';
    landing.style.transitionDelay = '7s';
}

function imagesV (){
    const j = Math.floor(Math.random() * imgV.length);
    landing.style.backgroundImage = 'url('+imgV[j]+')';
    landing.style.transition = 'background 5s ease-in-out';
    landing.style.transitionDelay = '7s';
}

var mediaQuery = window.matchMedia("(min-width: 450px)");
var delay = 1000
let timeout = false

function windowLoads(){
    if (mediaQuery.matches){
        landing.style.transition = 'background 0.15s ease-in-out';
        landing.style.transitionDelay = '0s';
        // landing.style.backgroundImage = "url('/img/h.jpg')";
        landing.style.backgroundImage = "url('https://otavie.github.io/portfolio_v2/img/h.jpg')";
        clearTimeout(timeout);
        timeout = setTimeout(imagesH, delay);
    }else{
        landing.style.transition = 'background 0.15s ease-in-out';
        landing.style.transitionDelay = '0s';
        // landing.style.backgroundImage = "url('/img/v.jpg')";
        landing.style.backgroundImage = "url('https://otavie.github.io/portfolio_v2/img/v.jpg')";
        clearTimeout(timeout);
        timeout = setTimeout(imagesV, delay);
    }
}

window.onload = windowLoads()

function resSizeWindow(){
    if (mediaQuery.matches){
        landing.style.transition = 'background 0.15s ease-in-out';
        landing.style.transitionDelay = '0s';
        // landing.style.backgroundImage = "url('/img/h.jpg')";
        landing.style.backgroundImage = "url('https://otavie.github.io/portfolio_v2/img/h.jpg')";
        clearTimeout(timeout);
        timeout = setTimeout(imagesH, delay);
    }else{
        landing.style.transition = 'background 0.15s ease-in-out';
        landing.style.transitionDelay = '0s';
        // landing.style.backgroundImage = "url('/img/v.jpg')";
        landing.style.backgroundImage = "url('https://otavie.github.io/portfolio_v2/img/v.jpg')";
        clearTimeout(timeout);
        timeout = setTimeout(imagesV, delay);
    }
}

window.addEventListener('resize', resSizeWindow)
