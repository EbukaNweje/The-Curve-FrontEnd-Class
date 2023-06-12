let data =  JSON.parse(localStorage.getItem("MyUserData")) || []




localStorage.setItem("MyUserData", JSON.stringify(data))


// const mydata = data.map((props)=>{console.log(props.UserName)})
// console.log(mydata)

const NewUserName = document.querySelector(".UserName")
const NewUserText = document.querySelector(".UserText")
const Btn = document.querySelector(".Btn")

Btn.onclick = () => {
    let UserName = NewUserName.value
    let userText = NewUserText.value
    let Profile = UserName.charAt(0)

    let newData = {UserName, userText, Profile}
    data.push(newData)
    localStorage.setItem("MyUserData", JSON.stringify(data))
    window.location.reload()
}


const UserOutputdiv = document.querySelector(".UserOutputdiv")
data.forEach((props)=>{
    const myinfo = `
    <div class="OutPutHold">
    <div class="OutCard">
        <div class="OutCardHeader">
            <h5>${props.UserName}</h5>
            <span>X</span>
            <div class="Profile">${props.Profile}</div>
        </div>
        <div class="OutCardText">
            <p>${props.userText}</p>
        </div>
    </div>
</div>
    `

    UserOutputdiv.innerHTML += myinfo
})
