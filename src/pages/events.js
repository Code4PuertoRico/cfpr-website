import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Events = () => {
    return (
            <main>
                <Navbar />
                <div className="container mt-5">
                    <h1 className="my-4 text-primary">Eventos</h1>
                    <div className="row">
                        <p>Nuestros Hack Nights (Noches de Colaboración) se llevan a cabo los primeros martes de cada mes. Para estar al tanto de esta y otras actividades de la brigada, unanse a nuestro grupo en la plataforma Meetup</p>
                    </div>
                    <div>
                        <a href="https://www.meetup.com/code-for-puerto-rico/" className="btn btn-primary">ACCESAR MEETUP</a>
                    </div>
                    <Footer/>
                </div>
            </main>
    );
};

export default Events;