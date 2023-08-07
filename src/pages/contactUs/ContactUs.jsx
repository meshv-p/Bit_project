import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import { researchNdev_img } from '../../images/Images'


function ContactUs() {
    return (
        <>

            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={researchNdev_img} title=" Contact Us" class='jumbo-head' />
            <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                        Contact Us
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>

                    <div className="container my-5 ">
                        <div className="outer-card-element text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
                            <div className='my-2 repeating-gradient p-2' >
                                <h4 className='fw-semibold text-highlighter'>
                                    DRIE
                                </h4>
                                <article>
                                    <p className='fw-light text-start'>
                                        <ul>
                                            <li>
                                                Dean, Research, Innovation Entrepreneurship ( RIE)
                                            </li>
                                            <li>
                                                Contact : Extn. 4835
                                            </li>

                                            <li>
                                                Email: drie@bitmesra.ac.in
                                            </li>

                                        </ul>




                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ContactUs