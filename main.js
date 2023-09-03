let links = document.querySelectorAll(".link");

links.forEach((link) => {
    link.addEventListener("click", () => {
        let image = link.querySelector("#image");
        let subLinks = link.querySelector(".sub-links");
        subLinks.classList.toggle("active");
        if(subLinks.classList.contains("active")){
            image.setAttribute("src", "images/icon-arrow-up.svg");
        }
        else{
            image.setAttribute("src", "images/icon-arrow-down.svg");
        }
    });

});

let hamburger = document.querySelector(".hamburger");
let navlinks = document.querySelector(".navbar .navlinks ul");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
    document.querySelector(".blur").classList.toggle("active");

    
})
