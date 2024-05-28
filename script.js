function myFunction() {

    let mydiv = document.getElementById("myDiv");

    let menuIcon = document.getElementById("mobile-menu-icon");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.remove("fa-close");

    if (mydiv.style.display === "block") {

        mydiv.style.display = "none";
        menuIcon.classList.add("fa-bars");

    } else {

        mydiv.style.display = "block";
        menuIcon.classList.add("fa-close");

    }
}

function onMenuItemClick(evt) {
    console.log('evt', evt)
    if (window.innerWidth > 970) {
        return;
    }
    let display = evt.nextElementSibling.style.display;
    if (display !== "block") {
        evt.nextElementSibling.style.display = "block"
        evt.nextElementSibling.querySelectorAll('ul').forEach(x => {
            x.style.display = "block"
        })
        let icon = evt.querySelector('.fa-chevron-down');
        icon.classList.remove('fa-chevron-down')
        icon.classList.add('fa-chevron-up')
    } else {
        evt.nextElementSibling.style.display = "none";
        evt.nextElementSibling.querySelectorAll('ul').forEach(x => {
            x.style.display = "none"
        })
        let icon = evt.querySelector('.fa-chevron-up');
        icon.classList.remove('fa-chevron-up')
        icon.classList.add('fa-chevron-down')
    }
}

function chatWithUs(evt) {
    let mob = document.querySelector('.fa-phone').innerText;
    window.open(`https://api.whatsapp.com/send?phone=${mob}&text=Hey%20BizAllys`, "_blank")
}

// for scrolling navbar fixed
window.onscroll = function () { myscroll() };

let fixedbar = document.getElementById("fixed-bar");

let sticky = fixedbar.offsetTop;

function myscroll() {
    if (window.scrollY >= sticky) {
        fixedbar.classList.add("sticky")
    } else {
        fixedbar.classList.remove("sticky");
    }
}


// Videos Carousel
const videoCarousel = document.getElementById("carouselExampleControls");
const videoCarouselInner = document.querySelector("#carousel-inner-video");
var carouselWidth = videoCarouselInner?.scrollWidth;
var cardWidth = videoCarousel.children[0].children[0].scrollWidth;
var scrollPosition = 0;

function videoCarouselNextClick() {
    scrollPosition = videoCarouselInner.scrollLeft;
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        $("#carousel-inner-video").animate({ scrollLeft: scrollPosition }, 600); //scroll left
    }
};

function videoCarouselPrevClick() {
    scrollPosition = videoCarouselInner.scrollLeft;
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carousel-inner-video").animate({ scrollLeft: scrollPosition }, 600);
    }
};

// -- 5th Block --

function multicolortab(evt, openid) {
    console.log('evt ', evt, openid);

    // let allPanelContent = document.getElementById("manage-business-content");
    // for (let j = 0; j < allPanelContent.children.length; j++) {
    //     allPanelContent.children[j].style.display = "none";            
    // }
    // we can write this also instead of below one

    let onclickcontent = document.getElementsByClassName("onclick-content");
    for(let i = 0; i < onclickcontent.length; i++) {
        onclickcontent[i].style.display = "none";
    }

     let multicolorlinks = document.getElementsByClassName("multicolor-links"); 
     for(let i = 0; i < multicolorlinks.length; i++) {
        multicolorlinks[i].className = multicolorlinks[i].className.replace(" active", "");
        multicolorlinks[i].style.filter = 'none';   
     }
     
    document.getElementById(openid).style.display = "flex";

    evt.currentTarget.className += " active";
    
    evt.currentTarget.style.filter = `drop-shadow(2px 4px 6px var(--primary))`; 
}

document.getElementById("default-active-start-business").click()