let MyInfo = JSON.parse(localStorage.getItem("ContactsInfo")) 
console.log(MyInfo) 

const Main = document.querySelector(".Main")


MyInfo.forEach((props) => {
    const showdata = `
    <div class="ViewCard">
        <div class="Logo" style="background:${props.showColor}">${props.logo}</div>
        <span>Name: ${props.UserName}</span>
        <span>Email: ${props.UserEmail}</span>
        <span>Tel: ${props.UserPhoneNumber}</span>
        <span>Group: ${props.UserGroup}</span>

        <button class="delete">Delete</button>
    </div>
    `

    Main.innerHTML += showdata
});