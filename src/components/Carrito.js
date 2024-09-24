import Producto from "./productos";


const Carrito = ({datos,agregarCarrito}) => {
    return ( 
        <div>
            <h2>Tienda</h2>
            <Producto datos={datos} agregarCarrito={agregarCarrito}/>
        </div>
    );
}
 
export default Carrito;