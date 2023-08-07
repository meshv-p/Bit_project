import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1 mt-3">
                        <h3 className="py-2 fw-bold"><span className="py-2 text-highlighter fw-bold">Research Innovation</span> <span id="span2" className="py-2 text-white font-weight-bold">and Entrepreneurship</span></h3>
                        <p className="fst-normal text-white">Research Innovation and Entrepreneurship at BIT Mesra fosters innovation, creativity, and entrepreneurship among students, faculty, and researchers.</p>
                        
                    </div>
                    <div className="col-md-6 col-lg-2 col-12 ft-2 mt-4">
                        <h5 className='text-highlighter'> Resource</h5>
                        <ul className=' pl-0'>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Sop</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Form and Application</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Usefull Links</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Research News</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-2 col-12 ft-2 mt-4">
                        <h5 className='text-highlighter'>Support</h5>
                        <ul className='text-white'>
                            <li className="nav-item ">
                                <a className="text-decoration-none link-underline " href="/">Funding Agencies</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Seed Money Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Research Promotion Scheme</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Innovation & Entrepreneurship</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-3 mt-4 text-white">
                        <h5 className='text-highlighter'>Get In Touch</h5>
                        <p><i className="fa-solid  text-white fa-envelope" ></i> bitmesra@gmail.com</p>
                        <p><i className="fa-solid  text-white fa-paper-plane"></i> Bit Mesra, Ranchi</p>
                        <p><i className="fa-solid text-white  fa-phone-volume "></i> +91 9100000000</p>
                    </div>
                    <div className='Last-footer text-white text-center pb-3 mt-5'>
                        <span className="mb-0">&#169; All rights reserved 2023 @BITMESRA | Designed And Developed By <a className='text-decoration-none text-highlighter' href='w'>students of mca</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer