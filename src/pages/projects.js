import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Projects = () => {
    return (
        <div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImamage: `url('bg.svg')` }}>
            <Navbar />
            <div className="container pt-12 md:pt-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row">
                <div className="grid grid-cols-1">
                <h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Proyectos Actuales</h1>
                <div>
                    <h2 className="my-4 text-blue-400 text-xl font-bold slide-in-bottom-h2">Contratos PR</h2>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                        Una acción comunitaría que intenta hacer la data del sistema de Consulta de Contratos más accesible. Para mas información <a className="underline" href="https://contratospr.com/">presione aquí</a>.
                    </p>
                </div>
                <div>
                    <h2 className="my-4 text-blue-400 text-xl font-bold slide-in-bottom-h2">1 Hora</h2>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                        Una plataforma para facilitar la mentoría. Para mas información <a className="underline" href="https://1hora.org/">presione aquí</a>.
                    </p>
                </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Projects;