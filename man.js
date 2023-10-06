function formValidate(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("pnum").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text="";
    if(fname.length <5){
    text ="please enter valid name";
    error.innerHTML =text;
    return false;
    }
    if(lname.length <5){
        text ="please enter valid name";
        error.innerHTML =text;
        return false;
        }
    else if( email.indexOf("@")== -1 || email.length <10 ){
        text ="please enter valid email";
        error.innerHTML =text;
        return false;
    }
    else if( password.length <11){
        text ="please enter validpass";
    error.innerHTML =text;
    return false;
    }else{
        alert("done");
        return true;
    }}