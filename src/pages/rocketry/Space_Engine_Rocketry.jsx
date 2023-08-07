import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import {spaceJumbo,spacegal1,spacegal2,spacegal3,spacegal4,spacegal5,spacegal6,spacegal7,spacegal8,spacegal9,spacegal10,spacegal11,spacegal12,spacehome1,spacehome2,spacehome3,spacehome4,} from '../../images/Images';
import Footer from "../../components/footer/Footer"
import Homecard from '../../components/HomeCard/Homecard';


import FundingTable from '../../components/fundingTable/FundingTable'


import Galery from '../../components/galery/Galery';
const gal = [
  { Sno: '1', image: spacegal1 },
  { Sno: '2', image: spacegal2 },
  { Sno: '3', image: spacegal3 },
  { Sno: '4', image: spacegal4 },
  { Sno: '5', image: spacegal5 },
  { Sno: '6', image: spacegal6 },
  { Sno: '7', image: spacegal7 },
  { Sno: '8', image: spacegal8 },
  { Sno: '9', image: spacegal9 },
  { Sno: '10', image: spacegal10 },
  { Sno: '11', image: spacegal11 },
  { Sno: '12', image: spacegal12 },
];
const react1=spacehome1;
const react2=spacehome2;
const react3=spacehome3;
const react4=spacehome4;
const columnNames = {
    Title_of_Project: "Title of Project",
    PI_Co_PI: "PI/ Co- PI",
    FundingAgency: "Funding Agency",
    Amount: "Amount(L)",
    Date_of_starting: "Date of starting",
    Status: "Status"
};


    const funding_card_details= [
      {
        Title_of_Project: "Investigation of Flow Field Around Fore Body with Vertical Fences at Supersonic Speeds",
        PI_Co_PI: "Dr. J. K. Prasad",
        FundingAgency: "DRDL Min. of Defence",
        Amount: 9.50,
        Date_of_starting: "July 2004",
        Status: "Completed"
      },
      {
        Title_of_Project: "Development of Cryogenic Propulsion System",
        PI_Co_PI: "Dr. A. K. Chatterjee",
        FundingAgency: "UGC (SAP)",
        Amount: 49.00,
        Date_of_starting: "Apr 2002",
        Status: "Completed"
      },
      {
        Title_of_Project: "Propellant Technology and Combustion Facility",
        PI_Co_PI: "Dr. A. K. Chatterjee",
        FundingAgency: "DST (FIST)",
        Amount: 25.00,
        Date_of_starting: "Jan 2005",
        Status: "Completed"
      },
      {
        Title_of_Project: "Development of Gel Propulsion System for Reaction Control System using UDMH & RFNA",
        PI_Co_PI: "Dr. Mohan Varma",
        FundingAgency: "DRDL Min. of Defence",
        Amount: 23.00,
        Date_of_starting: "Nov 2005",
        Status: "Completed"
      },
      {
        Title_of_Project: "Study of Flow Field Inside Air Intake With Flow Control",
        PI_Co_PI: "Dr. J. K. Prasad, Dr. S. Das, Mr. P. Kumar",
        FundingAgency: "RESPOND (ISRO)",
        Amount: 18.59,
        Date_of_starting: "1/4/2011",
        Status: "Completed"
      },
      {
        Title_of_Project: "Investigation of Flow Behaviour on Winged body at Subsonic Speed",
        PI_Co_PI: "Dr. J. K. Prasad, Dr. S. Das, Mr. P. Kumar",
        FundingAgency: "AR&DB Ministry of Defense",
        Amount: 11.4,
        Date_of_starting: "1/2/2012",
        Status: "Completed"
      }
    ]
  
    const Indexes = [0];

const content1=` The Department's Aerodynamics Laboratory boasts a comprehensive range of advanced equipment and facilities dedicated to the study of aerodynamics and wind tunnel testing. With both supersonic and subsonic wind tunnels acquired in 1971 and an additional supersonic wind tunnel in 2012, the laboratory enables researchers to conduct experiments and gather data on aerodynamic properties at varying speeds. The presence of 1-component, 3-component, 5-component, and 6-component strain gauge balances allows for detailed measurements of forces and moments acting on models within the wind tunnels. The lab also includes pressure sensors, data acquisition systems, digital SLR cameras from Sony and Canon, and a schlieren visualization system for capturing and analyzing airflow patterns. Furthermore, various tools like inclinometers, pressure scanners, and signal conditioners further augment the laboratory's capabilities`;

