import {useState} from 'react';
import PropTypes from 'prop-types';



 
 export function CounterApp( { valor}) {
    
    //console.log("Renderizando entro",contador); No funciona porque no se ha creado contador
    const [contador, actualizaContador] = useState(valor);
    console.log("Renderizando salgo",contador);
    function sumar(event) {
        //console.log(event);
        //da error porque contador es una constante contador=contador +1;
        console.log("sumar entra:",contador)
        actualizaContador(contador +1);
        setTimeout(console.log("sumar queda:",contador),100);
        
    }
    function restar(event) {
        //console.log(event);
        //da error porque contador es una constante contador=contador +1;
        console.log("restar entra:",contador)
        actualizaContador(contador -1);
        console.log("restar queda:",contador)
    }   

    function reset(event) {
        //console.log(event);
        //da error porque contador es una constante contador=contador +1;
        console.log("reset entra:", contador)
        actualizaContador(valor);
        console.log("reset queda:", contador)
    }  
    return (
    <>
    <h1> CounterApp</h1>
    <h2 data-testid="test_2"> {contador} </h2>
    <button onClick={sumar}>+1</button>
    <button onClick={restar}>-1</button>
    <button onClick={reset}>Reset</button>
    </>
    );
}

CounterApp.propTypes = {
    valor : PropTypes.number.isRequired,
}


/* FirstApp.defaultProps = {
    titulo:'sin titulo',
    subtitulo: 'sin subtitulo',
    valor: 'sin valor'
} */