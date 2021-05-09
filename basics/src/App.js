import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

// Props
// Argumentos que podemos pasar a traves de componentes, normalmente de componente padre a hijo

function App() {
  // Solo se debe retornar un elemento en cada component
  // Para exportar varios elementos dentro de un elemento podemos usar un div comun, o un Fragment
  
  // Uso del state
  // Se nombrea como se desea 
  // El primer elemento es el estado actual del state, el segundo es la funcion que modifica el state
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: "Camisa React", precio: 50},
    {id: 2, nombre: "Camisa Angular", precio: 40},
    {id: 3, nombre: "Camisa Vue", precio: 30},
    {id: 4, nombre: "Camisa Node", precio: 20}
  ]);

  // Usando el state para un carrtio de compras
  const [carrito, agregarProducto] = useState([]);
  const fecha = new Date().getFullYear();
  
  return (
    <Fragment>
      <h1>Hola mundo</h1>
      <Header 
        titulo="Ejemplo de titulo desde props"
        numero= {20}
      />
      <h2>Lista de productos</h2>
      {
        // Si se itera o se muestra mas de una vez el mismo component, este debe tener un "key"
        productos.map(producto => (
            <Producto 
              key={producto.id}
              producto = {producto} 
              productos = {productos} 
              carrito = {carrito}
              agregarProducto = {agregarProducto}
            />
        ))
      }
      <Carrito 
        carrito ={carrito}
        agregarProducto = {agregarProducto}
      />
      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
