//var mongodb = require('mongodb');

var loggedUser = {};

//This function is called when login button is pressed.
function login() {

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    //alert(email + " " + password);
    console.log(email + " " + password);

    //document.getElementById("loginform").style.display = 'none';

    document.location.href='/pagine/home.html';
    //document.getElementById("sottoTitolo").innerHTML = "ciao"; //"email: " + email + " , password: " + password;
    //document.getElementById("titolo").innerHTML = "ciao";
}