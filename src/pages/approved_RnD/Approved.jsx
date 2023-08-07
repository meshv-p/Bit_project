import React from 'react'
import {approved_banner } from '../../images/Images'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import Aproved from '../../components/Aproved/aproved';



const para1="During the 2022-2023, our team witnessed a truly remarkable display of research excellence at our university. The relentless pursuit of knowledge, unwavering determination, and collaborative spirit of our researchers led to groundbreaking discoveries and advancements. Through their innovative methodologies, rigorous data analysis, and interdisciplinary collaborations, our team made significant contributions to various fields. The academic session showcased a vibrant research ecosystem, fostering an environment of intellectual curiosity and innovation. We are immensely proud to have been part of this extraordinary journey, witnessing firsthand the transformative impact of our university's research during the [specific academic session].";
const para2="The research work conducted at our university is a testament to the unwavering pursuit of knowledge and the remarkable talent within our team. With an unwavering dedication to excellence, our researchers have made significant contributions to their respective fields. Through rigorous experimentation, groundbreaking discoveries have been made, pushing the boundaries of human understanding. The collaborative environment at our university fosters interdisciplinary partnerships, amplifying the impact of our research endeavors. The passion and commitment exhibited by our team have positioned our university as a leading institution in cutting-edge research. We are privileged to be part of such an inspiring community, and we eagerly anticipate the groundbreaking discoveries that lie ahead.";
const title2="Research Grants 2021-22";
const title1="Research Grants 2022-23";

function Approved() {
    return (
        <>
            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={approved_banner} title="Approved R & D Projects" class='jumbo-head' />
            <Aproved class1='others' class2='overlay' para={para1} title={title1}/>
            <Aproved class1='home--others' class2='over-right'para={para2} title={title2}/>
            <div className="container-fluid top-banner3">
            <div className="col-lg-6 col-md-6 col-xs-12 ">  
  
    <div className="d-flex justify-content-center custom custom1 align-items-center">
      <h2 className="text-center text-white m-5 fw-bold">Research Grants received in 2020-21</h2>
      <div className="ms-0">
        <button className="viewBtn me-4 border-0 fw-bold">View</button>
      </div>
    </div>

    <div className="d-flex justify-content-center custom custom2 align-items-center">
      <h2 className="text-center text-white m-5 fw-bold">Research Grants received in 2019-20</h2>
      <div className="ms-0">
        <button className="viewBtn me-4 border-0 fw-bold">View</button>
      </div>
    </div>

    <div className="d-flex justify-content-center custom custom3 align-items-center">
      <h2 className="text-center text-white m-5 fw-bold">Research Grants received in 2018-19</h2>
      <div className="ms-0">
        <button className="viewBtn me-4 border-0 fw-bold">View</button>
      </div>
    </div>

 
            </div>
            </div>
          
            <Footer />
        </>
    )
}

export default Approved