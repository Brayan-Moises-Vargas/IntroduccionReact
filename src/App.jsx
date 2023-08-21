

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import MisCartas from './assets/components/MisCartas'
import perrito from './assets/imagenes/perrito1.jpg'
import perrito2 from './assets/imagenes/perrito2.jpg'
import perrito3 from './assets/imagenes/perrito3.jpg'
import perrito4 from './assets/imagenes/perrito4.jpg'


function App() {
  

  return (
    <>

    {/*esto es para importar el componente Header*/}
    <section className="header">
    <Header Titulo="Adopta a un compañero" /> 
    </section>

<section className="container">
   


    <MisCartas
    Imagen={perrito} 
    Nombre="Leonardo"
    Descripcion="Tranquilo y amoroso un amiguito con buen temperamento"
    Color="primary"
    Texto="Mestizo"
    
    />
 
   
    <MisCartas
    Imagen={perrito2}
    Nombre="Hermanos"
    Descripcion="Tres lindos hermanos buscando un hogas, elejirias uno?"
    Color="secondary"
    Texto="Golden"
    />
    <MisCartas
    Imagen={perrito3}
    Nombre="Suizo"
    Descripcion="tierno y bien portado todo un galán"
    Color="danger"
    Texto="Labrador"
    />
    <MisCartas
    Imagen={perrito4}
    Nombre="Carlos"
    Descripcion="Amoroso, jugueton y con mucha energia."
    Color="warning"
    Texto="Koker"
    />
    </section>
   
<footer>

    <Footer  Textofooter="En la mayoría de los casos, adoptar significa darle una segunda oportunidad a un animal que ha sufrido un proceso de abandono, y en ocasiones maltrato. Acogerlo en tu casa de por vida y darle la estabilidad, los cuidados y el cariño que necesita va a ayudarlo a que recupere su confianza y su autoestima."/>
   
</footer>
    
    </>
  )
}

export default App
