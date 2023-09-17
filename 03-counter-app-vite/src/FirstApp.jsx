 
 import PropTypes from 'prop-types';


 const miFuncion = () => {
    return "Un literal"
 }
 
 export function FirstApp( {titulo, subtitulo='subtitulo vacio', valor}) {
    return (
    <>
    <h1> FirstApp!! {titulo}</h1>
    <p> Parrafo {subtitulo }</p>
    <p>{miFuncion()} {valor}</p>
    </>
    );
}

FirstApp.propTypes = {
    titulo : PropTypes.string.isRequired,
}


FirstApp.defaultProps = {
   // titulo:'sin titulo',
    subtitulo: 'sin subtitulo',
    valor: 'sin valor'
}