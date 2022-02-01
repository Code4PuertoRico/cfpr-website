import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <main>
            <Navbar />
            <div className="container mt-5">
                <h1 className="my-4 text-primary">Contacto</h1>
                <div>
                    <h2 className="my-2 text-secondary">Slack</h2>
                    <p>Crea una cuenta y accede a los diferentes canales de nuestros proyectos. La plataforma Slack es el principal espacio para que los equipos y proyectos coordinen sus esfuerzos. La mayor parte de la comunicación pasara aquí fuera de nuestros hack nights.</p>
                    <div>
					    <a href="https://chat.code4puertorico.org/" className="btn btn-primary">ACCESA SLACK DE CODE4PR</a>
					</div>
                </div>
                <div className="mt-2">
                    <h2 className="my-3 text-secondary">Redes Sociales</h2>
                    <ul>
                        <li><a className="text-blue-500" href="https://www.meetup.com/code-for-puerto-rico/">Meetup</a></li>
                        <li><a className="text-blue-500" href="https://twitter.com/code4puertorico">Twitter</a></li>
                        <li><a className="text-blue-500" href="https://www.linkedin.com/company/code-for-puerto-rico">LinkedIn</a></li>
                        <li><a className="text-blue-500" href="https://www.facebook.com/code4puertorico/">Facebook</a></li>
                        <li><a className="text-blue-500" href="https://www.instagram.com/code4puertorico/">Instagram</a></li>
                    </ul>
                </div>
                <Footer/>
            </div>
        </main>
    );
};

export default Contact;