

/* 
TAREAS:
    PRINCIPAL: CALCULAR EL VALOR DE TICKETS ADQUIRIDOS SEGUN CANTIDAD Y CATEGORIA DE DESCUENTO
    1. ESTABLECER VALOR DE UN TICKET
    2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS
    3. CONOCER LA CANTIDAD DE TICKETS Y EL DESCUENTO CORRESPONDIENTE
    4. EN CASO QUE EXISTA DESCUENTO APLICARLO AL VALOR UNITARIO DEL TICKET
    5. MULTIPLICAR LA CANTIDAD DE TICKETS POR EL VALOR UNITARIO DE TICKET CON EL DESCUENTTO SI CORRESPONDE
    6. MOSTRAR EL TOTAL DE LA COMPRA EN LA PANTALLA
    
    SECUNDARIAS:
    1. VALIDAR LOS DATOS INGRESADOS POR EL USUARIO
    2. PODER BORRAR EL FORMULARIO AL PRESIONAR UN BOTON


*/
//  1. ESTABLECER VALOR DE UN TICKET
const TICKET = 200;

// 2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS

const ESTUDIANTE = 80;
const TRAINEE = 50;
const JUNIOR = 30;

// 3. CREAR VARIABLES DE LOS ELEMENTOS
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
let categoria = document.querySelector("#categoriaSelect");
let resultado = document.querySelector("#totalPago");
let btnBorrar = document.querySelector("#btnBorrar");
let btnCalcular = document.querySelector("#btnResumen");
let costo = document.querySelector("#label-costo");

// 4. APLICAR LA ESTRATEGIA PARA ESCUCHAR O CAPTURAR EL EVENTO

btnCalcular.addEventListener("click", calcularTotal);
btnBorrar.addEventListener("click", borrar);
cantidad.addEventListener("click", calcularValor);
categoria.addEventListener("click", calcularValor);

function calcularTotal(event) {
  event.preventDefault();
  let descuento = calcularDescuento(categoria.value);  
  let valor = (TICKET - descuento) * cantidad.value;  
  costo.textContent = "El costo total de los boletos es de " + valor + " $.";  
}

function calcularValor(){
    let descuento = calcularDescuento(categoria.value)
    let valor = (TICKET - descuento) * cantidad.value;  
    resultado.textContent = valor;
}

function calcularDescuento(categoria) {
  switch (categoria) {
    case "0":
      return 0;
    case "1":
      return (TICKET * 80) / 100;
    case "2":
      return (TICKET * 50) / 100;
    case "3":
      return (TICKET * 15) / 100;
    default:
      return 0;
  }
}

function borrar() {
  nombre.value = "";
  apellido.value = "";
  cantidad.value = "";
  categoria.value = "";
  resultado.textContent = "";
}
//Validacion

