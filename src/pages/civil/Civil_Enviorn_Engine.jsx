import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'

import Domains from '../../components/Domains/Domains';
import Footer from "../../components/footer/Footer"
import Homecard from '../../components/HomeCard/Homecard';

import FundingTable from '../../components/fundingTable/FundingTable'
import Galery from '../../components/galery/Galery';
import {civilHome1,civilHome2,civilHome3,civilHome4,civilJumbo,civilgal1,civilgal2,civilgal3,civilgal4,civilgal5,civilgal6,civilgal7,cv1,cv2,cv3,cv4,cv5,cv6,cv7,cv8,cv9,cv10,cv11,cv12,cv13,cv14,cv15,cv16,cv17,cv18,cv19,cv20,cv21,} from '../../images/Images';

const react1=civilHome1;
const react2=civilHome2;
const react3=civilHome3;
const react4=civilHome4;
const columnNames = {
  FacultyInvolved: 'Faculty involved',
  Title_of_the_project: `Title of the project`,
  FundingAgency: 'Funding Agency',
  Amount: 'Amount (Lakhs) ',
  status:`Status` 
};



const gal = [
  { Sno: '1', image: civilgal1 },
  { Sno: '2', image: civilgal2 },
  { Sno: '3', image: civilgal3 },
  { Sno: '4', image: civilgal4 },
  { Sno: '5', image: civilgal5 },
  { Sno: '6', image: civilgal6 },
  { Sno: '7', image: civilgal7 }
];
const funding_card_details= [
  {
  FacultyInvolved: 'Dr. Bindu Lal',
  Title_of_the_project: `Study of Climate changes due to global warming in Jharkhand and a new intelligent model for air pollutant concentration prediction`,
  FundingAgency: 'UGC',
  Amount: '1,00,000',
  status:`Completed `
  },
  
  {
  FacultyInvolved: 'Dr. R. R. Sahay',
  Title_of_the_project: `Flood forecasting of Kosi river through ANN`,
  FundingAgency: 'UGC',
  Amount: '2,00,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. R. R. Sahay',
  Title_of_the_project: `Flood modeling of North Bihar rivers using soft computing techniques`,
  FundingAgency: 'AICTE',
  Amount: '5,50,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Indrajit Roy',
  Title_of_the_project: `Sactioning authority-Coal India Limited (CIL) R&D grant for carrying out research on coal related projects at three opencast mining sites`,
  FundingAgency: 'CIL, Kolkata',
  Amount: '3,50,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Indrajit Roy',
  Title_of_the_project: `Slope Stability Study of Gare-Pelma2`,
  FundingAgency: 'Lanco Coal Company',
  Amount: '2,00,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Indrajit Roy',
  Title_of_the_project: `Slope Stability Study of Umer opencast mines (western quarry) of WCL`,
  FundingAgency: 'Wstern Coalfields Limited',
  Amount: '3,00,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Indrajit Roy',
  Title_of_the_project: `Slope Stability Study of Ummer opencast mine (eastern quarry), Slope Stability Study of Surekha Lignite mine.`,
  FundingAgency: 'Gujrat Mineral Development corporation',
  Amount: '3,00,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Indrajit Roy',
  Title_of_the_project: `Slope Stability Study of Mahan block.`,
  FundingAgency: 'Essar',
  Amount: '3,50,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Sidhartha Sengupta',
  Title_of_the_project: `Behaviour of piled raft foundation in layered soils under eccentric vertical loading.`,
  FundingAgency: 'DST',
  Amount: '8,10,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Sidhartha Sengupta',
  Title_of_the_project: `Influence of stress path on behavior of clyey soils under plane stain condition.`,
  FundingAgency: 'UGC',
  Amount: '1,68,000',
  status:`Completed`
  },
  {
  FacultyInvolved: 'Dr. Indrajit Roy',
  Title_of_the_project: `Stability study of embedded in the back-filled dump of opencast mines of Coal India`,
  FundingAgency: 'CMPDI, Ranchi',
  Amount: '5,50,000',
  status:`Completed`
  },

  


];
const content1=`The Department of Civil Engineering has well equipped laboratories related to various specializations such as Surveying, Structural Engineering, Soil Mechanics and Foundation Engineering, Hydraulics, Building Materials, Transportation Engineering, Rock Mechanics, Environmental Science and Engineering and a Computer Laboratory. The field tests generate topics for the advanced laboratory courses in the respective areas. The Civil Engineering Department at BIT Mesra is well-equipped with a wide range of facilities to support practical research and hands-on learning experiences. The department boasts state-of-the-art laboratories that cater to various aspects of civil engineering. For field-testing in Geotechnical Engineering and Transportation Engineering, the department provides advanced equipment and tools to assess the behavior of soils, pavements, and transportation infrastructure under real-world conditions.`;

