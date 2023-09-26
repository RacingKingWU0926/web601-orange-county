const emailHTML = "<label>Enter your email:</label><input type='email' name='email' placeholder='johndoe@gmail.com'>"
const phoneHTML = "<label>Enter your phone:</label><input type='text' name='phone' placeholder='xxx-xxx-xxxx'>"

const selectElement = document.getElementById("contactMethod");

// contact-method select event handler
function showContactInput() {
    const selectedOption = selectElement.options[selectElement.selectedIndex].value;

    if (selectedOption === "Email") {
        document.getElementById("contactInput").innerHTML = emailHTML;
    } else if (selectedOption === "Phone") {
        document.getElementById("contactInput").innerHTML = phoneHTML;
    } else {
        document.getElementById("contactInput").innerHTML = "";
    }
}

// contact-method select event listener
selectElement.addEventListener("change", showContactInput);
