import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import {mecgal1,mecgal2,mecgal3,mecgal4,mecgal5,mecgal6,mecgal7,mecgal8,mecgal9,me1,me2,me3,me4,me5,me6,me7,mechome1,mechome2,mechome3,mechome4,
} from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';

import Domains from '../../components/Domains/Domains';
const content1=`The Department of Mechanical Engineering at our institution is equipped with state-of-the-art facilities and advanced equipment to support cutting-edge research and practical learning. One of our prominent facilities is the Solar Energy Lab, which allows students and researchers to explore renewable energy solutions and study the behavior of solar panels and systems. The lab is equipped with solar simulators and monitoring instruments to analyze the efficiency and performance of solar energy technologies. In addition, we have a well-equipped Fluid Mechanics and Hydraulic Machines Lab, where students can conduct experiments to understand the principles of fluid mechanics, study flow characteristics, and analyze the behavior of hydraulic machines. The lab is equipped with various experimental setups and measurement devices to provide hands-on experience in this essential area of mechanical engineering.`;
const content2=`The Drawing Office is a dedicated space equipped with CAD (Computer-Aided Design) workstations and drafting tools, enabling students to create detailed engineering drawings and develop design solutions. This facility plays a crucial role in nurturing students' design skills and preparing them to excel in engineering projects. Furthermore, we have specialized labs like the Strength of Materials Lab, Theory of Machines Lab, Heat Transfer Lab, I.C. Engine Lab, Central CAD Lab, and Computational Lab. These labs are equipped with modern testing apparatus, simulation software, and experimental setups, allowing students to explore fundamental mechanical engineering concepts, analyze mechanical systems, and carry out simulations for design and analysis tasks. The combination of these well-equipped facilities and practical-oriented labs ensures a comprehensive learning experience for our students, preparing them for successful careers in the diverse field of mechanical engineering.`;
const gal = [
    { Sno: '1', image: mecgal1 },
    { Sno: '2', image: mecgal2 },
    { Sno: '3', image: mecgal3 },
    { Sno: '4', image: mecgal4 },
    { Sno: '5', image: mecgal5 },
    { Sno: '6', image: mecgal6 },
    { Sno: '7', image: mecgal7 },
    { Sno: '8', image: mecgal8 },
    { Sno: '9', image: mecgal9 },
   

  ];
  const react1=mechome1;
  const react2=mechome2;
  const react3=mechome3;
  const react4=mechome4;
const columnNames = {
    Title: "Project Title",
    PrincipalInvestigator: "Principal Investigator",
    FundingAgency: "Funding Agency",
    Amount: "Amount",
    Status: "Status"
  };
  const persons = [
    // ... (existing data)
    {
      name: 'Aerodynamics and Fluid Mechanics',
      description: 'BIT Mesra conducts research in Aerodynamics and Fluid Mechanics, exploring the behavior and flow of fluids, particularly air, to develop innovative solutions for various engineering applications, including aerospace.',
      imagePath: me1,
    },
    {
      name: 'Biomechanics',
      description: 'BIT Mesra excels in Biomechanics research, studying the mechanical behavior of biological systems, such as the human body, to gain insights into physiology, injury prevention, and medical device design.',
      imagePath: me2,
      
    },
    {
      name: 'Combustion and Energy Systems',
      description: 'BIT Mesra actively engages in research on Combustion and Energy Systems, focusing on the study of combustion processes and the design of efficient energy systems for power generation and sustainable energy solutions.',
      imagePath: me3,
    },
    {
      name: 'Design and Manufacturing',
      description: 'BIT Mesra specializes in Design and Manufacturing research, exploring innovative techniques and technologies for product design, manufacturing processes, and optimization of engineering systems.',
      imagePath: me4,
    },
    {
      name: 'Dynamics and Control',
      description: 'BIT Mesra conducts research in Dynamics and Control, studying the motion and behavior of mechanical systems and developing control strategies to ensure stability, safety, and optimal performance.',
      imagePath: me5,
    },
    {
      name: 'Materials and Structures',
      description: 'BIT Mesra excels in research related to Materials and Structures, exploring advanced materials, their properties, and their applications in engineering structures, with a focus on sustainability and resilience.',
      imagePath: me6,
    },
    {
      name: 'Vibrations, Acoustics and Fluid-Structure Interaction',
      description: 'BIT Mesra conducts research in Vibrations, Acoustics, and Fluid-Structure Interaction, studying the dynamic behavior of structures, their response to vibrations and acoustics, and their interaction with surrounding fluids.',
      imagePath: me7,
    },
  ];
  
  


