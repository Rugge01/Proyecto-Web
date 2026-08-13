// Menú hamburguesa: abre/cierra el menú de navegación en mobile
const btnMenu = document.getElementById('btnMenu');
const menuNav = document.getElementById('menuNav');
 
btnMenu.addEventListener('click', () => {
    const abierto = menuNav.classList.toggle('abierto');
    btnMenu.setAttribute('aria-expanded', abierto);
});
 
// Cierra el menú al clickear un link (mejora la UX en mobile)
menuNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('abierto');
        btnMenu.setAttribute('aria-expanded', 'false');
    });
});
 