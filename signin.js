function validateForm() {

    var name = document.myForm.email.value;
    var pass = document.myForm.pass.value


    if (name == "") {
        document.getElementById("errormsg").innerHTML = "***please fill the username";
        return false;

    } else if (pass == "" || pass == null) {
        document.getElementById("errormsgs").innerHTML = "***please fill the pass";
        return false;
    } else if (pass.length < 6) {
        document.getElementById("errormsgs").innerHTML = "***pass lenght must be atleast 8 characters";
        return false;
    } else if (pass.length > 15) {
        document.getElementById("errormsgs").innerHTML = "***pass lenght must not exceed 15 characters";
        return false;
    } else {
        return true;
    }
}

/***************************************************************************************************************** *                                        to save data in local Storage
 *****************************************************************************************************************/

 let name = localStorage.getItem('name') ? localStorage.getItem('name') : ''
 console.log(name);
 if (name != '') {
     alert('Please visit profile');
     window.location.href = "last.html";
 }
 
 function saveData() {
     let email, pass;
 
     email = document.getElementById("email").value;
     pass = document.getElementById("pass").value;
 
 
     // Array For Data Storage
 
     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users")) || []
 
     if (user_records.some((v) => { return v.email == email && v.pass == pass })) {
         alert(email + "\n Welcome To The Journy");
 
         let current_user = user_records.filter((v) => { return v.email == email && v.pass == pass })[0]
 
         localStorage.setItem('name', current_user.fname);
         localStorage.setItem('email', current_user.email);
 
 
         window.location.href = "./last.html";
 
     } else {
         alert('Password For ' + email + ' Is Wrong , Please Try Again');
 
     }
 }