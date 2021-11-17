const buyBtns = document.querySelectorAll('.js-buy-ticket'),
        modal = document.querySelector('.js-modal'),
        closeModal = document.querySelector('.js-modal-close'),
        modalContainer = document.querySelector('.js-modal-container'),
        menu = document.querySelector('.mobile-menu-btn'),
        headerMenu = document.getElementById('header')

function showModal() {
    modal.classList.add('open-modal')
}

function hideModal() {
    modal.classList.remove('open-modal')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal)
}

closeModal.addEventListener('click', hideModal)
modal.addEventListener('click', hideModal)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

// hide and show menu when click the menu button
let currentHeaderHeight = headerMenu.clientHeight
menu.addEventListener('click', () => {
    let isClose = headerMenu.clientHeight === currentHeaderHeight;

    if(isClose) {
        headerMenu.classList.add('show-menu')
    } else {
        headerMenu.classList.remove('show-menu')
    }
})

// auto hide menu when click to menu items 
const menuItems = document.querySelectorAll('#nav > li > a[href*="#"]')

for(let menuItem of menuItems) {
    menuItem.onclick = function(event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.contains('subnav')
        if(isParentMenu) {
            event.preventDefault();
        } else {
            headerMenu.classList.remove('show-menu')
        }   
    }
}