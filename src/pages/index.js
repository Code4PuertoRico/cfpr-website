import * as React from "react"
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import TeamImg from "../images/cfpr-hacknight.png";

// markup
const IndexPage = () => {
	return (
		<main>
			{/* <Navbar /> */}
			{/* <!--Main--> */}
			<div className="container">
				<div className="row">
					{/* <!--Left Col--> */}
					<div className="col-md-6">
						<h1 className="text-primary">CODE FOR PUERTO RICO</h1>
						<p>Somos un grupo de ciudadanos que colaboramos para trabajar temas de caracter civico mediante la implementación de la tecnologia.</p>
						<p>Utilizamos herramientas de alta colaboracion para unir a nuestra comunidad y tener mayor velocidad implementando soluciones.</p>
						<div>
							<a className="btn btn-primary" href="https://www.meetup.com/code-for-puerto-rico/">JOIN US</a>
						</div>
					</div>
					{/* <!--Right Col--> */}
					<div className="col-md-6">
						{/* <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="static/img/cfpr-hacknight.png"></img> */}
						<img className="img-fluid" src={TeamImg}></img>
					</div>
				</div>
				{/* <!--Footer--> */}
				{/* <Footer /> */}

			</div>
		</main>
	)
}

export default IndexPage
