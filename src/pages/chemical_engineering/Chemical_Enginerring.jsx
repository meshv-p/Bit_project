import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import {chemgal1,chemgal2,chemgal3,chemgal4,chemgal5,chemgal6,chemgal7,chemgal8,chemgal9,chemhome1,chemhome2,chemhome3,chemhome4,cm1,cm2,cm3,cm4,cm5,cm6,cm7,cm8,cm9,cm10,cm11,} from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';




import Domains from '../../components/Domains/Domains';
const content1=`The Department of Chemical and Polymer Engineering at our institution is equipped with state-of-the-art facilities to support cutting-edge research and practical applications in the field. Our facilities include well-equipped laboratories such as the Fluid Mechanics and Mechanical Operation Lab, Heat and Mass Transfer Operations Lab, Reaction Engineering and Catalysis Lab, Process Control Lab, Energy Engineering Lab, and Polymer Processing Lab. These labs are equipped with a range of instruments and equipment, including the Universal Testing Machine (Instron3366), Dynamic Mechanical Analyzer, Electro Spinning setup, Atomic Absorption Spectrometry, Microcompounder, Gas Chromatography, High-Performance Liquid Chromatography, and many more. These facilities enable students and researchers to conduct experiments and investigations in diverse areas of chemical and polymer engineering`
const content2=`Moreover, we offer access to instrumental facilities that further enhance our research capabilities. These include instruments like the Food Texture Analyzer, Spectral Analyzer, Spray Drier, Chemisorption system, Ultraviolet Spectrometry, Dart Impact tester, Oxygen Index Tester, COD & BOD testing setup, High-pressure reactor, Probe Sonicator, Ultrasonic Welding machine, Ultra-Sonic Bath Sonicator, Film & Pipe Testing Machines, and various others. Additionally, we provide computational facilities with software such as Comsol, Aspen Plus, MatLab, and Ansys to facilitate simulations, modeling, and analysis for advanced research projects. Alongside these specialized facilities, our Food Research Lab and other central facilities equipped with high-end sophisticated equipment contribute to fostering a vibrant and innovative research environment within the department`;
const gal = [
    { Sno: '1', image: chemgal1 },
    { Sno: '2', image: chemgal2 },
    { Sno: '3', image: chemgal3 },
    { Sno: '4', image: chemgal4 },
    { Sno: '5', image: chemgal5 },
    { Sno: '6', image: chemgal6 },
    { Sno: '7', image: chemgal7 },
    { Sno: '8', image: chemgal8 },
    { Sno: '9', image: chemgal9 },
  ];
  const react1=chemhome1;
  const react2=chemhome2;
  const react3=chemhome3;
  const react4=chemhome4;
const columnNames = {
    sl_no: "SNo",
      faculty_name: "faculty Name",
      project_title: "Project Title",
      project_type: "Project Type",
      funding_agency: "Funding Agency",
      amount: "Amount",
      duration: "Duration",
      date_of_sanction: "Date of Sanction"
  };
  const persons = [
    {
    name: 'Bio Resources',
    description: 'BIT Mesra conducts research in Bio Resources, exploring sustainable utilization of biological resources and developing innovative solutions in areas such as biofuels, bioplastics.',
    imagePath: cm1,
    },
    {
    name: 'Polymer Blends',
    description: 'BIT Mesra specializes in Polymer Blends research, studying the combination of different polymers to create materials with unique properties, enhancing their applications in various industries.',
    imagePath: cm2,
    },
    {
    name: 'Polymer Composites',
    description: 'Research  focusing on the development and characterization of composite materials with improved mechanical, thermal, and electrical properties for aerospace and automotive.',
    imagePath: cm3,
    },
    {
    name: 'Polymer Membranes',
    description: 'Research in Polymer Membranes, studying their applications in separation processes, water purification, gas separation, and other areas to address environmental and industrial challenges.',
    imagePath: cm4,
    },
    {
    name: 'Conducting Polymers',
    description: 'BIT Mesra actively engages in research on Conducting Polymers, exploring their electrical and optical properties for applications in sensors, electronic devices, and energy storage systems.',
    imagePath: cm5,
    },
    {
    name: 'Biomaterials',
    description: 'Research studying the development of biocompatible materials for medical and healthcare applications, including tissue engineering, drug delivery systems, and implants.',
    imagePath: cm6,
    },
    {
    name: 'Thermoresponsive Polymer',
    description: 'BIT Mesra conducts research in Thermoresponsive Polymers, studying their responsiveness to temperature changes and applications in drug delivery, smart coatings, and other innovative areas.',
    imagePath: cm7,
    },
    {
    name: 'Water Technology',
    description: 'BIT Mesra specializes in Water Technology research, developing sustainable technologies for water treatment, desalination, and management to address water scarcity and environmental concerns.',
    imagePath: cm8,
    },
    {
    name: 'Waste Utilization and Recycling',
    description: 'BIT Mesra focuses on research related to Waste Utilization and Recycling, exploring methods to convert waste materials into valuable products, contributing to waste management and resource conservation.',
    imagePath: cm9,
    },
    {
    name: 'Energy Research',
    description: 'BIT Mesra actively contributes to Energy Research, exploring renewable energy sources, energy storage technologies, and energy efficiency to pave the way for a sustainable and greener future.',
    imagePath: cm10,
    },
    {
    name: 'Novel Food Processing and Preservation',
    description: 'BIT Mesra conducts research in Novel Food Processing and Preservation techniques, exploring innovative methods to process, package, and preserve food to enhance its safety, quality, and shelf life.',
    imagePath: cm11,
    },
    ];
  
  


