import React from "react"
import Navbar from '../components/Navbar'

const Events = () => {
    return (
        <div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImamage: `url('bg.svg')` }}>
            <Navbar />
            <div className="container">
                <h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Events</h1>
            </div>
        </div>
    );
};

export default Events;