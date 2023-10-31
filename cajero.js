const usuario ={
        nombre:"alejandra",
        contraseña:"juasjuas",
}
function validador(nombre,contraseña){
        const form=document.getElementById("form")
        if(nombre === usuario.nombre && password=== usuario.contraseña){
                alert("login exitoso")
                form.hidden = true
        } else if(nombre=== "" || password === "") {
                alert("los campos son obligatorios")
        } else(alert("campos vacios son obligatorios"))
}
//profe no me funcionan las alertas

document.getElementById("btn").addEventListener("click", function(){
        let nombre = document.getElementById("user").value
        let contraseña = document.getElementById(password).value
        validador(nombre,contraseña)
}

)