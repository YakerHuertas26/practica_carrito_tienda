
import { ContentLista,ProductoCarrito } from "../styles/CarritoComprasStyles";


const CarritoCompra = ({lista}) => {
    
    return (
        <div>
        <h3>Carrito de compras</h3>
        {
            lista.length>0?
            lista.map((element)=>{
                return(
                <ContentLista key={element.id}>
                    <ProductoCarrito >
                        {element.producto}         
                    </ProductoCarrito>
                    <p>Cantidad: {element.cantidad}</p> 
                </ContentLista>
                
                )
            })
            :
            <p>Aún no hay productos agredados</p>
        }
        </div>
    );
}

export default CarritoCompra;