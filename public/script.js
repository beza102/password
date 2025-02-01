document.getElementById('click').onclick = function() {
    let password = document.getElementById('password').value;
    let resultElement = document.getElementById('result');
    let length = false;
    let special = false;
    let space = false;
    let uppercase = false;
    let lowercase = false;
    let digit = false;
    let message = '<span style="color: red;">Password is invalid:</span><br>';
    let allValid = true;
 
    // Check each character in the password
    for (let i = 0; i < password.length; i++) {
        // Check for minimum length
        if (password.length >= 8) {
            length = true;
        }
       
        // Check for special character
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password.charAt(i))) {
            special = true;
        }
       
        // Check for space
        if (password.charAt(i) === " ") {
            space = true;
        }
       
        // Check for uppercase letter
        if (password.charAt(i) === password.charAt(i).toUpperCase() && password.charAt(i) !== password.charAt(i).toLowerCase()) {
            uppercase = true;
        }
 
        // Check for lowercase letter
        if (password.charAt(i) === password.charAt(i).toLowerCase() && password.charAt(i) !== password.charAt(i).toUpperCase()) {
            lowercase = true;
        }
 
        // Check for digit
        if (/\d/.test(password.charAt(i))) {
            digit = true;
        }
    }
 
    //message
    if (!length) {
        message += '<span style="color: red;"> Password must be at least 8 characters long.</span><br>';
        allValid = false;
    }
 
    if (!special) {
        message += '<span style="color: red;"> Password must contain at least one special character(!,@,#,etc).</span><br>';
        allValid = false;
    }
 
    if (space) {
        message += '<span style="color: red;"> Password should not contain spaces.</span><br>';
        allValid = false;
    }
 
    if (!uppercase) {
        message += '<span style="color: red;"> Password must contain at least one uppercase letter.</span><br>';
        allValid = false;
    }
 
    if (!lowercase) {
        message += '<span style="color: red;"> Password must contain at least one lowercase letter.</span><br>';
        allValid = false;
    }
 
    if (!digit) {
        message += '<span style="color: red;"> Password must contain at least one digit.</span><br>';
        allValid = false;
    }
 
    // Show valid password message if everything is correct
    if (allValid) {
        message = '<span style="color: green;"> Valid password!</span>';
    }
 
    resultElement.innerHTML = message; // Display the message
};
 