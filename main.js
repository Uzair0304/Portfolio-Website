const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const switchIcon = document.querySelector(".switch-icons");
const aboutRight = document.querySelector(".about-right");
const skillItem = document.querySelectorAll(".skill-item");
const themeIcon = document.querySelector("#theme-icon")
const listItems = document.querySelector(".list-items")



menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open-menu")
})


themeIcon.addEventListener("click", function () {
    
    if (themeIcon.classList.contains("fa-moon")) {
        themeIcon.classList.remove("fa-moon")
        themeIcon.classList.add("fa-lightbulb")

    }
    else {
        themeIcon.classList.remove("fa-lightbulb")
        themeIcon.classList.add("fa-moon")

    }

    changeTheme();


})

function changeTheme() {
    document.body.classList.toggle("change-theme")
    aboutRight.classList.toggle("change-sec-bg")
    for (i = 0; i < skillItem.length; i++) {
        skillItem[i].classList.toggle("change-sec-bg")
    }
    
}


window.addEventListener("scroll", function () {
    let scrollBtn = this.document.querySelector(".scroll-btn")
    let scrollHeight = window.pageYOffset;
    let header = document.querySelector(".header")
    let navHeight = header.getBoundingClientRect().height
    

    if(scrollHeight > 300){
        header.classList.add("fixed-nav")
    }
    else{
        header.classList.remove("fixed-nav")
    }

    if(scrollHeight > 500){
        scrollBtn.classList.add("scroll-btn-active")
    }
    else{
        scrollBtn.classList.remove("scroll-btn-active")
    }
})