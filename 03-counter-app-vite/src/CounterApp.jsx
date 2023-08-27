import PropTypes from 'prop-types';



 
 export function CounterApp( { valor}) {
    
    function mifuncion(event) {
        console.log(event);
        valor=19;
        console.log(valor)
    }
    
    return (
    <>
    <h1> CounterApp</h1>
    <h2> {valor} </h2>
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