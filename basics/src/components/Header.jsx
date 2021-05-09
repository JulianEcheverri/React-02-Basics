import { React } from "react";

// // Pasandole props al Herader component
function Header(props) {
    // console.log(props);
    const variableEnHtml = "Ejemplo de variable en html";
    /**
     Codigo js/typescript antes del return de cada componente
     */

    return (
        // <h1>Desde el Header component</h1>
        // <h2>Header component: {variableEnHtml}</h2>
        <h2>Header component: {props.titulo}</h2>
    )
}

export default Header;

// Usando Object Destructuring
// function Header({titulo}) {
//     console.log(titulo);
//     const variableEnHtml = "Ejemplo de variable en html";
//     /**
//      Codigo js/typescript antes del return de cada componente
//      */

//     return (
//         // <h1>Desde el Header component</h1>
//         // <h2>Header component: {variableEnHtml}</h2>
//         <h2>Header component: {titulo}</h2>
//     )
// }

// export default Header;
