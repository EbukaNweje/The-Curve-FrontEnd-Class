const Btn = document.querySelector(".Btn")
const Inp = document.querySelector(".Inp")
const ColorShow = document.querySelector(".ColorShow")
             
Btn.onclick = () => {
    ColorShow.style.background= Inp.value
}
