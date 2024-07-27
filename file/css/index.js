let links_menu = document.querySelector(".links");
let links_items = document.querySelectorAll(".links li")
let toggle = document.querySelector(".btn");
let landing = document.querySelector(".landing");
let about = document.querySelector(".about");
let gallery = document.querySelector(".gallery");
let games = document.querySelector(".games");
let price = document.querySelector(".price");
let contact = document.querySelector(".contact");


document.addEventListener('click' , function(e){
    if(e.target.getAttribute("class") === "btn" || e.target.getAttribute("class") === "btn open"){
        toggle.classList.toggle("open")
        
        if(toggle.getAttribute("class") === "btn open"){
            links_menu.style.cssText="animation: animation_menu 0.5s ease-in-out 0s forwards;"
        }
        else{
            toggle.classList.remove("open");
            links_menu.style.cssText = "animation: none"
        }
    }
    else{
        toggle.classList.remove("open");
        links_menu.style.cssText = "animation:none"
    }
})

window.onscroll = function(){
    if(window.scrollY >= landing.offsetTop && window.scrollY < about.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[0].classList.add("active");
    }
    else if(window.scrollY >= about.offsetTop-60 && window.scrollY < gallery.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[1].classList.add("active");
    }
    else if(window.scrollY >= gallery.offsetTop-60 && window.scrollY < games.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[2].classList.add("active");
    }
    else if(window.scrollY >= games.offsetTop-60 && window.scrollY < price.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[3].classList.add("active");
    }
    else if(window.scrollY >= price.offsetTop-60 && window.scrollY < contact.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[4].classList.add("active");
    }
    else{
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[5].classList.add("active");
    }
}

























/* ==================== display Typed ==================== */
function display_typed(variable , class_value){
    if(variable){
    let slide = variable.getAttribute("data");
    let slide_string = slide.split(',');
    new Typed(`.${class_value}` , {
        strings : slide_string,
        loop : true,
        typeSpeed : 50,
        backSpeed : 25.,
        backDelay : 2000
    });
    }
}

