


loginButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const username = usernameInput.ariaValueMax.trim();
    const password = passwordInput.ariaValueMax.trim();
});

function validateForm() {
    const Login = document.getElementById('login-form');
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const loginButton = document.getElementById('botton');
    const errorMessage = document.getElementById('error-message');

    if(usernameInput === ""|| password === "" ){
        alert("Username and password must be filled out");
        return false;
    }

    if(usernameInput === "user" && passwordInput === "password"){
        alert("Login successful")
        window.location.href = "mainform.html";
        return true;
    }else{
        alert("Invalid username or password");
        return false;
    }        
}     
