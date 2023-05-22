import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import ContenProducto from './../components/Card/ContenProducto';
import Productos from './../components/Card/Cards';
import data from '../data/bebida.json';

export default function Home() {
  
  return (
    <>
    <div>
      <Head>
        <title>Bebidas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/P.png" />
      </Head>
      <main>
  
      <body>
        <br></br>
        <br></br>
        <br></br>
        <ContenProducto>

          {data.map( bebidas =>
          <Productos
            id={bebidas.id}
            titulo = {bebidas.titulo}
            precio = {bebidas.precio}
            imagen = {bebidas.imagen}
            texto = {bebidas.texto}
                   
          />
            
            )}
            <br></br>
            <br></br>
            
        </ContenProducto>
        <br></br>
     
      </body>
    </main>
      </div>
    
      </>

  )
}
