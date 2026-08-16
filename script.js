// Get all HTML elements
let userName;
let userEmail;
let userPassword;
const addButton = document.getElementById("addUser");
// add event listeber to add button
addButton.addEventListener("click", () => {
    userName = document.getElementById("username").value;
    userEmail = document.getElementById("email").value;
    userPassword = document.getElementById("password").value;

    generateUsers();
});
// Create users array
const usersData = []
// Create classes
    class Users{
        constructor(name, email, password) {
            this.name = name;
            this.email = email;
            this.password = password;
        }
    }
function generateUsers() {
  document.getElementById("errorLabel").textContent = "";
    try {
        if (!userName || !userEmail || !userPassword) {
            throw new Error("Please field out the space ")
        }
    const addUser = new Users(userName, userEmail, userPassword);
    usersData.push(addUser);
    userName.innerText = "";
    userEmail.innerText = "";
    userPassword.innerText = "";
   // console.log(usersData)
    displayUsers();
    } catch(error) {
       document.getElementById("errorLabel").textContent = error;
       console.log(error)
    }
}

function displayUsers() {
  // get display background
  const usersOutput = document.getElementById("displayUsers");
  // clean div first
  usersOutput.innerHTML = "";
  // destructuring array values
  usersData.forEach((user, ind) => {
    let resultN = user.name;
    let resultE = user.email;
    let resultP = user.password;
  // create html elements
  let div = document.createElement("div")
  let nameP = document.createElement("p")
  let emailP = document.createElement("p")
  let passwordP = document.createElement("p")
  let deleteBtn = document.createElement("button")
  deleteBtn.dataset.index = ind;
  deleteBtn.addEventListener("click", (e) => {
   let getIndex = e.target.dataset.index;
   usersData.splice(getIndex, 1)
   displayUsers()
  })
  // add contens to the dom elements
  nameP.textContent = `User: ${resultN}`
  emailP.textContent = `Email: ${resultE}`
  passwordP.textContent = `Password: ${resultP}`
  deleteBtn.innerText = "Delete"
  deleteBtn.setAttribute('class', 'deletebtn')
  // add all elements to the DOM div
  div.append(nameP, emailP, passwordP, deleteBtn)
  // add all element to the page
  usersOutput.appendChild(div)
  });
}