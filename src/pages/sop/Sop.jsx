import React from 'react';
import { researchNdev_img } from '../../images/Images';
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
function Sop() {
    const sopCardData=[
        {
            id:"s01",
            title:"Steps Involved in Project Life Cycle",
            style:{
                backgroundColor:"#620D21",
                width:"600px",
                height:"90px"
            },
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/SOP_PROJECT_LIFE_CYCLE%20Revised%20on%2013_07_2022(1)(1).pdf"

        },
        {
            id:"s02",
            title:"SOPs for purchase of items",
            style:{
                backgroundColor:"#5B387A",
                width:"600px",
                height:"90px"
            },
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/SOP_Purchase_of_Items(2).pdf"
        },
        {
            id:"s03",
            title:"SOPs for Recruitment of Project Scholars",
            style:{
                backgroundColor:"#46579C",
                width:"600px",
                height:"90px"
            },
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/SOP_recruitment_of_scholars(1).pdf"
        },
        {
            id:"s04",
            title:"SOPs for Recruitment other than Project Scholars",
            style:{
                backgroundColor:"#1E6949",
                width:"600px",
                height:"90px"
            },
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/SOP_recruitment_of_scholars%20Recur(1).pd"
        },
        {
            id:"s05",
            title:"SOPs for Resignation of Scholars",
            style:{
                backgroundColor:"#487327",
                width:"600px",
                height:"90px"
            },
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/SOP_Resignation_of_scholars(1).pdf"
        },
        {
            id:"s06",
            title:"SOPs of BIT NISHAN-Innovation Contest",
            style:{
                backgroundColor:"#4F3504",
                width:"600px",
                height:"90px"
            },
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/BIT%20NISHAN%20SOPs.pdf"
        }
    ]

  return (

    <>
    <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={researchNdev_img} title="Standard Operating Procedures" class='jumbo-head' />
      <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
      <div>
        <h2 className="text-center hd-color myText  ">
          SOP's
        </h2>
        <div className="container d-flex justify-content-center align-items-center position-relative  ">
          <span className="line d-inline-block"></span>
          <span className="star fa fa-star d-inline-block checked"></span>
          <span className="line d-inline-block"></span>
        </div>
        </div>
      </div>


        <div className="container mb-custom" data-aos='fade-up' data-aos-offset="10">
            <div className="row gy-3 mt-2">
                
                {sopCardData.map((item,index)=>(
                    <div className="col-sm-12 col-md-12 col-lg-12 d-flex  justify-content-center" key={index}>
                        <div className="card-item d-flex justify-content-end align-items-center rounded shadow-sm" style={item.style}>
                            <div className="title text-light" style={{width:"70%"}}>
                                <p>
                                    {item.title}
                                </p>
                            </div>
                            <Link to={item.link} target="_blank" className="btn btn-primary me-2 py-1 px-4" style={{ fontSize: "14px" }}>
                            View
                         </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        <Footer/>
    </>
     
  )
}

export default Sop