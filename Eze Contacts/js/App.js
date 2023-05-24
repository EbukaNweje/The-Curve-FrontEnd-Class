let Name = document.querySelector(".Name")
let Email = document.querySelector(".Email")
let PhoneNumber = document.querySelector(".PhoneNumber")
let Group = document.querySelector(".Group")
let Btn = document.querySelector(".Btn")


let MyInfo = JSON.parse(localStorage.getItem("ContactsInfo")) || []
 let container = ["red", "blue", "green", "yellow", "pink", "black"]

Btn.onclick = (e) => {
    e.preventDefault()
    if(!Name.value || !Email.value || !PhoneNumber.value || !Group.value){
        alert("You can not leave any field")
    }else{ 
    let UserName = Name.value
    let UserEmail = Email.value
    let UserPhoneNumber = PhoneNumber.value
    let UserGroup = Group.value
    let logo = UserName.charAt(0).toUpperCase()

    let color = Math.floor(Math.random()*container.length)
    let showColor = container[color]
    
    let AllData = {UserName, UserEmail, UserPhoneNumber, UserGroup, logo, showColor}
    MyInfo.push(AllData)
    localStorage.setItem("ContactsInfo", JSON.stringify(MyInfo)) 
    window.location.reload()
    }
}

console.log(MyInfo)