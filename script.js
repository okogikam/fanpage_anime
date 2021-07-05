const btnMenu = document.querySelector(".menu-control")
const menu1 = document.querySelector(".menu-1")
const menu2 = document.querySelector(".menu-2")

btnMenu.addEventListener("click", ()=>{
if(menu1.classList.contains("view")){
    menu1.classList.remove("view")
    menu2.classList.add("view")
}else{
    menu2.classList.remove("view")
    menu1.classList.add("view")
}
})