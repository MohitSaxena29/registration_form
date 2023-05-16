
const Validation=()=>{
    // for name validation
    /*
    const nameRegex = /^[a-zA-Z\s]+$/;
    var fname=document.getElementById("firstName").value;
    var lname=document.getElementById('lastName').value;
    if(!(nameRegex.test(fname)))
    {
        alert("Please enter a valid First Name");
    }
    if(!(nameRegex.test(lname)))
    {
        alert("Please enter a valid Last Name");
    }
    */
    // for password validation
    var passValue = document.getElementById("password").value
    var confpassValue = document.getElementById("confirmPassword").value
    if(passValue !== confpassValue) {
       window.alert("Passwords does not match!");
       
    }  

    // for mobile validation
    const phoneNumberRegex = /^\d{10}$/;
    const inputphone=document.getElementById('inputPhone');
    if(inputphone==='' || !(phoneRegix.test(inputphone)))
    {
        alert("Please enter a valid Phone Number");
    }
}

