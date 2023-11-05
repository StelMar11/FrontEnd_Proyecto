
function valorEntrada() {

    var capCantidad = document.getElementById('cantidad').value;
    var capCategoria = document.getElementById('categoria').value;
    const TICKET = 200;
    var resumenTotal=0;
 
    if(capCategoria==0) {
       resumenTotal = capCantidad*TICKET;
    }
 
    if(capCategoria==1) {
       resumenTotal = capCantidad*TICKET*0.2;
    }
     
    if(capCategoria==2) {
       resumenTotal = capCantidad*TICKET*0.5;
    }
     
    if(capCategoria==3) {
       resumenTotal = capCantidad*TICKET*0.85;
    }

    document.getElementById('total').innerText = resumenTotal;
      
 }
 
 
 function controlForm() {
    if(nombre.value===""){
       nombre.classList.add("is-invalid");
      nombre.focus();
    }
    else {
       nombre.classList.remove('is-invalid');
    }
    if(apellido.value===""){
        apellido.classList.add("is-invalid");
       apellido.focus();
     }
     else {
        apellido.classList.remove('is-invalid');
     }

    const correo = mail.value;
 
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
    if (regex.test(correo)) {
       mail.classList.remove('is-invalid');
    } else {
       mail.classList.add("is-invalid");
       mail.focus();
    }
    
    valorEntrada();  
    
 }
 
 const BTNCLICK = document.getElementById('btnResumen');

 BTNCLICK.addEventListener('click',valorEntrada);
 
 BTNCLICK.addEventListener('click',controlForm);

 const BTNONCLICK = document.getElementById('btnBorrar');
 BTNONCLICK.addEventListener('click', borrar);
 function borrar() {
    document.getElementById("total").innerHTML = "";
  }
 
 






 




