import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// markup
const AboutPage = () => {
  return (
    <main>
      {/* <h1>About</h1>
     <Link to="/">Back to Home</Link> */}
      <Navbar />
      <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row">
        <h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">About</h1>
        <Footer/>
      </div>
    </main>
  )
}

export default AboutPage