const content2=`In the Combustion Laboratory, researchers have access to state-of-the-art equipment that facilitates the investigation of flame propagation and stability. The presence of a Flame Propagation and Stability Unit allows for the controlled study of combustion processes under different conditions. Additionally, the laboratory is equipped with a Differential Scanning Calorimeter (DSC) and a Simultaneous Thermal Analyzer, enabling researchers to analyze the thermal properties and behavior of materials. To ensure uninterrupted research operations, a 10 kVA UPS system with batteries and racks is available, providing backup power in case of any disruptions. Moreover, the laboratory features a Digital Bomb Calorimeter, a precise instrument for measuring the heat of combustion reactions. These sophisticated tools and apparatuses empower researchers to conduct in-depth investigations into combustion processes, contributing to the development of efficient and effective propulsion systems for rockets and other aerospace applications`;
export default function Space_Engine_Rocketry() {
  return (
    <>
      <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={spaceJumbo} title="Space Engineering and Rocketry" />
        <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Research
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
     
        <div className="outer-card-element text-light rounded-3 my-4 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='zoom-in' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>The notable current research activities in the Department include:</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2 mt-4'>Development of Hybrid Rocket Propulsion Systems</li>
                                <li className='mb-2'>Droplet Combustion Studies</li>
                                <li className='mb-2'>Development of High Regression Rate Hybrid Fuel</li>
                                <li className='mb-2'>Combustion Study of Hybrid Fuels with Nitrous Oxide Oxidizer</li>
                                <li className='mb-2'>Study on Premixed Flame</li>
                                <li className='mb-2'>Commissioning of Solid and Liquid Propulsion Lab</li>
                                <li className='mb-2'>Development of (solid-liquid) Hybrid Rocket Setup</li>
                                <li className='mb-2'>Thermal Analysis of High Energy Materials</li>
                                <li className='mb-2'>Slender Body Aerodynamics at High Angles of Attack at Subsonic Speed</li>
                                <li className='mb-2'>Studies on Reusable Launch Vehicle and Delta/ Double Delta Wing at Subsonic Speed</li>
                                <li className='mb-2'>Cavity and Protrusion Flow Field Studies at Supersonic Speeds</li>
                                <li className='mb-2'>Studies on Spiked Blunt Bodies at Supersonic Mach No.</li>                            
                                 <li className='mb-2'>Supersonic Air- Intake Studies</li>
                                <li className=''>Development of Compressible Navier-Stokes Code</li>
                                </ol>
                        </article>
                    </div>

       
     
    </div>
    <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
         Some Recent Projects
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>

        <div className="outer-card-element text-light rounded-3 my-4 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>

    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-left' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Open cavity studies at supersonic speeds:</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2 mt-4'>Principal investigator: Prof. Sudip Das </li>
                                <li className='mb-2'>Funding agency: RESPOND (ISRO) </li>
                                <li className='mb-2'>Sanctioned fund: Rs. 24.46 lacs </li>
                                <li className='mb-2'>Research project (recently completed)</li>
                                </ol>
                        </article>
                    </div>
    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Effect of Protrusion on Regression Rate and combustion instability at varying l/d of hybrid rocket motor</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2 mt-4'>Principal investigator: Dr. Rajiv Kumar </li>
                                <li className='mb-2'>Funding agency: SERB(DST) </li>
                                <li className='mb-2'>Sanctioned fund: Rs. 31.19 lacs </li>
                                <li className='mb-2'>Research project </li>
                                </ol>
                        </article>
                    </div>
    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-left' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Steady and unsteady investigation on slender body at high angles of attack:</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2 mt-4'>Principal investigator: Dr. Priyank Kumar </li>
                                <li className='mb-2'>Funding agency: ARDB (DRDO) </li>
                                <li className='mb-2'>SSanctioned fund: Rs. 26.86 lacs  </li>
                                <li className='mb-2'>Research project </li>
                                </ol>
                        </article>
                    </div>
</div>
 <div className="container mt-4 mb-3" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
         Completed Projects
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>

        <FundingTable  card_details={funding_card_details} columnNames={columnNames}  Indexes={Indexes}  />
        <div className="container mt-4 pb-3" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Facilities
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <Homecard homeRight={"row"} rect1={react1} rect2={react2} content={content1}/>
    <Homecard homeRight={"row flex-row-reverse"} rect1={react3} rect2={react4} content={content2}/>
    <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText   ">
          Space Engineering and Rocketry Gallery
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
