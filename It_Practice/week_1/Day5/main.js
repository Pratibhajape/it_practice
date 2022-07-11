let username;
let password;

function login(){
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;

    if((username=="pratibha")&&(password=="piu")){
        alert("login successful");
    }
    else{
        alert("login unsuccessful");
    }
}