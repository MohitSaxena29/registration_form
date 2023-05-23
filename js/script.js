let inputgender;
let parsedObject;
let retrievedObject;
let myJSON;
const Validation = () => {

  // for name validation
  const firstname=document.getElementById("firstName").value;
  const lastname=document.getElementById("lastName").value;
  const nameRegex=/^[a-zA-Z\s]+$/;
  if(firstname.trim()==='' || !nameRegex.test(firstname) || firstname==='')
  {
    
    document.getElementById("firstname-error").style.visibility = 'visible';
    document.getElementById("firstName").style.borderColor="red";
    return true;
  }
  else
  {
    document.getElementById("firstname-error").style.visibility = 'hidden';
    document.getElementById("firstName").style.borderColor="#ced4da";
  }
  if(lastname.trim()==='' || !nameRegex.test(lastname)|| lastname==='')
  {
    document.getElementById("lastname-error").style.visibility = 'visible';
    document.getElementById("lastName").style.borderColor="red";
    return true;
  }
  else
  {
    document.getElementById("lastname-error").style.visibility = 'hidden';
    document.getElementById("lastName").style.borderColor="#ced4da";
  }

  // for email validation

  const email=document.getElementById('email').value;
  const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!emailRegex.test(email)|| email==='')
  {
    document.getElementById("email-error").style.visibility='visible';
    document.getElementById("email").style.borderColor="red";
    return true;
  }
  else
  {
    document.getElementById("email-error").style.visibility='hidden';
    document.getElementById("email").style.borderColor="#ced4da";
  }

  // for mobile validation
  const inputphone = document.getElementById("inputPhone").value;
  const phoneNumberRegex =/^[56789]{1}[0-9]{9}$/;
  if (inputphone!=='' && !phoneNumberRegex.test(inputphone)) {
    document.getElementById("phone-error").style.visibility = 'visible';
    document.getElementById("inputPhone").style.borderColor="red";
    return true;
  }
  
  else
  {
    document.getElementById("phone-error").style.visibility = 'hidden';
    document.getElementById("inputPhone").style.borderColor="#ced4da";
  }
    

  // for password validation

  const password=document.getElementById('password').value;
  if(password==='' || password.length<=8)
  {
    document.getElementById("password-error").style.visibility = 'visible';
    document.getElementById("password").style.borderColor="red";
    return true;
  }
  else
  {
    document.getElementById("password-error").style.visibility = 'hidden';
    document.getElementById("password").style.borderColor="#ced4da";
  }

  // for confirm password validation
  var passValue = document.getElementById("password").value;
  var confpassValue = document.getElementById("confirmPassword").value;
  if ((password.length>8) && (passValue !== confpassValue)) {
    document.getElementById("match-error").style.visibility = 'visible';
    document.getElementById("confirmPassword").style.borderColor="red";
    return true;
  }
  else
  {
    document.getElementById("match-error").style.visibility = 'hidden';
    document.getElementById("confirmPassword").style.borderColor="#ced4da";
  }
  // for question validation

  const question=document.getElementById('question').value;
  if(question==='')
  {
    document.getElementById('question-error').style.visibility='visible';
    return true;
  }
  else
  {
    document.getElementById('question-error').style.visibility='hidden';
  }
    
  // for answer validation

  const answer=document.getElementById('inputAnswer').value;
  if(answer==='')
  {
    document.getElementById('answer-error').style.visibility='visible';
    return true;

  }
  else
  {
    document.getElementById('answer-error').style.visibility='hidden';
  }
  // for gender validation

  const male=document.getElementById('male');
  const female=document.getElementById('female');
  if(male.checked==true)
  {
    document.getElementById("gender-error").style.visibility="hidden";
    inputgender='male';
  }
  else if(female.checked==true)
  {
    document.getElementById("gender-error").style.visibility="hidden";
    inputgender='female';
  }
  else
  {
    document.getElementById("gender-error").style.visibility='visible';
    return true;
  } 
}
  
const validateForm=(evt)=> {
    res = Validation();
    if (res) {
      // window.alert(res);
      return false;
    }

    

    // storing data

    const myObj = {
       fname: document.getElementById('firstName').value,
       lname: document.getElementById('lastName').value,
       email: document.getElementById('email').value,
       phone: document.getElementById('inputPhone').value,
       gender: inputgender,
       password: document.getElementById('password').value,
       question: document.getElementById('question').value,
       answer: document.getElementById('inputAnswer').value

    };

    myJSON = JSON.stringify(myObj);
    localStorage.setItem("storedData", myJSON);

    alert('Data inserted successfully');

    // retrieving data

    // READ STRING FROM LOCAL STORAGE
    retrievedObject = localStorage.getItem("storedData");

    // CONVERT STRING TO REGULAR JS OBJECT
    parsedObject = JSON.parse(retrievedObject);

    retrievedObject = localStorage.getItem("storedData");
    if(retrievedObject!=null){
    // CONVERT STRING TO REGULAR JS OBJECT
    parsedObject = JSON.parse(retrievedObject);
    console.log(parsedObject);
    let values=Object.values(parsedObject);
    let idx = 0;
      let tbody = document.getElementById('body');
      let trow=document.createElement('tr');
      for(let j = 0; j < 7; j++) {
        if(idx==4)
          idx++;
        let tdata = document.createElement('td');
        tdata.textContent = values[idx++];
        trow.appendChild(tdata);
      }
    tbody.appendChild(trow);
  }
  return false;
}

// creating table

const names=['First Name','Last Name','Email','Phone Number','Password','Secutity Question','Answer'];
let index=0;
  let thead = document.getElementById('head');
  let trow=document.createElement('tr');
  for(let j = 0; j < 7; j++) {
    let thead = document.createElement('th');
    thead.textContent = names[index++];
    trow.appendChild(thead);
  }
  thead.appendChild(trow);
  
