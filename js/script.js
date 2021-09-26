//



let login = document.getElementById("login");
login.addEventListener("click",logueo);

function logueo (){
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;
    let errorlabel = document.getElementById("error");
    if(usuario === ""|| pass ==="")
    {
        errorlabel.textContent= "Usuario y/o Contraseña no ingresados";
    }
    else
    {
        errorlabel.textContent="";
    }
};