import { digitalClock,alarm } from "/dom/reloj.js";
import { default as hamburgerMenu } from "/dom/menu_hamburguesa.js";
import {shortcuts,moveBall} from "/dom/teclado.js";

const d = document;
/*Esto se ejecuta en la carga del ducumento por ende indicamos
 DOMContentLoaded ya dentro del evento ejecutamos el menu de hamburguesa*/
d.addEventListener("DOMContentLoaded", ()=>{
    //Indicamos los selectores que se ven involucrados
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
});

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

//El primer parametro es el boton el segundo es la seccion  y el tercero es
//link que cierra  una  vez seleccionado una seccion



