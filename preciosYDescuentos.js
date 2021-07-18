/**
 * Forula para obtener el descuento:
 * (Precio * (100 - Descuento)) / 100
 */

// Interacción HTML & JS

// function calculaDescuento(){
//   const inputPrecio = document.getElementById("InputPrecio");
//   const precio = inputPrecio.value;
//   const inputDescuento = document.getElementById("InputDescuento");
//   const descuento = inputDescuento.value;
//   let calc = (precio * (100 - descuento)) / 100;
//   alert(`El valor final a pagar es de: ${calc}`);
// }

//implementar descuentos con cupones


function calculaDescuento(precio, descuento){
  let calc = (precio * (100 - descuento)) / 100;
  return calc;
}

function calculaDescuentoCupon(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  console.log(priceValue);
  
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;
  
  let descuento;

  switch(couponValue) {
    case "JuanDC_es_Batman":
      descuento = 15;
    break;
    case "pero_no_le_digas_a_nadie":
      descuento = 30;
    break;
    case "es_un_secreto":
      descuento = 25;
    break;
  }

  const precioConDescuento = calculaDescuento(priceValue, descuento);
  console.log(precioConDescuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}