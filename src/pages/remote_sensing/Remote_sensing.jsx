import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import { remgal1,remgal2,remgal3,remgal4,remgal5,remgal6,remgal7,remgal8,remgal9,remhome1,remhome2,remhome3,remhome4,remjumbo,
} from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';

const content1=`The Department of Remote Sensing and Geoinformatics boasts state-of-the-art laboratories equipped with cutting-edge equipment and software, specifically tailored to meet the needs of postgraduate students and research scholars. These advanced facilities play a pivotal role in providing hands-on experience and conducting research in the field of remote sensing and geoinformatics. Among the specialized laboratories are the Geographic Information System Laboratory, Digital Image Processing Laboratory, Digital Photogrammetry Laboratory, GPS and Satellite Navigation Laboratory, Cartography and Image Interpretation Laboratory, Analog Photogrammetry Laboratory, Map Production and Reprography Laboratory, as well as the RS Research & Project Laboratory - I and II. Remote Sensing and Geoinformatics continues to produce skilled professionals and cutting-edge research contributions that significantly impact the broader fields of Earth observation and geospatial analysis.`;

const content2=`In these laboratories, students and researchers have access to a wide range of significant hardware and software. The hardware includes top-notch equipment such as Leica Total Stations, Trimble GPS devices (Juno SB and Geo XT), Laser Range Finder, Unmanned Aerial Vehicles (UAVs) equipped with optical and thermal sensors, Soil Moisture Meters, Leaf Area Index Meters, Spectro-Radiometers, Sunphotometers, Ground Penetrating Radar, Digital Cameras, Signal Stacking Resistivity Meters, High-End Workstations, Desktop Computers, and Smart Boards. In parallel, the software resources consist of industry-leading applications like ArcGIS, Erdas Imagine, WMS, Voxler, Terrset, Pix4D, ArcGIS Pro, ENVI, Leica Photogrammetry Suite, MATLAB, and Intergraph Edu Kit. This comprehensive setup empowers students and researchers to explore the diverse realms of remote sensing and geoinformatics, undertaking complex projects and research endeavors with state-of-the-art tools at their disposal.`;
const gal = [
    { Sno: '1', image: remgal1 },
    { Sno: '2', image: remgal2 },
    { Sno: '3', image: remgal3 },
    { Sno: '4', image: remgal4 },
    { Sno: '5', image: remgal5 },
    { Sno: '6', image: remgal6 },
    { Sno: '7', image: remgal7 },
    { Sno: '8', image: remgal8 },
    { Sno: '9', image: remgal9 }
  ];
  const react1=remhome1;
  const react2=remhome2;
  const react3=remhome3;
  const react4=remhome4;
const columnNames1 = {
    SNo: 'Sno',
    MoU : 'Research Project / MoU ',
    P_I: 'P.I./Co-P.I.',
    Funding_Agency: 'Funding Agency'
  };

  const funding_card_details1= [
        {
            sl_no: 1,
            project_name: "DST FIST Level B Fund for Improvement of S&T Infrastructure in Universities and Higher Educational Institutions",
            pi_copi: "Dr. S. Payra, Dr. A. P. Krishna, Dr. C. Jeganathan, Dr. V. S. Rathore, Dr. Mili Ghosh Nee Lala",
            funding_agency: "DST, GoI"
          },
          {
            sl_no: 2,
            project_name: "Mapping and Morphological Characterization of Craters in the South Polar Region of the Lunar Surface using Chandrayaan-2 Dual Frequency SAR (DFSAR), High Resolution OHRC and TMC-2 data",
            pi_copi: "Dr. V. S. Rathore / Dr. A. P. Krishna",
            funding_agency: "ISRO, Chandrayaan-AO2"
          },
          {
            sl_no: 3,
            project_name: "Modelling Forest Phenological Parameters from Time Series Remote Sensing Data",
            pi_copi: "Dr. C. Jeganathan, Dr. A. P. Krishna, Dr. Mili Ghosh Nee Lala, Mr. Nitish Kumar Sinha",
            funding_agency: "SAC Ahmedabad"
          },
          {
            sl_no: 4,
            project_name: "Remote Sensing based Hydrologic budget of the Subarnarekha River Basin",
            pi_copi: "Dr. A. P. Krishna/ Dr. C. Jeganathan/ Dr. V. S. Rathore",
            funding_agency: "SERB/DST"
          },
          {
            sl_no: 5,
            project_name: "Quantifying the Spatio-Temporal rhythm of vegetation growth, health and its vulnerability due to climate change in different forest ecosystem in North-Eastern India using time-series satellite data",
            pi_copi: "Dr. C. Jeganathan",
            funding_agency: "ISRO-RESPOND"
          },
          {
            sl_no: 6,
            project_name: "Use of Geoinformatics in Rural Road Projects under PMGSY",
            pi_copi: "Dr. A. P. Krishna/ Dr. C. Jeganathan/ Dr. V. S. Rathore/ Mr. Nitish Kr. Sinha",
            funding_agency: "NRSC Hyderabad"
          },
          {
            sl_no: 7,
            project_name: "SMG-BIT Agriculture Research Project",
            pi_copi: "Dr. C. Jeganathan, Dr. A. P. Krishna, Dr. Vandana Bhattacharjee, Dr. Abhijit Mustafi, Dr. Sudhanshu Mishra",
            funding_agency: "SKY MAP Global Pvt. Ltd."
          },
          {
            sl_no: 8,
            project_name: "Geophysical characterization of subsurface Calcrete deposits in semi arid - arid region of Rajasthan using fully polarimetric L- and S- band SAR data",
            pi_copi: "Dr. V.S. Rathore/ Dr. A. P Krishna",
            funding_agency: "SAC Ahmedabad"
          }
   
  ]
  const funding_card_details2= [
    {
        sl_no: 1,
        project_name: "Multi-Source Optimization using Deep Learning Framework for Downscaling Satellite-Derived Thermal Data",
        pi_copi: "Dr. I. Mukherjee (CSE), Dr. C. Jeganathan (DRS)",
        funding_agency: "SERB/DST"
      },
      {
        sl_no: 2,
        project_name: "DST-PURSE Promotion of University Research and Scientific Excellence",
        pi_copi: "Team CSE – Dr. Abhijit Mustafi, Dr. Sandip Dutta, Dr. Sudip K Sahana, Dr. Shamama Anwar, Dr. Debjani Mustafi, Team RS – Dr. A. P. Krishna, Dr. C. Jeganathan, Dr. Mili Ghosh Nee Lala.",
        funding_agency: "DST, GoI"
      },
      {
        sl_no: 3,
        project_name: "Machine Learning and Deep Learning based Automatic Lunar Crater Detecting using Terrain Mapping Camera-2 DEM Images",
        pi_copi: "Dr. Sanchita Paul (CSE), Dr. C. Jeganathan and Dr. Mili Ghosh Nee Lala (DRS)",
        funding_agency: "ISRO, Chandrayaan-AO2"
      }
   
  ]
  const Indexes = [0];

export default function Remote_sensing() {
  return (
   <>
    <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={remjumbo} title="Research And Development" class='jumbo-head' />
      <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Ongoing Projects
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <FundingTable  card_details={funding_card_details1} columnNames={columnNames1}  Indexes={Indexes} />
        <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Inter-Department Collaborations
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <FundingTable  card_details={funding_card_details2} columnNames={columnNames1}  Indexes={Indexes}  />
        <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText   ">
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
          CSE Gallery
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