const funding_card_details =  [
    {
      sl_no: "1",
      faculty_name: "Dr. Pulak Datta (PI) and Dr. Arup Choudhury (Co-PI)",
      project_title: "Development of Radiation, Chemical and Flame-Resistant High-Performance Polymer Composite for Defence Application",
      project_type: "Research",
      funding_agency: "ER&IPR-DRDO, GoI",
      amount: "Rs. 36.722",
      duration: "Three Years",
      date_of_sanction: "28/12/2022"
    },
    {
      sl_no: "2",
      faculty_name: "Dr. Gautam Sarkhel (PI) and Dr. Arup Choudhury (Co-PI)",
      project_title: "Study the Effect of Stretching on the Physico-Mechanical Properties of Acrylates",
      project_type: "Research",
      funding_agency: "DMSRDE-DRDO, GoI",
      amount: "Rs.81.368 Lakhs",
      duration: "Three Years",
      date_of_sanction: "02.08.2022"
    },
    {
      sl_no: "3",
      faculty_name: "Dr. J Sudeepan (CO-PI)",
      project_title: "Role of hybrid nanofillers on the physio-mechanical and tribological behaviour of polymer nanocomposite for load bearing advanced mechanical component applications",
      project_type: "Research",
      funding_agency: "DST-SERB",
      amount: "Rs.45.84 Lakhs",
      duration: "Three Years",
      date_of_sanction: "03.03.2022"
    },
    {
      sl_no: "4",
      faculty_name: "Dr. Anupam Roy (PI)",
      project_title: "Design and development of low cost technology for micronutrient protein-fortified whole grain puffed rice",
      project_type: "Research",
      funding_agency: "ICMR",
      amount: "Rs. 51.02 Lakhs",
      duration: "Two Years",
      date_of_sanction: "09.05.2022"
    },
    {
      sl_no: "5",
      faculty_name: "Dr. Anupam Roy (PI)",
      project_title: "Modification of expanded porous starch matrix (EPSM) for promoting survival of probiotic bacteria in both high temperature and gastrointestinal condition: Lab scale to food product matrix validation",
      project_type: "Research",
      funding_agency: "ICMR",
      amount: "Rs. 15.47 Lakhs",
      duration: "Three Years",
      date_of_sanction: "23.05.2022"
    },
    {
      sl_no: "6",
      faculty_name: "Dr. Debasree Ghosh (PI)",
      project_title: "Design and Development of Energy Efficient modified refrigeration system using Phase Change Material and its CFD analysis",
      project_type: "Research",
      funding_agency: "DST-SERB",
      amount: "Rs 29.81 Lakhs",
      duration: "Three Years",
      date_of_sanction: "08.06.2022"
    },
    {
      sl_no: "7",
      faculty_name: "Dr. Amar Nath Mishra (PI)",
      project_title: "Development of a rational technology for production of ceramic materials from coal mining, washeries & processing wastes.",
      project_type: "Research",
      funding_agency: "CMPDI",
      amount: "Rs. 136.36 Lakhs",
      duration: "Two years",
      date_of_sanction: "21.06.2022"
    }
  ];
  
  const Indexes = [0];


export default function Chemical_Enginerring() {
  return (
    <>
     <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={chemgal1} title="Chemical Engineering" class='jumbo-head' />
      <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Research Domains Of Chemical Engineering
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <Domains persons={persons}/>
        <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Recent Sponsored Research Projects
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <FundingTable  card_details={funding_card_details} columnNames={columnNames} Indexes={Indexes}  />
        
        <Homecard homeRight={"row"} rect1={react1} rect2={react2} content={content1}/>
      <Homecard homeRight={"row flex-row-reverse"} rect1={react3} rect2={react4} content={content2}/>
      <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
            <h2 className="text-center hd-color myText   ">
            Chemical Engineering Gallery
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
