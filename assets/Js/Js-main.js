/*-- Made By Panchana Madara --*/
/*MENU SHOW Y HIDDEN */
const navMEnu =document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*----------------------- MENU SHOW -----------------------*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMEnu.classList.add('show-menu')
    })
}
/*----------------------- MENU HIDDEN -----------------------*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMEnu.classList.remove('show-menu')
    })
}

//

/*----------------------- REMOVE MENU MOBILE -----------------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*-----------------------ACCORDION SKILLS-----------------------*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')
    
function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close' 
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)

})

/*-----------------------Swiper-----------------------*/
let swiper = new Swiper('.project__container', {
    cssMode: true,
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

/*-----------------------SCROLL SECTIONS ACTIVE LINK-----------------------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*-----------------------CHANGE BACKGROUND HEADER-----------------------*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*----------------------- SHOW SCROLL UP -----------------------*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*----------------------- DARK LIGHT THEME -----------------------*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*----------------------- FORM -----------------------*/ 
var nameError = document.getElementById('name__error');
var emailError = document.getElementById('email__error')
var messageError = document.getElementById('message__error')



//validate the form data

function validateName(){
    var name=document.getElementById('c_name').value;

    if (name.length ==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="uil uil-check"></i>' ;
    return true
    
}

function validateEmail(){
    var email=document.getElementById('c_email').value;

    if (email.length ==0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/\S+@\S+\.\S+/)){
        emailError.innerHTML = 'Write correct email address';
        return false;
    }

    emailError.innerHTML = '<i class="uil uil-check"></i>';
    return true
    
}

function validateMessage(){
    var message=document.getElementById('c_message').value;

    if (message.length ==0){
        messageError.innerHTML = 'Email is required';
        return false;
    }

    messageError.innerHTML = '<i class="uil uil-check"></i>';
    return true
    
}

/*----------------------- SCROLL REVEAL ANIMATION -----------------------*/ 

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay: 200,
    //reset: true,

})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, { delay: 400 })
sr.reveal(`.home__social`, { delay: 500 })
sr.reveal(`.home__scroll`, { delay: 500 })

sr.reveal('.about__img',{
    origin:'left',
    interval:200,
})

sr.reveal('.about__description, .about__buttons',{
    origin:'right',
    interval:200,
})

sr.reveal(`.skills__content`, { interval:200 })

sr.reveal(`.project__container`, { interval:200 })

sr.reveal('.contact__information',{
    origin:'left',
    interval:200,
})


sr.reveal('.contact__form',{
    origin:'right',
    interval:200,
})