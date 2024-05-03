const Usuario = "nico"
const pswrd = "123"

/* Swal.fire("Bienvenido"); */

let UsuarioIgresa = prompt("Ingresa tu usuario: ")
let pswrdIngresa = prompt("Ingresa tu contraseña: ")

if(Usuario === UsuarioIgresa && pswrd === pswrdIngresa){
    Swal.fire({
  icon: "Succes",
  title: `Bienvenido ${UsuarioIgresa}`,
  text: "Hace click en el siguiente link para entrar a nuestra tienda",
  footer: '<a href="./paginas/home.html">Why do I have this issue?</a>'
});

}
else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});

}