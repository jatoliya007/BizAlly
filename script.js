function myFunction (){

    let mydiv = document.getElementById("myDiv");

    if (mydiv.style.display === "block"){

        mydiv.style.display = "none";

    } else {

        mydiv.style.display = "block";
        
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
    }else{
        evt.nextElementSibling.style.display = "none";
        evt.nextElementSibling.querySelectorAll('ul').forEach(x => {
            x.style.display = "none"
        })
    }
}