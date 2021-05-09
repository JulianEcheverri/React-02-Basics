const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    const producto = carrito.filter((producto) => producto.id !== id);
    // console.log(producto);
    agregarProducto(producto);
  };

  return (
    <div>
      <h3>
        {producto.nombre} - ${producto.precio}
      </h3>

      {productos ? (
        <button
          type="button"
          id="comprar"
          onClick={() => seleccionarProducto(producto.id)}
        >
          Comprar
        </button>
      ) : (
        <button
          type="button"
          id="eliminar"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
