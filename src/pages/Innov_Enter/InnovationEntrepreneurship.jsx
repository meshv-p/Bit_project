import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import { researchNdev_img } from '../../images/Images'
import HorizontalCard from '../../components/horizontalCard/HorizontalCard';
import { Link } from 'react-router-dom';


function InnovationEntrepreneurship() {

    const innovationEntrepreneurshipData = [
        {
            id: "ie01",
            sno: "1",
            title: "Innovation Incubation and Entrepreneurship(IIEP) Policy",
            background:"#724DD9",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Final_IIEP_POLICY_2021.pdf"
        },
        {
            id: "ie02",
            sno: "2",
            title: "Startup Policy",
            background:"#8D3FBD",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Final_STARTUP-POLICY-2021.pdf"
        },
        {
            id: "ie03",
            sno: "3",
            title: "Entrepreneurship Development Cell",
            background:"#B03695",
            link:"https://edcbitmesra.in/"
        },
        {
            id: "ie04",
            sno: "4",
            title: "National Innovation and Startup Policy Details ",
           background:"#A63B48",
           link:"https://www.mic.gov.in/start-up-policy/implementation_plan"
        },
        {
            id: "ie05",
            sno: "5",
            title: "Global Startup Rankings & New Startups",
            background:"#BC4E2B",
            link:"https://www.startupranking.com/"
        },
        {
            id: "ie07",
            sno: "6",
            title: "Innovation Contest of BIT-NISHAN",
            background: "#9C9F2B",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Nishan_modified.doc"
        }
    ]
    return (
        <>
            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={researchNdev_img} title="Innovation and Entrepreneurship" class='jumbo-head' />
            <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <div>
                        <h2 className="text-center hd-color myText  ">
                            Innovation and Entrepreneurship
                        </h2>
                        <div className="container d-flex justify-content-center align-items-center position-relative  ">
                            <span className="line d-inline-block"></span>
                            <span className="star fa fa-star d-inline-block checked"></span>
                            <span className="line d-inline-block"></span>
                        </div>
                        <div className="container mb-custom" data-aos='fade-up' data-aos-offset="10">
                            <div className="row gy-3 mt-2">
                                {innovationEntrepreneurshipData.map((item, index) =>

                                    <HorizontalCard
                                        key={index}
                                        sno={item.sno}
                                        title={item.title}
                                        background={item.background}
                                        link={item.link}
                                    />

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <div className="button-group row text-center w-100 mb-5 " >
                {/* Poster Button */}
                <div className="col-4" >

                    <Link to="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Final%20Poster%20BIT%20NIshan.jpg"><button type="button" class="btn btn-outline-primary m-2 h-100"  >Poster</button></Link>
                </div>

                {/* Organizing team button */}
                <div className="col-4">
                    <Link to="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Organisting_Team_BIT_NISHAN.jpg"><button type="button" class="btn btn-outline-success m-2 h-100">Organizing Team</button></Link>

                </div>

                {/* Student Committee */}
                <div className="col-4">
                 <Link to="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Students%20committee.jpg">   <button type="button" class="btn btn-outline-danger m-2 h-100">Student Committee</button></Link>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default InnovationEntrepreneurship