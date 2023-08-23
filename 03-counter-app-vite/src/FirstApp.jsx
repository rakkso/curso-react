 
 const miFuncion = () => {
    return "Un literal"
 }
 
 export function FirstApp( prop) {
    return (
    <>
    <h1> FirstApp!!</h1>
    <p> Parrafo {prop.titulo }</p>
    <p>{miFuncion()}</p>
    </>
    );
}