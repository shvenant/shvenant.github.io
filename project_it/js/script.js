window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main-menu'),
    menuItem = document.querySelectorAll('.header_link'),
    hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
  });