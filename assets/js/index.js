var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const sidebarBtn = document.querySelector(".sidebar-icon");
const closeBtn = document.querySelector(".close-icon");
const menuMob = document.querySelector(".menu-mobile-content");
const overlay = document.querySelector(".overlay");
const imgSectionTwo = document.querySelector(".img-section2");


function showMenuMob() {
    menuMob.classList.toggle("active");
    overlay.classList.toggle("active");
    imgSectionTwo.classList.toggle("active");
    
    sidebarBtn.style.display = "none";
    closeBtn.style.display = "block";
}


function closeMenuMob () {
    menuMob.classList.toggle("active");
    overlay.classList.toggle("active");
    imgSectionTwo.classList.toggle("active");

    sidebarBtn.style.display = "block";
    closeBtn.style.display = "none";
}

sidebarBtn.addEventListener("click", showMenuMob);
closeBtn.addEventListener("click", closeMenuMob);