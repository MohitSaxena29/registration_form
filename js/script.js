const Validation = () => {
    // for password validation
    var passValue = document.getElementById("password").value;
    var confpassValue = document.getElementById("confirmPassword").value;
    if (passValue !== confpassValue) {
      return "Passwords does not match!";
    }
  
    // for mobile validation
    const inputphone = document.getElementById("inputPhone").value;
    const phoneNumberRegex = /^\d{10}$/;
    console.log(phoneNumberRegex.test(inputphone));
    if (inputphone === "" || !phoneNumberRegex.test(inputphone)) {
      return "Please enter a valid Phone Number";
    }
  };
  function validateForm(evt) {
    res = Validation();
    if (res) {
      window.alert(res);
      return false;
    }

    // retrieving data
    var fname=document.getElementById('firstName').value;
    var lname=document.getElementById('lastName').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var question=document.getElementById('question').value;
    var answer=document.getElementById('inputAnswer').value;

    // storing data

    var frontName=localStorage.setItem('fname',fname);
    var lastName=localStorage.setItem('lname',lname);
    var emailId=localStorage.setItem('email',email);
    var inputPassword=localStorage.setItem('password',password);
    var securityQuestion=localStorage.setItem('question',question);
    var securityAnswer=localStorage.setItem('Answer',answer);


    alert('Data inserted successfully');
    return true;
  }