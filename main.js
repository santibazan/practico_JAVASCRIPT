
//trabajo practico javascript
//1. Introducción a JavaScript
console.log("Ejercicio 1");
// ejercicio 2
{let a = 15;
let b = 20;
let c = a+b;

console.log("La suma de a + b es: "+c);
} 
let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("¡Hola, " + nombre + "!");

//2. Operadores lógicos y condicionales
console.log("Ejercicio 2");
{let a = 10;
let b = 7;
let mayor = a > b ? "El numero mayor es "+ a: "El numero mayor es " + b; 
console.log(mayor)
}

let numeroPar = prompt("Ingrese un numero para saber si es par o impar");
if(numeroPar % 2 == 0){
  console.log("El numero es par")
}else[
  console.log("El numero es impar")
]
//3. Operadores de asignación y bucles
console.log("Ejercicio 3");
let rest = 10;
while(rest > 0){
  console.log(rest);
  rest -= 1;
}

let numeroMay;
do{
  numeroMay = prompt("Ingrese un numero mayor a 100");
}while(numeroMay<=100);
console.log("Ingresaste un numero mayor a 100: " + numeroMay);


//4. Funciones de JavaScript
let num = prompt("Ingrese un numero para saber si es par o impar");
esPar(num);


function esPar(num){
  let par = num % 2 == 0 ? console.log("El numero "+ num + " es par: " + true) : console.log("El numero "+ num + " es par: " + false);
}

let grados = prompt("Ingrese una cantidad en grados celsius para despues convertirlos en fahrenheit");
convertirCelsiusAFahrenheit(grados);

function convertirCelsiusAFahrenheit(cel){
  let fahrenheit = ((cel*1.8)+32);
  console.log(cel +"°C son equivalentes a "+ fahrenheit +"°F");
}

//5. Objetos en JavaScript
let persona = {
  nombre: "santiago",
  edad: "22",
  ciudad: "Mendoza"
}
console.log(persona);
function actualizar(persona){
  persona.ciudad = "Buenos Aires"
}
actualizar(persona);
console.log(persona);

let libro = {
  titulo: "Don quijote",
  autor: "Santiago Bazan",
  anio: 2014
}
function corroborar(libro){
  if(libro.anio<2014){
    console.log("El libro "+ libro.titulo + " es antiguo: "+ true)
  }else{
    console.log("El libro "+ libro.titulo + " es reciente: "+ true)
  }
}
corroborar(libro);
//5. ARRAYS

let numeros= [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i<numeros.length; i++){
  numeros[i]*=2;
}
console.log(numeros);

let pares =[];
for(let i = 1; i<=10; i++){
  pares.push(i*2);
}
console.log(pares);

//7. Introduccion al DOM

const button = document.getElementById("button");
const p = document.getElementById("pElemento")


const hadleStylebutton = ()=>{
  button.classList.add("redButton")
}

const hadleStyleP = ()=>{
  p.classList.add("blueP");
}

button.addEventListener("click", ()=>{
  hadleStyleP();
})


const buttonInput = document.getElementById("buttonInput");

const getDataInputs = () =>{
  const mensaje = document.getElementById("mensaje").value

  alert("has ingresado: "+ mensaje)
}

buttonInput.addEventListener("click", ()=>{
  getDataInputs();
})


//8. Eventos en DOM
const elementosLi = document.querySelectorAll(".lii");

const getDataInputs1 = (element) =>{
  const valorLii = element.textContent;

  console.log({
    valorLii
  });
}

elementosLi.forEach(li => {
  li.addEventListener("click", () => {
    getDataInputs1(li);
  });
});


const input = document.getElementById("miInput");
const buttonDes = document.getElementById("buttonDes");
const buttonHab = document.getElementById("buttonHab");



buttonDes.addEventListener("click", ()=>{
  input.disabled = true;
});
buttonHab.addEventListener("click", ()=>{
  input.disabled = false;
});

// 9. LocalStorage

const buttonSave = document.getElementById("buttonSave");
const emailDisplay = document.getElementById("emailDisplay");

const getDataInputs2 = ()=>{
  const email = document.getElementById("email").value;

  if(email){
    localStorage.setItem("datos", JSON.stringify({email}));

    mostrarCorreo(email);
  }
};

const mostrarCorreo = (email)=>{
  emailDisplay.innerHTML= "";

  const emailText = document.createElement("p");
  emailText.textContent = "Correo Guardado: ${email}";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.addEventListener('click', eliminarCorreo);

  emailDisplay.appendChild(emailText);
  emailDisplay.appendChild(deleteBtn);
};

const eliminarCorreo = () => {
  localStorage.removeItem('datos');
  emailDisplay.innerHTML = '';
};

buttonSave.addEventListener("click", (event) => {
  event.preventDefault();
  getDataInputs2();
});

window.onload = function () {
  const datosGuardados = JSON.parse(localStorage.getItem("datos"));
  if (datosGuardados && datosGuardados.email) {
    mostrarCorreo(datosGuardados.email);
  }
};
