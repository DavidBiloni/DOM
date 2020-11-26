/*Le pasamos el boton que activa(panelbtn) y el elemento que vamos a mover(panel)
asi como tambien el menu link para cerrar una vez seleccionada lq seccion. */
export default function hamburgerMenu(panelBtn,panel,menulink){
//Guardamos lo que tenga que ver con el documento
 const d = document;
 /*Si el objeto que origina el evento coincide con el selector 
 que me estas dando en panel boton eso significa que nuestro indexdom
  */
 d.addEventListener("click", (e) => {
     /*Aqui le decimos que considere cuando se presiona el boton y tambien las lineas*/
     if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){
         /**Le decimos busca por nombre el selector y entra a su lista de clases
         cambiale la clase a is active para que se vea el panel de secciones
         lo misma para la animacion del boton  */ 
         d.querySelector(panel).classList.toggle("is-active");
         d.querySelector(panelBtn).classList.toggle("is-active");
     }
     if(e.target.matches(menulink)){
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
     }
 });
 }
