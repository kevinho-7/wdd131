// Menu hamburger básico
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão do menu
    var menuBtn = document.querySelector('.menu-toggle');
    
    // Adiciona evento de clique
    if (menuBtn) {
        menuBtn.addEventListener('click', function(event) {
            // Impede comportamento padrão
            event.preventDefault();
            
            // Alterna a classe menu-open no body
            document.body.classList.toggle('menu-open');
            
            // Log para debug
            console.log('Menu clicado');
        });
    }
});
