import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Inicio from './components/inicio';
import Error404 from './components/Error404';
import Blog from './components/Blog';
import Carrito from './components/Carrito';
import { Contenedor } from './styles/HeaderStyle';
import dataProducto from './data/dataProductos';
import { useState } from 'react';
import CarritoCompra from './components/CarritoCompras';




function App() {
  const [lista,setLista]= useState([]);
  
  const agregarCarrito=(id, nombre)=>{
    // En caso el arreglo no tenga nada le agredo
    if (lista.length===0) {
      setLista([{id:id, producto:nombre, cantidad:1}])
      
    }else{
      // clonamos la lista con el fin de editar la cantidad
      const clonLista=[...lista];

      // comprovamos si el id ya esta en la lista clonada
      const yaEstaCarrito= clonLista.filter((element)=>{
          return element.id===id;
      }).length;
      
      // si ya esta se modifica la cantidad, sacamos el index para modificarlo
      if (yaEstaCarrito) {
        clonLista.forEach((productonClonLista, index)=>{
          if (productonClonLista.id===id) {
            // guardo la cantidad
            const cantidadClon= clonLista[index].cantidad;
            clonLista[index]={id:id,producto:nombre, cantidad:cantidadClon +1}
            
          }
        })
      }
      else{
        clonLista.push({id:id,producto:nombre,cantidad:1})
      }
      setLista(clonLista);
    }
    
  }
  
  return (
    <Contenedor >
          <Header/>
          <main>
          <Routes>
              <Route path='*' element={<Error404/>}/>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/Blog' element={<Blog/>} />
              <Route path='/Tienda' element={<Carrito datos={dataProducto} 
              agregarCarrito={agregarCarrito}/>} />
          </Routes>
            
          </main>
          <aside>
            <CarritoCompra lista={lista} />
          </aside>
    </Contenedor>

  );
}

export default App;
