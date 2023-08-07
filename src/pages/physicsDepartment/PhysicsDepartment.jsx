import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import {phygal1,phygal2,phygal3,phygal4,phygal5,phygal6,phygal7,phygal8,phygal9,phyhome1,phyhome2,phyhome3,phyhome4,
} from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';


const content1=`The Department offers an impressive array of modern facilities that serve as essential resources for both research and training at the undergraduate (UG) and postgraduate (PG) levels. The Physics Laboratory is equipped with a diverse range of experimental setups, allowing students to conduct up to 40 different experiments covering various areas of physics such as Thermodynamics, Waves & Oscillations, Electricity, Magnetism, Electronics, Optics, Modern Physics, and Materials Science. This comprehensive laboratory experience empowers students to gain practical insights and hands-on skills in applying theoretical concepts to real-world scenarios. These modern facilities not only enrich the academic experience of students but also open up avenues for groundbreaking research and innovation. Through hands-on experimentation and access to advanced equipment, aspiring physicists and engineers can develop the practical expertise required to excel in their careers and contribute significantly to their respective fields`
const content2=`The Plasma Laboratory boasts cutting-edge equipment that facilitates advanced research in thin film technology and plasma-related phenomena. With a range of sophisticated tools, including anodic vacuum arc deposition unit, plasma arc generator, and R F Magnetron sputtering unit, students and researchers can explore various plasma-based processes and applications. Additionally, the laboratory is equipped with a Nitriding unit and PECVD system, further enhancing the capabilities for materials science research. The Optics Laboratory is another gem in the department's facilities, featuring state-of-the-art setups like real-time holography, optical coherence tomography, and Nd:YAG laser for pulsed operation. Students can delve into the world of optics and photonics, honing their skills in using advanced optical instruments and conducting cutting-edge experiments.`
const gal = [
    { Sno: '1', image: phygal1 },
    { Sno: '2', image: phygal2 },
    { Sno: '3', image: phygal3 },
    { Sno: '4', image: phygal4 },
    { Sno: '5', image: phygal5 },
    { Sno: '6', image: phygal6 },
    { Sno: '7', image: phygal7 },
    { Sno: '8', image: phygal8 },
    { Sno: '9', image: phygal9 },
  ];
  const react1=phyhome1;
  const react2=phyhome2;
  const react3=phyhome3;
  const react4=phyhome4;
const columnNames = {
  Sno: "Sno",
  Principal_Investigator: " Principal Investigator",
  Name_of_Co: "Co-PI",
  Starting_Date: "Starting Date",
  Duration: "Duration",
  Funding_Agency: " Funding Agency",
  Project_Title: "Project Title",
  Amount: " Amount",
  Status: "Status",
  Email_ID_of_PI: "Email ID of PI"

  };
  const funding_card_details = [
        {
          Sno: "1",
          Principal_Investigator: "Dr. S. K. Rout",
          Name_of_Co: "Dr. Ela Sinha",
          Starting_Date: "2016",
          Duration: "3",
          Funding_Agency: "BRNS, BARC",
          Project_Title: "Development of Bismuth Based materials for Piezoelectric Microsystem in Robotic Application",
          Amount: "33.72",
          Status: "Ongoing",
          Email_ID_of_PI: "skrout@bitmesra.ac.in"
        },
        {
          Sno: "2",
          Principal_Investigator: "Dr. Sanat Mukherjee",
          Name_of_Co: "",
          Starting_Date: "2014",
          Duration: "3",
          Funding_Agency: "UGC-DAE, Indore",
          Project_Title: "Development and characterization of AE-doped TiO as transparent conducting oxides using high power impulse magnetron sputtering (HiPIMS)",
          Amount: "2.46/year",
          Status: "Ongoing",
          Email_ID_of_PI: "sanat_aphy@yahoo.co.in"
        },
        {
          Sno: "3",
          Principal_Investigator: "Dr. Nishi Srivastava",
          Name_of_Co: "",
          Starting_Date: "2013",
          Duration: "3",
          Funding_Ageny:"DST",
          Project_Title: "Impact of Meteorological model grid and parameter change in a Chemical Transport Model in terms of aerosols concentration and distribution",
          Amount: "20.50",
          Status: "Ongoing",
          Email_ID_of_PI: "nishi.bhu@gmail.com"
        },
        {
          Sno: "4",
          Principal_Investigator: "Dr. Nishi Srivastava",
          Name_of_Co: "1",
          Starting_Date: "2014",
          Duration: "1",
          Funding_Ageny:"BIT Mesra",
          Project_Title: "Comparison of Aerosol Products Measure with Satellite against Ground Based Observations over Indian Sub-continent",
          Amount: "",
          Status: "Ongoing",
          Email_ID_of_PI: "nishi.bhu@gmail.com"

        },
        {
          Sno: "5",
          Principal_Investigator: "Dr. S. K. Rout",
          Name_of_Co: "",
          Starting_Date: "2014",
          Duration: "3",
          Funding_Agency: "DST",
          Project_Title: "Investigation on photoluminescence and microwave dielectric properties of some tungstates and molybdates prepared by microwave-assisted solid-state reaction route.",
          Amount: "24.00",
          Status: "Ongoing",
          Email_ID_of_PI: "skrout@bitmesra.ac.in"
        },
        {
          Sno: "6",
          Principal_Investigator: "Dr. S. K. Rout",
          Name_of_Co: "",
          Starting_Date: "2014",
          Duration: "2",
          Funding_Agency: "NRB, New",
          Project_Title: "Investigation on Rare Earth Substituted New layered Perovskites for Ferroelectric and Multiferroic applications",
          Amount: "15.90",
          Status: "Completed",
          Email_ID_of_PI: "skrout@bitmesra.ac.in"
        }
   
      
   
  ];
  const Indexes = [0];
 
export default function PhysicsDepartment() {
  return (
    <>
    <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={phygal2} title=" Physics Department" class='jumbo-head' />
            <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                        Research 
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                </div>
            </div>



            <div className="outer-card-element text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Research </h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                            <p>The Department of Physics is making substantial contributions in research and development. The faculty members are involved in executing various research projects funded by prestigious organizations such as the DST (Department of Science and Technology), AICTE (All India Council for Technical Education), DRDO (Defence Research and Development Organization), BRNS (Board of Research in Nuclear Sciences), ARDB (Advanced Research and Development Board), and UGC (University Grants Commission) of the Government of India.</p>
                            <p>Such recognition and support from national and international organizations indicate the department's expertise and the quality of research being conducted. Collaborating with these funding agencies not only provides financial resources but also fosters collaborations and opens avenues for knowledge exchange and advancements in the field of physics.</p>
                            <p>It's important to continue this positive trajectory by further exploring research opportunities, encouraging interdisciplinary collaborations, and disseminating the research findings to contribute to the scientific community and society at large.</p>
                            </ol>
                        </article>
                    </div>
    </div>

    <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                    Recent Ongoing and Completed R&D Projects
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                </div>
            </div>


            <FundingTable  card_details={funding_card_details} columnNames={columnNames}  Indexes={Indexes}  />

            <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                    Facilities

                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                </div>
            </div>
    <Homecard homeRight={"row"} rect1={react1} rect2={react2} content={content1}/>
    <Homecard homeRight={"row flex-row-reverse"} rect1={react3} rect2={react4} content={content2}/>
    <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText   ">
          Physics Department Gallery
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
    <Galery gal={gal}/>
      <Footer />
    </>
  )
}
