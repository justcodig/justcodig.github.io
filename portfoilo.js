const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".close-button");

document.querySelectorAll(".projects_text_foot_upHill_button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const imgSrc = "./images/About_me/upHillMain_imge.jpg";
        modalImage.src = imgSrc; 
        modal.classList.remove("hidden"); 
    });
});
document.querySelectorAll(".projects_text_foot_InsideOut_button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const imgSrc = "./images/About_me/InsideOut_impo.png";
        modalImage.src = imgSrc; 
        modal.classList.remove("hidden"); 
    });
});
document.querySelectorAll(".projects_text_foot_FlowerJ4_button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const imgSrc = "./images/About_me/FlowerJ4_mypage.png";
        modalImage.src = imgSrc; 
        modal.classList.remove("hidden"); 
    });
});

closeButton.addEventListener("click", () => {
    modal.classList.add("hidden"); 
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden"); 
    }
});


const Headerlkj = document.querySelector(".Header_content_button")
const aboutme = document.querySelector(".header_nav_aboutme_button")
const stack = document.querySelector(".header_nav_stack_button")
const projects = document.querySelector(".header_nav_projects_button")

Headerlkj.addEventListener("click",()=>{
    const Top = document.querySelector(".top");
    Top.scrollIntoView({behavior:"smooth"})
})
aboutme.addEventListener("click",()=>{
    const aboutmeTop = document.querySelector(".aboutme_top");
    aboutmeTop.scrollIntoView({behavior:"smooth"})
})
stack.addEventListener("click",()=>{
    const stackTop = document.querySelector(".stack_top");
    stackTop.scrollIntoView({behavior:"smooth"})
})
projects.addEventListener("click",()=>{
    const projectsTop = document.querySelector(".projects_top");
    projectsTop.scrollIntoView({behavior:"smooth"})
})

window.addEventListener("scroll",()=>{
    const headerTop = document.querySelector(".Header_top");
    if(window.scrollY > 50){
        headerTop.classList.add("scrolled")
    }else{
        headerTop.classList.remove("scrolled")
    }
})