const menuCollapseEl = document.querySelector(".menu-collapse");
const linksContainerEl=document.querySelector(".navbar-right-menu");
if (menuCollapseEl && linksContainerEl){
    menuCollapseEl.addEventListener("click", () =>{
        menuCollapseEl.classList.toggle("active");

        const appLogoEl =document.querySelector(".app-logo2")

        if(linksContainerEl.classList.contains("active")){
            menuCollapseEl.src ="./assets/close.svg";
            appLogoEl.src ="assets/closethedoor.svg";
        }
        else{
            menuCollapseEl.src ="./assets/open.svg"; 
            appLogoEl.src ="assets/Hire Me.svg";
        }
    });

}
