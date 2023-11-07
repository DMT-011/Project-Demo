
// Modal tickets
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal= document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');


// Functions handle logic modal ticket 
function showModalTickets() {
    modal.classList.add('open');
}

function hiddenModalTickets() {
    modal.classList.remove('open');
}


// Envent listener modal
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModalTickets);
}


// Menu mobile 
const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.js-mobile-menu-btn');
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
const headerHeight = header.clientHeight;


// Function handle open / close Menu
function openCloseHandleMenu() {
    const isClosed = header.clientHeight === headerHeight;

    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}


// Handle close menu when select item

for(let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {

            const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            
            if (isParentMenu) {
                event.preventDefault();
            } else {
                header.style.height = null;
            }
        }
}


//Change Slide

const slider = document.getElementById('slider');
const listImgs = [
    'url(assets/image/slider/la.jpg)',
    'url(assets/image/slider/ny.jpg)',
    'url(assets/image/slider/chicago.jpg)',
];

const contentSlider = [
    [
        {
        heading: 'Los Angeles',
        desc: 'We had the best time playing at Venice Beach!'
    }
],

    [
        {
        heading: 'New York',
        desc: 'The atmosphere in New York is lorem ipsum.'
    }
],

    [
        {
        heading: 'Chicago',
        desc: 'Thank you, Chicago - A night we won\'t forget.'
    }
],

];

let i = 0;
let j = 0
const time = 5000;



//Function handle change content slide
function changeContentSlide() {

    let htmls = contentSlider[j].map(function(item) {
        return `
            <div class="text-content">
              <h3 class="text-heading">${item.heading}</h3>
              <p class="text-desc">${item.desc}</p>
            </div>
        `
    }).join();

    slider.innerHTML = htmls;

    if(j < contentSlider.length - 1) {
        j++
    } else {
        j = 0
    }

    setTimeout('changeContentSlide()', time);
}

// Funciton handle change image
function changeImg() {

    slider.style.backgroundImage = listImgs[i];

    if(i < listImgs.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}



// Start 

function start() {
    
    changeImg();
    changeContentSlide();

    mobileMenuBtn.addEventListener('click', openCloseHandleMenu);
    
    closeModal.addEventListener('click', hiddenModalTickets);
    modal.addEventListener('click', hiddenModalTickets);
    modalContainer.addEventListener('click', function(events) {
        events.stopPropagation();
    })
}



start();
