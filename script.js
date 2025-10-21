const imagens = [
    'imagem1.jpg',
    'imagem2.jpg',
    'imagem3.jpg'
];
let index = 0;
// Slideshow cíclico com fade suave
const heroBg = document.querySelector('.hero-bg');
const heroFade = document.querySelector('.hero-bg.next');

heroBg.style.backgroundImage = `url('${imagens[index]}')`;
setInterval(() => {
    index = (index + 1) % imagens.length;
    heroFade.style.backgroundImage = `url('${imagens[index]}')`;
    heroFade.style.opacity = 1;
        setTimeout(() => {
        heroBg.style.backgroundImage = heroFade.style.backgroundImage;
        heroFade.style.opacity = 0;

    }, 1000); // 1000ms = tempo do fade
}, 3000);

    // CATALOGO
let pf;
window.addEventListener('DOMContentLoaded', () => {
    // Em versões atuais do bundle de navegador, o global é `PageFlip`
    const PageFlipCtor = window.PageFlip || (window.St && window.St.PageFlip);
    if (!PageFlipCtor) {
        console.error('PageFlip não carregado. Verifique o <script> do CDN.');
        return;
    }
    pf = new PageFlipCtor(document.getElementById('book'), {
        width: 400,
        height: 560,
        size: 'stretch',
        minWidth: 320,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 800,
        showCover: true,
        usePortrait: true,
        flippingTime: 900,
        maxShadowOpacity: 0.25,
    });

    // carrega das divs já no DOM
    pf.loadFromHTML(document.querySelectorAll('#book .page'));

    // exemplo de eventos
    pf.on('flip', (e) => {
        // console.log('Página atual:', e.data);
    });
});


