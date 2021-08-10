import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Events = () => {
    return (
        <div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImamage: `url('bg.svg')` }}>
            <Navbar />
            <div className="container pt-12 md:pt-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row">
                <h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Events</h1>
                <div>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Nuestros Hack Nights (Noches de Colaboración) se llevan a cabo los primeros martes de cada mes. Para estar al tanto de esta y otras actividades de la brigada, unanse a nuestro grupo en la plataforma Meetup</p>
                </div>
                <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                    <a href="https://www.meetup.com/code-for-puerto-rico/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ACCESAR MEETUP</a>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Events;