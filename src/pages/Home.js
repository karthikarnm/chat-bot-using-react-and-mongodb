import React from "react";
import './effecct.css'


class Home extends React.Component {
	render() {
		return (
			<div>
				{/* <NavBar/> */}

				<section id="banner">
					<div className="container-fluid " id="banner-container">
						<div className="row" id="banner-row">
							<div className="col-md-6" id="banner-col">
								<h3>
									DOT Glasses is the first sustainable solution to the world’s vision problem
								</h3>

								<p>
									• Adjustable one-size-fits-all eyeglasses<br />
									• A transformational lens concept<br />
									• Simple proprietary vision testing tools<br />
									• Easy 60-minute training to prepare anyone to provide basic vision care
								</p>

								<div className="d-grid gap-2 d-md-flex justify-content-center">
									<a className="btn btn-primary vibrate-1"
										href="#contact"
										data-bs-target="#contact1"
										aria-controls="contact1"
										role="button" id="image">Contact Us</a>
								</div>
							</div>
							<div className="col-md-6" id="banner-col2">
								<img id="image"
									className="img-responsive rounded mx-auto d-block"
									src="./images/main2.png"
									alt=""
								// style={'{height: "250px"};{ width:"700px"}'}
								/>
							</div>
						</div>
					</div>
				</section><br />

				<div className="vedio bg-dark">
					<iframe width="100%" height="500" src="https://www.youtube.com/embed/KVA-xQjCWoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>

				<section id="service">
					<h1 className="text-center"><div className="tracking-in-expand">SERVICES</div></h1>
					<div className="container-fluid" id="service-container">
						<div className="row" id="banner-row">
							<div className="col-md-4" id="service-col1">
								<img
									src="./images/./img1.png"
									className="img-fluid rounded mx-auto d-block"
									alt="..."
									id="image"
								/>
								<h3>Low Cost</h3>

								<p>
									Our goal was to find a solution that makes glasses accessible - even to people living in the most remote villages on earth. This meant we needed to break out of “the way it’s always been done” mentality, which led us to challenge the need for perfect vision, as “perfection” always increases costs.
								</p>
							</div>
							<div className="col-md-4" id="service-col2">
								<img
									src="./images/./img3.png"
									className="img-fluid rounded mx-auto d-block"
									alt="..."
									id="image"
								/>
								<h3>Radical concept</h3>

								<p>
									All-in-one affordable vision care solution. We provide complete kits with vision testers and a lens selection defined by our statistical model.
									Our proven “good enough” vision concept revolutionizes the testing and lens selection process, making it extremely simple and limiting the need for expensive equipment or trained vision care professionals to treat basic refractive errors. Additionally, it reduces inventory costs that further helps to reduce the overall cost to deliver vision correction.
								</p>
							</div>
							<div className="col-md-4" id="service-col3">
								<img
									src="./images/img5.jpg"
									className="img-fluid rounded mx-auto d-block"
									alt="..."
									id="image"
								/>
								<h3>Simplified vision testing</h3>

								<p>
									A set of vision testers included in every vision kit provides access to improved vision for people in even the most remote areas, without the need for eye doctors. The set includes two testers – one for reading lenses, one for seeing far, a pupil distance measurement tool and vision charts.
								</p>

							</div>
						</div>
					</div>
				</section>
				<hr />

				<section id="#">
					<h1 className="text-center">Why Dot Glasses</h1>
					<div className="container-fluid" id="about-container">
						<div className="row" id="banner-row">
							<div className="col-md-6" id="about-col">

								<ul>
									<li>
										DOT Glasses helps to reduce social inequalities and contributes to many of UN Sustainable Development Goals
									</li>
									<li>We provide access to basic vision care for everyone, everywhere</li>
									<li>
										We increase productivity and earnings of low income people
									</li>
									<li>We help children improve school performance and adults to read</li>
									<li>100% of our end customers are Bottom of the Pyramid people</li>
								</ul>
							</div>
							<div className="col-md-6 " id="banner-col2">
								<img
									className="img-responsive rounded mx-auto d-block"
									src="./images/download(1).png"
									alt=""
									id="image"
								// style={mystyle}
								/>
							</div>
						</div>
					</div>
				</section><br />
				<hr />


				<section id="#">
					<h1 className="text-center">Product overveiw
					</h1>
					<div className="container-fluid" id="product-container">
						<div className="row" id="banner-row">
							<div className="col-md-6" id="about-col">
								<img
									className="img-responsive rounded mx-auto d-block"
									src="./images/"
									alt=""
									id="image"
								/>
								<img
									className="img-responsive rounded mx-auto d-block"
									src="./images/d3.jpg"
									alt=""
									id="image"
								/>
							</div>
							<div className="col-md-6" id="product-col2">

								<ul>
									<li>Eyeglasses frame components (ISO 12870) with scratch-resistant polycarbonate lenses. Children’s frames available in different colors.</li>
									<li>The lens is also made from polycarbonate, with a scratch-resistant coating</li>
									<li>Providing eyeglasses to the 1B+ people in need</li>
									<li>The frames are 100% injection molded ABS plastic, which makes them extraordinarily robust – even in extreme weather conditions or when exposed to rough handling.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<br />
				<br /><br />


			</div>

		);
	}

}
export default Home