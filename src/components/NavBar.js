import React from "react";
class NavBar extends React.Component {
	mystyle1={
		'width' : '150px',
		'height':'50px',
		'float':'left'
		
	};
	mystyle2={
		
		//  'padding-top':'25px',
		  'float' :'right'

	};
	render(){
	
    return(
        <div>
<section id="navbar">
	
	<nav className="navbar  fixed-top navbar-expand-lg navbar-dark" >
		<div className="container-fluid ">
		<div class="brand shadow-drop-center"><img src="./images/logo1.png" alt="" style={this.mystyle1}/>

		</div>
		
		<button
			className="navbar-toggler button  justify-content-center"
			style={this.mystyle2}
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon  "></span>
		</button></div>
		
		<div className="collapse navbar-collapse"
			id="navbarSupportedContent">
			<ul className="navbar-nav m-auto">
	<li className="nav-item ">
				<a className="nav-link"
				href="Home"><p className=" text-dark" id="image">Home</p></a>
			</li>
			<li className="nav-item " data-bs-toggle="tooltip" data-bs-placement="bottom" title="click to get products">
				<a className="nav-link "
				href="Product"><p className="text-dark" id="image">Product</p></a>
			</li>
		<li className="nav-item text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" title="click for about">
				<a className="nav-link"
				href="About"><p className=" text-dark" id="image">About</p></a>
			</li>
			<li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="click for contact">
				<a className="nav-link "
				href="#contact"><p className=" text-dark" id="image">Contact</p> </a>
			</li>
			<li className="nav-item text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" title="click for about">
				<a className="nav-link"
				href="Login"><p className=" text-dark" id="image">LogIn</p></a>
			</li>
			<li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="click for contact">
				<a className="nav-link "
				href="SignUp"><p className=" text-dark" id="image">SignUp</p></a>
			</li>
			</ul>
		
			</div>
		
		
	</nav>
	</section>
	
    
        </div>
    )
}
}

export default NavBar