const funding_card_details = [
    {
      Title: "DST Consoria project (Joint Project Proposal of VIT, Vellore, CLRI (CSIR) Chennai, and BIT, Mesra )",
      PrincipalInvestigator: "Dr. Rajeev Kumar",
      FundingAgency: "DST",
      Amount: "4.25 Crores",
      Status: "Ongoing"
    },
    {
      Title: "Liquid-liquid flow through horizontal non-uniform cross-section tubes coupled with return bend.",
      PrincipalInvestigator: "Dr. Mukesh Sharma",
      FundingAgency: "TEQIP Collaborative Research Scheme",
      Amount: "20.91 Lakhs",
      Status: "Ongoing"
    },
    {
      Title: "Development of a 3D CLSVOF based multiphase solver for different Density & Viscosity Ratio Fluids.",
      PrincipalInvestigator: "Dr. Lakhbir Brar",
      FundingAgency: "TEQIP Collaborative Research Scheme",
      Amount: "10.81 Lakhs",
      Status: "Ongoing"
    },
    {
      Title: "Development and characterization of under - water friction stir welding (UWFSW) process.",
      PrincipalInvestigator: "Dr. Ratnesh Kumar",
      FundingAgency: "TEQIP Collaborative Research Scheme",
      Amount: "13.82 Lakhs",
      Status: "Ongoing"
    },
    {
      Title: "Bobbin Tool Friction Stir Welding of Aluminium to Copper.",
      PrincipalInvestigator: "Dr. Chandrahas Patel",
      FundingAgency: "TEQIP Collaborative Research Scheme",
      Amount: "10.67 Lakhs",
      Status: "Ongoing"
    },
    {
      Title: "Development of energy efficient Texture Bearing for improving the performance of rotor system.",
      PrincipalInvestigator: "Dr. Faisal Rahmani",
      FundingAgency: "TEQIP Collaborative Research Scheme",
      Amount: "19.83 Lakhs",
      Status: "Ongoing"
    },
    {
      Title: "Cost effective building integrated photovoltaic thermal system with inbuilt water heating system",
      PrincipalInvestigator: "Dr. Om Prakash",
      FundingAgency: "TEQIP Collaborative Research Scheme",
      Amount: "18.45 Lakhs",
      Status: "Ongoing"
    },
    {
      Title: "Unnat Bharat Abhiyan project",
      PrincipalInvestigator: "Dr. Rajeev Kumar",
      FundingAgency: "MHRD",
      Amount: "7 Lakhs",
      Status: "Ongoing"
    },
    {
      Title: "Design and Development of a 6 DoF Gough-Stewart Platform for Virtual Simulators with Pneumatic Actuators",
      PrincipalInvestigator: "Dr. Arun Dayal Udai",
      FundingAgency: "SMC Pneumatics (India) Pvt. Ltd.",
      Amount: "2.35 Lakhs",
      Status: "Completed"
    }
  ];
  const Indexes = [0];


  
export default function mechnical_engineering() {
  return (
    <>
    <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={mecgal1} title="Mechnical Engineering" class='jumbo-head' />
      <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Research Domains Of Mechnical Engineering
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
          Research Project Table Of Mechnical Engineering
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
          Mechnical EngineeringGallery
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
