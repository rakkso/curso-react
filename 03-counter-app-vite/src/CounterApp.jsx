import {useState} from 'react';
import PropTypes from 'prop-types';



 
 export function CounterApp( { valor}) {
    
    const [contador, actualizaContador] = useState(valor);

    function mifuncion(event) {
        console.log(event);
        //da error porque contador es una constante contador=contador +1;
        actualizaContador(contador +1);
        console.log(contador)
    }
    
    return (
    <>
    <h1> CounterApp</h1>
    <h2> {contador} </h2>
    <button onClick={mifuncion}>{valor}</button>
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