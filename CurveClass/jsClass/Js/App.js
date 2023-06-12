// const BigDev = document.querySelector(".BigDev")
// const Btn = document.querySelector(".Btn")
// const ShowDiv = document.querySelector(".ShowDiv")
// const Password = document.querySelector(".Password")

// // Btn.onclick = () => {
// //   if(Btn.innerHTML ==="Show Input"){
// //     ShowDiv.style.display= "block"
// //     Btn.innerHTML = "Hide Input"
// //   }else{
// //     ShowDiv.style.display= "none"
// //     Btn.innerHTML = "Show Input"
// //   }
// // }
// Btn.onclick = () => {
//   if(Password.type === "password"){
//     Password.type="text"    
//     Btn.innerHTML="Hide Password"
//   }else{
//     Password.type="password"
//     Btn.innerHTML="Show Password"
    
//   }
// }

// text.value="i love code"
// const text = document.querySelector(".text")
const UserName = document.querySelector(".UserName")
const PassWord = document.querySelector(".PassWord")
const PassWordShow = document.querySelector(".PassWordShow")
const Show = document.querySelector(".Show")
const Btn = document.querySelector(".Btn")


PassWordShow.onclick = () => {
  if(PassWordShow.checked === true){
    PassWord.type = "text"
    Show.innerHTML = "Hide password"
  }else{
    PassWord.type = "password"
    Show.innerHTML = "Show password"
  }
}

