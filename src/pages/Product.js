import React from "react";

const Product = () => {
    var hello = {
        'background-Size': '530px',
        'height': '200px',
        'background-position': 'center',
        'width': '200px',
        'border-radius': '20%',
        'box-shadow': '30px 2px 16px 6px rgba(0, 0, 0, 0.33)'
    };
    return (

        <div >

            <section id="banner"><br /><br /><br /><br />
                <div className="container  " id="product-container">

                    <div className="row" id="banner-row"><br /><br></br>
                        <div className="col-ls-12">	<center><h1 className="text-center"><img src="./images/foot.jpg" id="image" alt="" /></h1></center>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </section>
            <section id="banner" >
                <h1 className="text-center ">PRODUCT INFORMATION</h1><br />
                <div className="container-fluid" id="about-container">
                    <div className="row" id="banner-row">
                        <div className="col-md-6" id="about-col">
                            <ul><center><label for="heading"><h1 class="h2">Small Vision Kit</h1></label></center>

                                <li>Small, laptop-sized bag with everything needed to test vision and provide 20 customized eyeglasses (2kg). Kits are durable, low-cost and can be refilled quickly.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 " id="banner-col2">
                            <img
                                className="img-responsive mx-auto d-block"
                                src="./images/kit.jpg"
                                alt=""
                                id="image"
                                style={{
                                    height: '200px',
                                    width: "200px",
                                    borderRadius: '20%',
                                    boxShadow: '30px 2px 16px 6px rgba(0, 0, 0, 0.33)'

                                }}

                            />
                        </div>
                    </div>
                </div>
            </section><br /><br /><br />


            <section id="#">
                <h1 className="text-center">
                </h1>
                <div className="container-fluid" id="product-container">
                    <div className="row" id="banner-row">
                        <div className="col-md-6" id="about-col">
                            <img
                                className="img-responsive   mx-auto d-block"
                                src="./images/kit1.jpg"
                                alt=""
                                id="image"
                                style={hello}

                            />
                        </div>
                        <div className="col-md-6" id="product-col2">
                            <ul>
                                <center><label for="heading"><h1 class="h2">Vision Camp Kit</h1></label></center>

                                <li>Large kit with everything needed to test vision and provide glasses for 120 people. It includes pop out modules and is easy to carry as shoulder bag or backpack (8kg).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div><br /><br /><br />
                <div className="container-fluid" id="about-container">
                    <div className="row" id="banner-row">
                        <div className="col-md-6" id="about-col">
                            <ul><center><label for="heading"><h1 class="h2">Testing Tools</h1></label></center>

                                <li>A set of vision testers (one for reading glasses, one for seeing far) both with a built-in pupil distance measurement tool. Each kit contains vision testing charts.
                                </li>
                            </ul>
                        </div><br />
                        <br />
                        <div className="col-md-6 " id="banner-col2">
                            <img
                                className="img-responsive  mx-auto d-block "
                                src="./images/kit3.jpg"
                                alt=""
                                id="image"
                                style={hello}
                            />
                        </div>
                    </div>
                </div>
            </section><br /><br /><br />




            <section id="#">
                <h1 className="text-center">
                </h1>
                <div className="container-fluid" id="product-container">
                    <div className="row" id="banner-row">
                        <div className="col-md-6" id="about-col">
                            <img
                                className="img-responsive   mx-auto d-block"
                                src="./images/kit2.jpg"
                                alt=""
                                id="image"
                                style={hello}
                            />
                        </div>
                        <div className="col-md-6" id="product-col2">
                            <ul>
                                <center><label for="heading"><h1 class="h2">Frames & Lenses</h1></label></center>

                                <li>Eyeglasses frame components (ISO 12870) with scratch-resistant polycarbonate lenses. Children’s frames available in different colors.</li>
                            </ul>
                        </div>
                    </div>
                </div><br /><br /><br />
                <div className="container-fluid" id="about-container">
                    <div className="row" id="banner-row">
                        <div className="col-md-6" id="about-col">
                            <ul><center><label for="heading"><h1 class="h2">Accessories</h1></label></center>

                                <li>Microfiber clothes and pouches (for cleaning glasses and protection). The pouches can be branded with partner logos.</li>
                            </ul>
                        </div><br /><br />
                        <br />
                        <div className="col-md-6 " id="banner-col2">
                            <img
                                className="img-responsive   mx-auto d-block"
                                src="./images/kit4.jpg"
                                alt=""
                                id="image"
                                style={hello}

                            />
                        </div>
                    </div>
                </div>
            </section><br /><br /><br /><br />

            <div className="row">
                <div className="col-md-6">
                    <h2>DOT Glasses Vision Camp Setup Manual</h2>
                    <iframe width="100%" height="400" id="image" src="https://www.youtube.com/embed/nhFrIBlispg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-6">
                    <h2>DOT Glasses Testing and Assembly</h2>
                    <iframe width="100%" height="400" id="image" src="https://www.youtube.com/embed/Xg1nWsr5QpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>


    );

}

export default Product