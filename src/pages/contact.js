import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="container pt-12 md:pt-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row">
                <h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Contacto</h1>
                <div>
                    <h2 className="my-2 text-1xl md:text-3xl text-blue-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h2">Slack</h2>
                    <p>Crea una cuenta y accede a los diferentes canales de nuestros proyectos. La plataforma Slack es el principal espacio para que los equipos y proyectos coordinen sus esfuerzos. La mayor parte de la comunicación pasara aquí fuera de nuestros hack nights.</p>
                    <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in mt-2">
					    <a href="https://chat.code4puertorico.org/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ACCESA SLACK DE CODE4PR</a>
					</div>
                </div>
                <div className="mt-4">
                    <h2 className="my-2 text-1xl md:text-3xl text-blue-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h2">Redes Sociales</h2>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-500" href="https://www.meetup.com/code-for-puerto-rico/">Meetup</a></li>
                        <li><a className="text-blue-500" href="https://twitter.com/code4puertorico">Twitter</a></li>
                        <li><a className="text-blue-500" href="https://www.linkedin.com/company/code-for-puerto-rico">LinkedIn</a></li>
                        <li><a className="text-blue-500" href="https://www.facebook.com/code4puertorico/">Facebook</a></li>
                        <li><a className="text-blue-500" href="https://www.instagram.com/code4puertorico/">Instagram</a></li>
                    </ul>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Contact;