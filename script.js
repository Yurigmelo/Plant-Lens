let ultimaPosicaoScroll = 0;
const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    let posicaoAtualScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (posicaoAtualScroll > ultimaPosicaoScroll && posicaoAtualScroll > 10) {
        header.classList.add("header-oculto");
    } else {
        header.classList.remove("header-oculto");
    }
    
    ultimaPosicaoScroll = posicaoAtualScroll <= 0 ? 0 : posicaoAtualScroll; 
}, false);