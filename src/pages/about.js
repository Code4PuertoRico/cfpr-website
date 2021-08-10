import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// markup
const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <div className="container pt-12 md:pt-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row">
        <h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">About</h1>
        <div>
          <h2 className="my-2 text-1xl md:text-3xl text-blue-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h2">Misión y Visión</h2>
          <p>Al final del día nuestra mission es impactar positivamente nuestras comunidades en Puerto Rico. Dicho esto es importante tener esto escrito e iterar sobre ello mientras crecemos como comunidad y las necesidades de Puerto Rico evolucionen.</p>
          <div className="py-1">
            <p>Para más información, lea los siguientes documentos:</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-500" href="https://docs.google.com/document/d/e/2PACX-1vQSsyGkzxEkB8UNZIV6s_GHw_dUgxwZUwyFIGqIZxGGHZn5Euwdi-lijXZ-ZOUS_DDISLlTF1PdfWzR/pub">Quiénes somos y nuestra misión</a></li>
              <li><a className="text-blue-500" href="https://docs.google.com/document/d/e/2PACX-1vST7-Sn6hx9_Tu_ZDSzmSZws2PWGj7Tox9MBvdTyvcumDqgM9Cf1Zl-KZGm1PHacWzaWvNV0MbbnLXE/pub">Nuestros valores - Español</a></li>
              <li><a className="text-blue-500" href="https://docs.google.com/document/d/e/2PACX-1vTsKOZKGnmTPnGdxIFmlENpaWs_472wtvvHet9N91xm0xbvmBfwP9VtSDFK7uOo_KS8lqi0cy4lQMj8/pub">Nuestros valores - Inglés</a></li>
            </ul>
          </div>
          <h2 className="my-2 text-1xl md:text-3xl text-blue-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h2">Una Brigada de Code for America</h2>
          <p>Code 4 Puerto Rico se funda entre el 2013 y 2014 como parte de la red de brigadas de <span><a class="text-blue-500" href="https://www.codeforamerica.org/">Code for America</a></span>. Especificamente cuando llega el equipo de Code for America a Puerto Rico.</p>
          <p>Despues de varios años inactiva, se reactiva la brigada en enero del 2020.</p>
          <h2 className="my-2 text-1xl md:text-3xl text-blue-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h2">Nuestro Equipo</h2>
          <p>Este es el equipo principal de Code for Puerto Rico. Este equipo es el responsable por la organización, manejo y crecimiento de nuestra comunidad.</p>
          <ul className="list-disc list-inside">
              <li>Angiemille Latorre - <a className="text-blue-500" href="https://twitter.com/AngiemilleL">@AngiemilleL</a></li>
              <li>José A. Padilla - <a className="text-blue-500" href="https://github.com/jpadilla">@jpadilla</a></li>
              <li>Froilán Irizarry - <a className="text-blue-500" href="https://github.com/froi">@froi</a></li>
            </ul>
           <h2 className="my-2 text-1xl md:text-3xl text-blue-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h2">Código de Conducta</h2>
            <p>Para nosotros es importante construir una comunidad y espacio inclusivo y seguro para tod@s. Para ayudarnos a cumplir con esto toda actividad, evento, interacción, espacio, cuenta y proyecto de Code for Puerto Rico esta sujeto a nuestro Código de Conduta.</p>
            <p>Al ser parte de la red de brigadas de Code for America nuestro Código de Conducta es compatible y esta sujeta al Código de Conducta de Code for America.</p>
            <p>Pueden leer ambos códigos en:</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-500" href="https://github.com/Code4PuertoRico/codeofconduct">Código de Conducta de Code for Puerto Rico</a></li>
              <li><a className="text-blue-500" href="https://github.com/codeforamerica/codeofconduct">Código de Conducta de Code for America</a></li>
            </ul>
            <h2 className="my-2 text-1xl md:text-3xl text-blue-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h2">Requisitos para proyectos</h2>
            <ul className="list-disc list-inside">
              <li>La iniciativa tiene que ser de bien social.</li>
              <li>La iniciativa tiene que tener un campeón. Esta(s) personas son las encargadas de manejar el proyecto.</li>
              <li>La iniciativa tiene que tener el apoyo de la comunidad.</li>
            </ul>
            <br/>
            <p>El equipo empujando la iniciativa tiene que aceptar las condiciones de Code 4 Puerto Rico:</p>
            <ul className="list-disc list-inside">
              <li>El equipo tiene que estar abierto a cualquier persona que quiera participar.</li>
              <li>El proyecto tiene que aceptar el codigo de conducta de Code 4 Puerto Rico.</li>
              <li>Todo trabajo se tiene que hacer publicamente y ser accesible a que quiera accederlo.</li>
            </ul>
        </div>
        <div>

        </div>
        <Footer/>
      </div>
    </main>
  )
}

export default AboutPage
