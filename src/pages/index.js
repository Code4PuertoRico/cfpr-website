import * as React from "react"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamImg from "../images/cfpr-hacknight.png";

// markup
const IndexPage = () => {
	return (
		<main>
			<div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImamage: `url('bg.svg')` }}>
				<Navbar />
				{/* <!--Main--> */}
				<div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

					{/* <!--Left Col--> */}
					<div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
						<h1 className="my-4 text-3xl md:text-5xl text-blue-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">CODE FOR PUERTO RICO</h1>
						<p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Somos un grupo de ciudadanos que colaboramos para trabajar temas de caracter civico mediante la implementación de la tecnologia.</p>
						<p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Utilizamos herramientas de alta colaboracion para unir a nuestra comunidad y tener mayor velocidad implementando soluciones.</p>

						{/* <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Join us:</p> */}
						<div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
							<a href="https://www.meetup.com/code-for-puerto-rico/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">JOIN US</a>
						</div>

					</div>

					{/* <!--Right Col--> */}
					<div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
						{/* <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="static/img/cfpr-hacknight.png"></img> */}
						<img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={TeamImg}></img>
					</div>

					{/* <!--Footer--> */}
					<Footer />

				</div>


			</div>


		</main>
	)
}

export default IndexPage
