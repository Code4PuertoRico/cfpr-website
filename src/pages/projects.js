import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Projects = () => {
    return (
        <main>
            <Navbar />
            <div className="container mt-5">
                <h1 className="my-4 text-primary">Proyectos Actuales</h1>
                <div className="row">
                    <h2 className="my-4 text-secondary">Contratos PR</h2>
                    <p>
                        Una acción comunitaría que intenta hacer la data del sistema de Consulta de Contratos más accesible. Para mas información <a className="underline" href="https://contratospr.com/">presione aquí</a>.
                    </p>
                </div>
                <div className="row">
                    <h2 className="my-4 text-secondary">1 Hora</h2>
                    <p>
                        Una plataforma para facilitar la mentoría. Para mas información <a className="underline" href="https://1hora.org/">presione aquí</a>.
                    </p>
                </div>
                <Footer/>
            </div>
        </main>
    );
};

export default Projects;