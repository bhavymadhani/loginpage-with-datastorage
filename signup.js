validateForm = () => {
    var fullName = document.myForm.fname.value;
    var email = document.myForm.email.value;
    var phoneNumber = document.myForm.phonenumber.value;
    var password = document.myForm.pass.value;


    if (fullName == null || fullName == "") {
        document.getElementById("msg").innerHTML = "***enter the fullname";
        return false;
    } else if (email == null || email == "") {
        document.getElementById("msg1").innerHTML = "***Please Enter Your Email Address";
        return false;

    } else if (phoneNumber == null || phoneNumber == "") {
        document.getElementById("msg2").innerHTML = "***Please Enter Your Phone Number.";
        return false;
    } else if (password.length < 6) {
        document.getElementById("msg3").innerHTML = "**Password length must be atleast 8 characters";
        return false;

    }
    if (password.length > 15) {
        document.getElementById("msg3").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    } else {
        return true;

    }


}

function matchPass() {
    var password = document.myForm.pass.value;
    var cpassword = document.myForm.cpassword.value;

    if (password == cpassword) {
        return true;
    } else {
        alert("password must be same!");
        return false;
    }
}


//**************************************************************************************************************** *//                                  to save data in localstorage
//*************************************************************************************************************** */


saveData = () => {
    let name, email, phoneNumber, pass, gender;

    name = document.getElementById("fname").value
    email = document.getElementById("email").value
    phoneNumber = document.getElementById("tel").value
    pass = document.getElementById("pass").value
    gender = document.getElementById("gender", "genderF", "genderO").value

    // array for data Storage


    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? user_records = JSON.parse(localStorage.getItem("users")) : []

    if (user_records.some((v) => { return v.email == email })) {
        alert(email + " is already register.")


    } else {


        user_records.push({
            "fname": name,
            "email": email,
            "tel": phoneNumber,
            "pass": pass,
            "gender": gender
        })
    }



    localStorage.setItem("users", JSON.stringify(user_records))
    alert(email + "Thanks for Registration. \n Try to login Now");


}