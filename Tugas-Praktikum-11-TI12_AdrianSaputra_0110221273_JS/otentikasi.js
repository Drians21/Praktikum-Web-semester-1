function login(){
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "adrian" && password == "adrian"){
        // window.open("file:///C:/xampp/htdocs/Praktikum/Pertemuan-11/login-berhasil.html");
        alert("login berhasil");
        // window.open("login-berhasil.html");
       
       
    }
    else{
        alert("login gagal");
    }
    
}