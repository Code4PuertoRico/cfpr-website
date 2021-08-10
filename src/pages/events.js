import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Events = () => {
    return (
        <div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImamage: `url('bg.svg')` }}>
            <Navbar />
            <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row">
                <h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Events</h1>
                <Footer/>
            </div>
        </div>
    );
};

export default Events;