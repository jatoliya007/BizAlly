function myFunction (){

    let mydiv = document.getElementById("myDiv");

    let menuIcon = document.getElementById("mobile-menu-icon");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.remove("fa-close");

    if (mydiv.style.display === "block"){

        mydiv.style.display = "none";
        menuIcon.classList.add("fa-bars");

    } else {

        mydiv.style.display = "block";
        menuIcon.classList.add("fa-close");
        
    }
}

function onMenuItemClick(evt){
    console.log('evt', evt)
    if(window.innerWidth > 970 ){
        return;
    }
    let display = evt.nextElementSibling.style.display;
    if (display !== "block"){
        evt.nextElementSibling.style.display = "block"
        evt.nextElementSibling.querySelectorAll('ul').forEach(x => {
            x.style.display = "block"
        })
        let icon = evt.querySelector('.fa-chevron-down');
        icon.classList.remove('fa-chevron-down')
        icon.classList.add('fa-chevron-up')
    }else{
        evt.nextElementSibling.style.display = "none";
        evt.nextElementSibling.querySelectorAll('ul').forEach(x => {
            x.style.display = "none"
        })
        let icon = evt.querySelector('.fa-chevron-up');
        icon.classList.remove('fa-chevron-up')
        icon.classList.add('fa-chevron-down')
    }
}

// for scrolling navbar fixed
window.onscroll = function() {myscroll()};

let fixedbar = document.getElementById("fixed-bar");

let sticky = fixedbar.offsetTop;

function myscroll() {
    if (window.scrollY >= sticky) {
        fixedbar.classList.add("sticky")
} else {
    fixedbar.classList.remove("sticky");
}

}