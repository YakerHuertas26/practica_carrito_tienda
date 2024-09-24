import {ContentProductos,Productodatos,Boton} from "../styles/productosStyles";




const Producto = ({datos, agregarCarrito}) => {

    
    return ( 
        <div>
            <h3>Productos</h3>
            <ContentProductos>
                {datos.map((element)=>{
                    return(
                    <Productodatos key={element.id}>
                        <p >{element.nombre}</p>
                        <Boton onClick={()=>{agregarCarrito(element.id, element.nombre)}}>Agregar al carrito</Boton>
                    </Productodatos>
                    )
                })}
            </ContentProductos>
            
            
        </div>
    );
}

export default Producto;