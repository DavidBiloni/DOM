//Declaramos una contante d fuera para utilizar el documento
const d = document;

export function digitalClock(clock,btnPlay,btnStop){
    
        let clockTempo;
        d.addEventListener("click", (e) => {
            if(e.target.matches(btnPlay)){
             clockTempo = setInterval(()=> {
                  let clockHour = new Date().toLocaleTimeString();
                  d.querySelector(clock).innerHTML =`<h3>${clockHour}</h3>`;
              },1000);
              e.target.disable = true;
            }
            if(e.target.matches(btnStop)){
               clearInterval(clockTempo);
               d.querySelector(clock).innerHTML = null;
               d.querySelector(btnPlay).disable = false;
            }
        });
     }
     export function alarm(sound,btnPlay,btnStop){
       let alarmTempo;
       const $alarm = d.createElement("audio");
       $alarm.src = sound;
       d.addEventListener("click", (e) =>{
           if(e.target.matches(btnPlay)){
           alarmTempo = setTimeout(() =>{
               $alarm.play();
           },2000);
           e.target.disable = true;
           }
           if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disable = false;

           }
       })
     }


/**Reloj
 * Al document le asignamos el evento click ya que los botones funcionan al click
 * Luego en la parte del if detecto con el metodo matches que elemento 
 * origino el evento por edde indicamos el btn play y de igual manera cuando 
 * el selector sea boton stop
 * Cuando selecciono el btn play necesitamos que se este ejecutando un reloj en
 * el id reloj guardado en el primer parametro que es la variable clock
 * entonces necesito un set interval que se ejecute cada segundo y dentro lo guardamos
 * en una variable clock hour que va a ser igual a un nevo objeto de tipo date 
 * y vamos a ejecutar el metodo tolacatetimestring que me permite imprimir el 
 * reloj.
 * Al elemento que como selector tiene el selector que le pasamos en el primer 
 * parametro que esta en la variable clock que en este caso es id_reloj en su 
 * contenido inner html vamos a poner un h3 que dentro interpole el valor de la
 * variable clock hour 
 * Para que no se generen click varias veces al boton activar reloj desabilitamos
 * el reloj 
 * Para detener el reloj primero declaramos una variable vacia por el momento 
 * clock tempo cuando presione el botn play va a almecenar el set interval 
 * para asi despues ejecutar un clear interval y limpio el set interval que esta
 * en la variable clock tempo
 * tambien puedo limpar a nulo el contenido html
 * y si ya detubo pongo disable al boton play ya que es el que me interesa volver
 * a activar
 */