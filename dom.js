let botonNegro = document.querySelector("#Negro")
botonNegro.onmouseover =
function (){
    foto.src = "cronosNegro.png"
    Texto.innerText = "NEGRO VULCANO"
} 
let botonBlanco = document.querySelector("#Blanco")
botonBlanco.onmouseover =
function (){
    foto.src = "cronosBlanco.png"
    Texto.innerText = "FIAT BLANCO"

} 
let botonRojo =  document.querySelector("#Rojo")
botonRojo.onmouseover =
function (){
    foto.src = "cronosRojo.png"
    Texto.innerText = "FIAT ROJO"
} 
let Texto =
document.querySelector("#nombreColor")
let foto =
document.querySelector("#fotoCronos")
let botonInfo = 
document.querySelector("#info")
botonInfo.onclick =
function edades (edad){
    edad = Number(prompt ('Por favor ingerse su edad '))
       if ( edad>=18)
   {
       prompt ('Por favor escribe tu correo email')
       alert ("Nuestros desarolladores te contactaran en algun momento")
   
    } else {
       alert ("Lo siento no tienes edad para acceder a la informacion.")
}
}