const content2=`Carbonation chamber, Accelerated curing tank, ACM Instrumentation, Rapid Chloride Penetration, Concrete Maturity meter, Heat of hydration, half-cell potentiometer, Rebound hammer, Cover Meter, Core Cutter, Pulveriser, UPV tester, Static – cum- Cyclic triaxial testing machine, Laser diffraction particle size analyser, Automatic soil compactor, Relative density testing equipment, Consolidation bench, Large box shear test, Computerized direct shear apparatus, Digital meter, Shaking water bath, Probe Sonicator, TCLP Rotary Agitator, Peristaltic pump, Quartz distillation apparatus, Nephlo turbidity meter, Total Station, Microwave Digestion System, UV-Vis Spectrophotometer, Respirable Dust Sampler, NOx Analyser, CO Analyser, Muffle Furnace, BOD Incubator, Rotary Agitation Apparatus for TCLP.
Some Computational Facilities include PLAXIS, Geostudio (SLOPE/W, SEEP/W, QUAKE/W, SIGMA/W, TEMP/W), MODFLOW, STUDS, Bentley Academic Bundle, SPSS, MATLAB.
`;
const persons = [
    {
      name: 'Air Pollution, Applied Hydrology',
      description: 'Research on AIR POLLUTION encompasses a multidisciplinary approach to understanding the causes, effects, and mitigation strategies related to air quality degradation. The focus extends to the impact of air pollution on human health, ecosystems, and climate.',
      imagePath: cv1,
    },
    {
      name: 'Bioremediation, Composite Materials',
      description: 'Bioremediation is an innovative and environmentally friendly approach used to clean up contaminated sites by harnessing the natural abilities of microorganisms, plants, or enzymes to degrade or transform hazardous pollutants into less harmful substances.',
      imagePath: cv2,
    },
    
    {
      name: 'Geo-Environmental Engineering',
      description: `Geo-Environmental Engineering is a specialized field that integrates principles of geotechnical engineering and environmental science to address the challenges related to soil and groundwater contamination, waste management, sustainability, and remediation.`,
      imagePath: cv3,
    },
    {
      name: 'Concrete Structures',
      description: `Research on Concrete Structures at BIT Mesra revolves around exploring innovative materials, design methodologies, and construction techniques to enhance the durability, strength, and sustainability of concrete-based infrastructure.  `,
      imagePath: cv4,
    },
    {
      name: 'Durability Of Concrete',
      description: `Durability of concrete is a critical aspect in the design and construction of long-lasting and resilient structures. It refers to the ability of concrete to withstand various environmental and service conditions while maintaining its intended performance and structural integrity over time.`,
      imagePath: cv5,
    },
    {
        name: 'Soil stabilization',
        description: 'Soil stabilization is a technique used to improve the engineering properties of soil, making it more suitable for construction purposes. At BIT Mesra, research on soil stabilization focuses on developing effective methods to enhance the strength, stability, and durability of soils, ',
        imagePath: cv6,
      },
    {
      name: 'Groundwater Flow Modelling',
      description: 'Groundwater flow modeling research involves using mathematical and numerical techniques to simulate the movement of groundwater through subsurface formations, supporting hydrogeology and water resources management.',
      imagePath: cv7,
    },
    {
      name: 'Groundwater Quality Management',
      description: 'Groundwater quality management ensures safe and clean groundwater through monitoring, assessment, and remediation strategies such as drinking water supply, agriculture, and environmental preservation.',
      imagePath: cv8,
    },
    {
      name: 'Heavy Metal Pollution Monitoring & Remediation',
      description: 'Heavy metal pollution monitoring and remediation is a critical area of research and action to protect the environment and human health from the harmful effects of heavy metal contaminants. ',
      imagePath: cv9,
    },
    {
      name: 'Traffic Flow Modelling',
      description: 'Traffic flow modeling is a fundamental aspect of transportation engineering that involves the study  of vehicular movements on road networks. Traffic flow modeling focuses on understanding traffic behavior, optimizing traffic.',
      imagePath: cv10,
    },
    {
        name: 'Solid Waste Management',
        description: 'Solid waste management involves the collection, disposal, and treatment of solid waste to protect public health and the environment. Solid waste management focuses on developing sustainable and efficient waste management practices.',
        imagePath: cv11,
      },
      {
        name: 'Open Channel Hydraulics',
        description: 'Open channel hydraulics is a branch of fluid mechanics that deals with the flow of water in open channels, such as rivers, canals, and streams. It involves studying various aspects of flow behavior and water management.',
        imagePath: cv12,
      },
    {
      name: 'Mine Slope Stability',
      description: 'Mine slope stability is focuses on the assessment and management of the stability of slopes in open-pit mines. It involves studying various factors that can influence the stability of slopes and implementing measures to prevent slope failures.',
      imagePath: cv13,
    },
   
  
   
    {
      name: 'Structural Dynamics',
      description: 'Structural dynamics is a specialized field in structural engineering that deals with the analysis and behavior of structures under dynamic loads, such as earthquakes, wind, and vibrations. It focuses on understanding the dynamic response of structures',
      imagePath: cv14,
    },
    {
      name: 'Wastewater Treatment',
      description: 'Wastewater treatment involves removing contaminants and pollutants from wastewater to make it safe for discharge or reuse. Wastewater treatment focuses on developing efficient and sustainable purification methods, safeguarding public health and the environment.',
      imagePath: cv15,
    },
    {
      name: 'Water Quality Assessment',
      description: 'Water quality assessment involves evaluating the physical, chemical, and biological characteristics of water to determine its suitability for various uses and to identify potential sources of contamination. ',
      imagePath: cv16,
    },
 
    {
      name: 'Climate Change',
      description: `Climate change refers to the long-term alteration of Earth's climate, including changes in temperature, precipitation patterns, and weather events, primarily attributed to human activities and greenhouse gases.`,
      imagePath: cv17,
    },
    {
        name: 'Driver behaviour.',
        description: 'Driver behavior is a critical aspect of road safety and transportation engineering that focuses on studying how drivers interact with their vehicles, other road users, and the surrounding environment.',
        imagePath: cv18,
      },
    {
      name: 'Ecosystem Assessment & Management',
      description: 'Ecosystem assessment and management is a multidisciplinary approach that involves the study and evaluation of ecosystems to understand their structure, function, and dynamics. ',
      imagePath: cv19,
    },
    {
      name: 'Geotechnical Earthquake Engineering',
      description: 'Geotechnical Earthquake Engineering is a specialized field that focuses on understanding the behavior of soils and rock materials during seismic events. ',
      imagePath: cv20,
    },
 
    {
        name: 'Assessment & Remediation of Emerging Pollutants',
        description: 'Emerging pollutants in water focuses on identifying and mitigating the presence of new and emerging contaminants in water bodies.',
        imagePath: cv21,
      },
  
  ];
  const Indexes = [0];

export default function Civil_Enviorn_Engine() {
  return (
    <>
     <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={civilJumbo} title="Civil and Environmental Engineering" />
        <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Recent Research Domains
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
          Recent Projects
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <FundingTable  card_details={funding_card_details} columnNames={columnNames} Indexes={Indexes}  />
        <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
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
          CEE Gallery
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
    <Galery gal={gal}/>
        <Footer/>
    </>
  )
}
