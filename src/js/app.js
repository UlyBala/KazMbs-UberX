window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header');
    const menuItem = document.querySelectorAll('.header__nav__item');

    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active')
        // menu.classList.toggle('header--active')
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.remove('burger--active')
            menu.classList.remove('header--active')
        })
    })
})