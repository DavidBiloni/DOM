const d = document;
let x = 0,
    y = 0;

//Primero pasamos los parametros que vmos a necesitar, para mover tenemos
//que detectar el keycode
export function moveBall(e,ball,stage){
   const $ball = d.querySelector(ball),
         $stage = d.querySelector(stage),
//Con estas variables manejamos las colisiones  de la pelota
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
      console.log(e.keyCode);
      console.log(limitsBall,limitsStage);
        
/*Para mover la pelotita con el metodo keycode vimos que al mover las
flechas nos da distintos numeros entoncen usamos un switch case 
para ir indicandole los movimientos
Hay que ejecutar un prevent default para evitar el movimiento de la
pelota y el scroll a la vez */
         switch (e.keyCode){
            case 37:
//Left Si movemos hacia la izquiera seria x--;
               if(limitsBall.left >  limitsStage.left){
                e.preventDefault();
                x--;
               } 
            break;
            case 38:
//Up si movemos hacia arriba seria y--
                if(limitsBall.top > limitsStage.top){
                    e.preventDefault();
                    y--;
                }
            break;
            case 39:
//Right si movemos hacia la derecha seria x++;
                 if(limitsBall.right < limitsStage.right){
                    e.preventDefault();
                    x++;
                 }      
            break;
            case 40:
 //Bottom si movemos hacia abajo seria y++
               if(limitsBall.bottom < limitsStage.bottom){
                    e.preventDefault();
                    y++;
                 }  
            break;
           default:
            break;
        }
        $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
        //A cada que yo pulse una tecla en la direccion que sea, vsmod a mover
        //la pelota en base al control de las variables y & x
        //El 10 es un factor a cambiar depende lo fluido que querramos el movimiemto
}


/*Guardamos en variables del dom tanto la pelota como el escenario
Para mover la pelota tenemos que detectar el keycode con ayuda de un 
switch case evaluo lo que viene el el e.keycode y ahi voy evaluando las
opciones si yo presiono 37 es izquierda 38 es arriba 39 es derecha y 40
es abajo
Luego hay que prevenir el comportamiento de la pelota con e.preventDefault
en donde en cada switch case indicamoss que la pelota no se pase de los limites
para eso utilizamos el metodo getboundingclientrect el cual nos da un objeto 
con la anchura la altura la poscicon en x y y y que tan alejado esta de los
margenes top bottom lef y right 
por eso creamos dos variables para establecer estos limites
Las variables x e y me permiten controlar el movimiento*/

//Esto es para ver como podemos manejar el comportamiento del teclado mas que nada
export function shortcuts (e){
    console.log(e);
}
/* console.log (e.type);
    console.log (e.key); 
    console.log (e.keyCode);
    Dependiendo la tecla que se presione me devolvera true o false
    console.log (`ctrl: ${e.ctrlKey}`); 
    console.log (`alt: ${e.altKey}`);
    console.log (`shift: ${e.shiftKey}`);
    console.log(e);

    Cuando el usuario presione la tecla ctrl a se ejecuta una alerta
    if(e.key === "a" && e.ctrlKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    if(e.key === "c" && e.ctrlKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if(e.key === "p" && e.ctrlKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
    Tres eventos del teclado
    El keydown se ejecutal al presionar una tecla
    El keyup al dejar de presionar una tecla
    El key-press al mantener presionada una tecla
    */