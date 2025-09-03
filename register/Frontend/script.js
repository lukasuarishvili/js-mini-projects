// DOM ELEMENTS
const body = document.querySelector("body");
const submitButton = document.getElementById("submit");

// DOM INPUT ELEMENTS
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");



//FUNCTION TO DISPLAY THE WELCOME MESSAGE
function displayWelcome(name) {
    body.className = "min-h-screen flex items-center justify-center bg-welcome text-white roboto-main";
    body.innerHTML = `
      <div class="text-center p-6">
        <h1 class="text-4xl font-bold mb-4">HA 😁 HA </h1>
        <p class="text-lg">I got your info, ${name}</p>
        <p class="mt-4 text-sm opacity-80">Be safer next time</p>
      </div>
    `;
}

// FUNCTION THATS  CHECKS CLIENTS INPUTS AND VALIDATES THEM
function validateForm() {

    //GETING ELEMENTS
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    //IF ANY OF THIS CRITERIA IS NOT FUFILED THEN RETURN FALSE


    //IF THERE ARE ANY INPUT FILDES EMPTEY
    if (name === "" || surname === "" || email === "" || password === "") {
        alert("All fields are required.");
        return false;

        //CHECK IF USERS NAME AND SURNAME ARE CAPITALIZED
    } else if (name.charAt(0).toUpperCase() != name.charAt(0) || surname.charAt(0).toUpperCase() != surname.charAt(0)) {
        alert("Name and Surname must be capitalized")
        return false
        //CHECK PASSWORDS LENGHT
    } else if (password.length < 8) {
        alert("password is to short")
        return false
    }


    return true;
}

// FUNCTION TO  CHECK FOR DUPLICATE  USERS IN THE DATABASE 
async function checkDuplicateUser(email) {
    //SEND POST REQUEST TO THE SERVER WITH EMAIL AS ITS BODY
    const url = "http://localhost:3030/checkDuplicateUser";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    });

    // CHECK IS REQUSET HAS BEEN SECSESSFULL
    if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
    }
    //THE SERVER RESPONES IS A JSON LIKE THIS { isDuplicate: true }
    const result = await response.json();
    return result.isDuplicate;
}

//FUNCTION TO ADD USERS TO THE DATABASE 
async function addUser(user) {
    // SENDS A POST REQUEST TO THE SERVER WITH BODY BEENG USERS INFO 
    const url = "http://localhost:3030/addUser";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    // CHECK IS REQUSET HAS BEEN SECSESSFULL
    if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
    }

    return await response.json();
}

//
submitButton.addEventListener('click', async (event) => {
    event.preventDefault(); // STOP THE  FORM FROM  SUBMITTING IMMEDIATLY

    //VALIDATE FORM 
    if (!validateForm()) {
        return; //STOPS PROGRAM
    }
    //GET DOM ELEMENTS
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    //MAKE OBJ FROM USERS INPUTS
    const user = { name, surname, email, password };

    try {
        //CHECKING FOR DUPLICATE USERS BY EMAIL
        const isDuplicate = await checkDuplicateUser(email);

        if (isDuplicate) {
            alert("This email is already registered. Please use a different one.");
            return; //STOPS PROGRAM
        }

        //ADDS THE USERS
        await addUser(user);

        //SHOWS WELCOMEPAGE
        displayWelcome(name);

    } catch (error) {
        //CHECKING ANY ERORSS
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again later.");
    }
});
