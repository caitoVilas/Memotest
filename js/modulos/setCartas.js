const d = document;

export default function recargarCartas(){

    const valor = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
    let cartasFrente = mezclarCartas(valor);
    const imgCard = [];
    

    const $cartas = d.querySelectorAll('.imagen');
    
         
    
    for(let carta of $cartas){
        carta.src = '../assets/img/carta_reverse.png';
        carta.setAttribute('data-card','back');
        
    }
    

    for(let x = 0; x < 18; x++){
        let imgUrl = cartasFrente[x]+'.png';
        imgCard.push(imgUrl);
    }
  
    jugar(imgCard)
   
}

function mezclarCartas(valor){
    const cartasDesordenadas = valor.sort(() => {return Math.random() - 0.5});
    return cartasDesordenadas;
}

function jugar(imgCard){

    let aciertos = 0;
    let juego = 0;
    let comparacion = [];
    let $elemento1, $elemento2;


        d.addEventListener('click', e => {

            const $element = e.target;
            if($element.getAttribute('data-card') === 'back'){
                $element.setAttribute('data-card','front');
                if(juego === 0){
                    $elemento1 = $element;
                    const indice = $element.id.substring(4,6);
                    const imagen = imgCard[indice];
                    $element.src = `../assets/img/${imagen}`;
                    comparacion.push(imagen);
                    juego++;
                }else{
                    $elemento2 = $element;
                    const indice = $element.id.substring(4,6);
                    const imagen = imgCard[indice];
                    $element.src = `../assets/img/${imagen}`;
                    comparacion.push(imagen);
                    juego++;
                }
                

                if(juego === 2){

                   if(comparacion[0] === comparacion[1]){
                       juego = 0;
                       comparacion = [];
                       aciertos++;
                   }else {
                       juego = 0;
                       comparacion = [];
                       setTimeout(() => {
                           $elemento1.src = `../assets/img/carta_reverse.png`;
                           $elemento1.setAttribute('data-card','back');
                           $elemento2.src = `../assets/img/carta_reverse.png`;
                           $elemento2.setAttribute('data-card','back');
                       },500);
                   }
                   if(aciertos === 9){
                       alert('Feleicitaciones, Has Ganado');
                       aciertos = 0;
                       location.reload();
                   }
                }  
            }
        });
}
