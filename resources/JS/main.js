/*=============== CHANGE BACKGROUND HEADER ===============
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader); */

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPreview: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== VALUE ACCORDION ===============*/
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content');
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};

const accordionItems = document.querySelectorAll('.value__accordion-item');
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);
        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Select the section links
const homeLink = document.querySelector('.nav__menu a[href="#home"]'); // Home section link
const valueLink = document.querySelector('.nav__menu a[href="#value"]'); // Value section link
const contactLink = document.querySelector('.nav__menu a[href="#contact"]'); // Contact section link
const propertiesLink = document.querySelector('.nav__menu a[href="#popular"]'); // Properties section link
const olomoucLink = document.querySelector('.nav__menu a[href="#olomouc-section"]'); // Olomouc section link
const liberecLink = document.querySelector('.nav__menu a[href="#liberec-section"]'); // Liberec section link
const broumovLink = document.querySelector('.nav__menu a[href="#broumov-section"]'); // Broumov section link

// IntersectionObserver to track visibility of each section
const observerOptions = {
    root: null, // use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1, // trigger when at least 10% of the section is visible
};

// Function to handle activation of the link based on visibility
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        const navLink = document.querySelector(`.nav__menu a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
};

// Initialize the observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each section
document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUP() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUP);

const scrollUpButton = document.getElementById('scroll-up');
scrollUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const toggleTheme = () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light');
    localStorage.setItem('selected-icon', themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun');
};

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', toggleTheme);

document.querySelectorAll('.popup-enabled').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target);
        alert('Buttons and links aren\'t functional.' + event.target);
    });
});