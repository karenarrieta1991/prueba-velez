import logo from "./logo.svg";
import video from "./video-final.mp4";
import logo1 from "./LFG-LANDING-3.png";
import play from "./play.png";
import imagenmemoria from "./memoria-uno.png";
import videocausa from "./memoria-causa-desk.mp4";
import videosostenibilidad from "./piezasmemo-desk.mp4";
import imagensostper from "./LFG-LANDING-FINAL1.png";
import imagensostper1 from "./LFG-LANDING-FINAL2.png";
import imagensostper2 from "./LFG-LANDING-FINAL3.png";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from './modal'

function FormatNumber({ number }) {
  return new Intl.NumberFormat().format(number)
  
}

function App() {
  //contador

  const [count, setCount] = useState(388350);
  useEffect(() => {
    if (count < 389191) {
      const timer = setInterval(() => {
        setCount((preCount) => preCount + 1); // <-- Change this line!
      }, 4);
      return () => {
        clearInterval(timer);
      };
    }
  }, [count]);

  //Modal

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="App">
      <header className="section-navbar">
        <div className="container-navbar">
          <nav className="navbar-principal">

            <div className="menu-izquierda">
              <ul className="menu-ul">
                <div className="menu-list1">
                  <span class="texto-menu">
                    <a class="link-menu-mujer" href="#" title="seccion mujer">mujer</a>
                  </span>
                </div>
              </ul>
            </div>
            <div className="menu-izquierda">
              <ul className="menu-ul">
                <div className="menu-list1">
                  <span class="texto-menu">
                    <a class="link-menu" href="#" title="seccion mujer">hombre</a>
                  </span>
                </div>
              </ul>
            </div>
            <div className="menu-izquierda">
              <ul className="menu-ul">
                <div className="menu-list1">
                  <span class="texto-menu">
                    <a class="link-menu-mujer" href="#" title="seccion mujer">outlet</a>
                  </span>
                </div>
              </ul>
            </div>
            <div className="menu-izquierda">
              <ul className="menu-ul">
                <div className="menu-list1">
                  <span class="texto-menu">
                    <a class="link-menu-mujer" href="#" title="seccion mujer">crédito</a>
                  </span>
                </div>
              </ul>
            </div>
            


          </nav>
        </div>
      </header>
      <div>
        <div className="section1">
          <div  className="container-video" >
          <div className="container-section1">
            <video controls autoPlay loop muted playsInline>
              <source className="video"  src={video} />
            </video>
            <button className="boton-modal" onClick = {() => setIsOpen(true) }>
              <img className="img-boton" src={play}/>
            </button>


          </div>
          </div>
        </div>
        <div> 
        <Modal open = {isOpen} close = { () => setIsOpen(false)} >
            <iframe id="four-seasons-video" className="ventana-video" src="https://www.youtube.com/embed/WVVmqqzFHJs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe></Modal>
        </div>
      </div>


      <div className="container">
        <div className="container-texto">
        <img className="img-parrafo-sostenibilidad" src={logo1} alt=""/>
          <p className="parrafo-sostenibilidad">
            Desde el inicio he sido parte de la humanidad, me he transformado
            siglo tras siglo entre manos de genios, artistas, inventores, y
            artesanos expertos, he dado vida a piezas que cuentan historias, he
            sido heredado de generación en generación como un material precioso
            que no se extingue, que no se acaba, que permanece. Estoy en el
            presente y seguiré en el futuro para continuar este legado
            ancestral.
          </p>
        </div>
      </div>

      <div>
          <div className="section-3">
            <div className="container-texto-somos">
              <div className="row-texto-somos">
                <p className="texto-somos">YA SOMOS</p>
                <p className="texto-somos-number"><FormatNumber number={count}/></p>
                <p className="texto-somos">PERSONAS &nbsp;</p> 

              </div>
            </div>
            <div>
                <p className="texto-somos">UNIDAS AL MOVIMIENTO</p>
                </div>
          </div>
          
      </div>

      <div className="container-4">
        <div className="container-sostenibilidad">
          <div className="fila-piezas">
            <div className="columna-piezas">
            <video className="videosos" controls autoPlay loop muted playsInline>
              <source  src={videosostenibilidad} />
            </video> 
            </div>
          <div className="columparrafosostenibilidad">
            <div>
              <p className="caja-parrafo-sostenibilidad">
              Nuestros cueros son un subproducto de la industria ganadera, por lo
              tanto, volvemos sostenible lo que podría ser contaminante, tratamos
              las pieles desde su origen con procesos amigables con el medio
              ambiente, hasta su uso responsable promovido a través de la
              restauración y el cuidado del cuero.
              </p>
            </div>
          <div className="caja-sost-per-img">
              <img clasName="img-sost-per" src={imagensostper} alt=""/>
          </div>

          </div>
            
          </div>
          <div className="fila-piezas-2">
            <div className="columna-piezas-2">
              <p class="parrafo-piezas">sostenibilidad</p>
              <p class="parrafo-piezas-2">Piezas que perduran</p>
            </div>
            <div className="columna-piezas-3">
              <div className="img-piezas-sost">
              <img clasName="img-sost-per1" src={imagensostper1} alt=""/>
              <a href="#" class="link-sostenibilidad">Mujer</a>
              </div>
              <div className="img-piezas-sost1">
              <img clasName="img-sost-per2" src={imagensostper2} alt=""/>
              <a href="#" class="link-sostenibilidad">Hombre</a>
              </div>

              

            </div>
          


          </div>
        </div>

      </div>

      <div className="">
            <video className="memorias" controls autoPlay loop muted playsInline>
              <source  src={videocausa} />
            </video>
      </div>

      <div>
      <h1 className="texto-memorias">
        CUERO/MATERIAL PRECIOSO</h1>
        <p class="texto-memorias1">
          Origen del cuero / Material precioso / Moda circular / Moda sostenible
        </p>
      
      </div>
      <div className="container-texto">
      <img className="img-parrafo-sostenibilidad" src={imagenmemoria} alt=""/>
          <p className="parrafo-sostenibilidad">
          <h1 className="texto-memorias">
           RECONOCIMIENTOS</h1>
          Sellos de sostenibilidad / Moda responsable 
          /Transparencia en procesos
           de producción / Reducción en la huella de carbono
          </p>
      
      </div>

      <div className="section-7">
        <div className="container-informe-sostenibilidad">
          <div>
            <h1 className="titulo-informe-soste">
              INFORME ANUAL
            </h1>
          </div>
          <div>
            <p className="parrafo-informe-soste">
            En cueros Vélez apostamos al crecimiento social, ambiental y
            économico, a través de negocios
            sostenibles, que exaltan el talento y construyen país.
            </p>
          </div>
          <div>
          <a href="#" target="_blank" class="link-informe-sostenibilidad">DESCARGAR INFORME</a>
          </div>

        </div>

      </div>
      <div className="section-8">
        <div className="container-section-8">
          <div className="fila-section-8">
          <img className="logo-section-8" src={logo1} alt=""/>
          </div>
          <div className="fila-section-8-parr">
            <p className="section-8-parrafo">
            CUERO POR Y PARA EL BIEN,
            <br />
            CUERO SOSTENIBLE CON EL
            <br />
            MUNDO ENTERO
            </p>
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
