// function showPop(){
//     alert("I de work")
// }

const showPopBtn = document.querySelector(".Btn")
const popCard = document.querySelector(".PopCard")
const closs = document.querySelector(".Closs")


showPopBtn.onclick = ()=>{
    popCard.style.display = "flex"
}
closs.onclick = ()=>{
    popCard.style.display = "none"
}