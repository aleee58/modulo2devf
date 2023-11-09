
document.getElementById("boton").addEventListener("click", function () {
    let apodo = document.getElementById("usua").value;
    let pass = document.getElementById("contraseña").value;
  
    validador(apodo, pass);
  });
  
  var usuarios = [
    { nombre: "Ru", password: "123", dinero: 10 },
    { nombre: "Polo", password: "456", dinero: 10 },
    { nombre: "Ale", password: "789", dinero: 10 },
  ];
  
  let usuarioSeleccionado;
  let saldoUsuario = document.getElementById("loquetienes");
  
  function validador(nombre, password) {
    for (let index = 0; index < usuarios.length; index++) {
      if (nombre === usuarios[index].nombre && password === usuarios[index].password) {
        alert("¡Inicio de sesión exitoso!");
        usuarioSeleccionado = usuarios[index];
        document.getElementById("apodo").textContent = usuarioSeleccionado.nombre;
        document.getElementById("form").style.display = "none";
        document.getElementById("navbar").style.display = "block";
        document.getElementById("cartausuario").style.display = "block";
      } else if (nombre === "" || password === "") {
        alert("Los campos son obligatorios");
      } else if (usuarios[index].nombre === nombre) {
        alert("Los campos no coinciden");
      }
    }
  }

function imprimeSaldo() {
    let saldo = usuarioSeleccionado.dinero;
    saldoUsuario.textContent = saldo; // Cambio "saldousario" a "saldoUsuario"
}

document.getElementById("botonD").addEventListener("click", function () {
    let aumentoCapital = document.getElementById("capital").value;
    aumentoC(aumentoCapital);
});

function aumentoC(capital) {
    if (usuarioSeleccionado.dinero + Number(capital) > 990) {
        alert("No puedes depositar esta cantidad");
    } else {
        usuarioSeleccionado.dinero += Number(capital);
        document.getElementById("ingresa").textContent = "Depositaste $" + capital;
        document.getElementById("loquetienes").textContent = usuarioSeleccionado.dinero;
    }
}

document.getElementById("botonR").addEventListener("click", function () {
    let disminuyeCapital = document.getElementById("capital").value;
    bajaCapital(disminuyeCapital);
});

function bajaCapital(capital) {
    if (usuarioSeleccionado.dinero - Number(capital) < 10) {
        alert("No puedes retirar esta cantidad");
    } else {
        usuarioSeleccionado.dinero -= Number(capital);
        document.getElementById("ingresa").textContent = "Retiraste $" + capital;
        document.getElementById("loquetienes").textContent = usuarioSeleccionado.dinero;
    }
}

document.getElementById("nuevoSaldo").addEventListener("click", function () {
    dineroActualizado();
});

function dineroActualizado() {
    document.getElementById("saldo").textContent = "Lo que tienes es: $" + usuarioSeleccionado.dinero;
}