import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import { chemgistrygal1,chemgistrygal2,chemgistrygal3,chemgistrygal4,chemgistrygal5,chemgistrygal6,chemgistrygal7,chemistryHome1,chemistryHome2,chemistryHome3,chemistryHome4, chemgal4,
} from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';

const content1=`The Chemistry Lab is equipped with a diverse range of major instruments that cater to various research needs and experimental requirements. Among these, the Nuclear Magnetic Resonance instrument operating at 400 MHz, supported by DST FIST, stands as a crucial tool for analyzing molecular structures and interactions. Additionally, the lab houses an Electrochemical Analyzer (Autolab 302N) and a Solar Simulator from Peccell Technology, Japan, which significantly aid in electrochemical studies and simulating solar radiation for photovoltaic research. The UV-Visible Spectrophotometers, funded by UGC and DST, play a pivotal role in analyzing the absorption characteristics of compounds, while the UV Vis NIR Spectrophotometer, supported by AICTE, expands the spectral range for versatile spectroscopic investigations. Other valuable major instruments include the Multi-vessel Dip Coating System, Microwave Synthesizer/Reactor, Jar Test Apparatus, Osmometer, Polarimeter`

const content2=`In addition to the major instruments, the Chemistry Lab is well-equipped with a range of minor instruments that bolster the research capabilities of the department. The pH meter allows precise measurement of acidity or alkalinity, while the Flash Point Apparatus assists in determining the flash point of volatile substances. The Viscometer provides valuable viscosity data for fluids, and the Junker's Gas Calorimeter facilitates calorimetric analysis. Moreover, the lab houses essential equipment like Hot Air Ovens, Furnaces, Incubators, Balances, Double Distillation Apparatus, Magnetic Stirrers, and Ultrasonic Baths, all of which serve crucial roles in carrying out routine experiments and sample preparations. These minor instruments, though relatively smaller in scale, are indispensable for conducting a wide range of chemical analyses and contribute significantly to the overall research capabilities and achievements of the Chemistry Lab.`
const gal = [
    { Sno: '1', image: chemgistrygal1 },
    { Sno: '2', image: chemgistrygal2 },
    { Sno: '3', image: chemgistrygal3 },
    { Sno: '4', image: chemgistrygal4 },
    { Sno: '5', image: chemgistrygal5 },
    { Sno: '6', image: chemgistrygal6 },
    { Sno: '7', image: chemgistrygal7 },

   

  ];
  const react1=chemistryHome1;
  const react2=chemistryHome2;
  const react3=chemistryHome3;
  const react4=chemistryHome4;
const columnNames = {
    Sl_No: "Sno",
    Project_Title: "Project Title",
    PI_Collaborator: "PI / Co- PI/Collaborator",
    Funding_Agency: "Funding Agency",
    Date_of_Sanction: "Date of Sanction",
    Duration_of_the_Project: "Duration of the Project",
    Sanctioned_Amount: "Sanctioned Amount"
  };
  const funding_card_details = [
        {
          Sl_No: "1",
          Project_Title: "Combination of small light emitting molecules with carbon materials for next generation optoelectronics",
          PI_Collaborator: "Dr. Anirban Pradhan (PI)",
          Funding_Agency: "SERB-DST Government of India",
          Date_of_Sanction: "June 2022",
          Duration_of_the_Project: "3 years",
          Sanctioned_Amount: "16.0"
        },
        {
          Sl_No: "2",
          Project_Title: "Bottom-up solution phase synthesis of curved polycyclic aromatics, nanographene, carbon nanoribbons and nanobelts for next-generation optoelectronics",
          PI_Collaborator: "Dr. Anirban Pradhan (PI)",
          Funding_Agency: "SERB-DST Government of India",
          Date_of_Sanction: "Sep, 22",
          Duration_of_the_Project: "2 years",
          Sanctioned_Amount: "31.18"
        },
        {
          Sl_No: "3",
          Project_Title: "Synthesis of new carbon-based material as alternative energy sources as well as optoelectronic application",
          PI_Collaborator: "Dr. A. Pradhan (PI)",
          Funding_Agency: "BIT Mesra, Ranchi",
          Date_of_Sanction: "Jan, 22",
          Duration_of_the_Project: "2 years",
          Sanctioned_Amount: "5.0"
        },
        {
          Sl_No: "4",
          Project_Title: "Development of non-destructive process technology for simultaneous micronutrient fortification and bioavailability enhancement in Dal through selective binding of phytic acid",
          PI_Collaborator: "Dr. Subhendu Naskar (Co-PI)",
          Funding_Agency: "DBT",
          Date_of_Sanction: "Feb 2021",
          Duration_of_the_Project: "3 years",
          Sanctioned_Amount: "57.90"
        },
        {
          Sl_No: "5",
          Project_Title: "Metal organic frameworks and sequential electrocoagulation for remediation of mining effluents",
          PI_Collaborator: "Dr. S. Mishra (PI)",
          Funding_Agency: "SERB",
          Date_of_Sanction: "March, 22",
          Duration_of_the_Project: "3 years",
          Sanctioned_Amount: "25.01"
        },
        {
          Sl_No: "6",
          Project_Title: "Biocompatibility and mechanical studies of nanostructured HAP, metal doped nanostructured HAP on alumina by RF Magnetron Sputtering",
          PI_Collaborator: "Dr. Deep Shikha (PI)",
          Funding_Agency: "SERB",
          Date_of_Sanction: "Feb, 22",
          Duration_of_the_Project: "3 years",
          Sanctioned_Amount: "27.72"
        },
        {
          Sl_No: "7",
          Project_Title: "Photo-responsive tetra-aryl pyrazole based emissive organic nano-cage as an artificial-light harvester for heterogeneous photocatalysis",
          PI_Collaborator: "Dr. A. Kumar (PI)",
          Funding_Agency: "DST",
          Date_of_Sanction: "Sep, 22",
          Duration_of_the_Project: "2 years",
          Sanctioned_Amount: "31.76"
        },
        {
          Sl_No: "8",
          Project_Title: "Direct Dynamics Simulation Study on the Catalytic Hydrogenation of CO2 by Some Transition Metal Hydride Clusters.",
          PI_Collaborator: "Dr. D. Chakravorty (PI)",
          Funding_Agency: "DST",
          Date_of_Sanction: "Sep, 22",
          Duration_of_the_Project: "2 years",
          Sanctioned_Amount: "23.64"
        },
        {
          Sl_No: "9",
          Project_Title: "Electrospun PVDF based piezoelectric nanocomposite energy harvesters for self-powered smart wearable and implantable electronics",
          PI_Collaborator: "Dr. B. Dasgupta Ghosh",
          Funding_Agency: "SERB",
          Date_of_Sanction: "Jan, 23",
          Duration_of_the_Project: "3 years",
          Sanctioned_Amount: "45"
        },
        {
          Sl_No: "10",
          Project_Title: "Synthesis of biobased and multifunctional adhesive hydrogels for environmental and biomedical applications",
          PI_Collaborator: "Dr. Sumit Mishra",
          Funding_Agency: "SERB SIRE Award",
          Date_of_Sanction: "Oct 22",
          Duration_of_the_Project: "6 months",
          Sanctioned_Amount: "17.77"
        },
        {
          Sl_No: "11",
          Project_Title: "Natural Product Inspired Synthesis and Biological Evaluation of Novel Pyranone/Pyridinone Analogs as Enhancer of Muscle Energy Expenditure to Treat Type 2 Diabetes",
          PI_Collaborator: "Dr. C. Bal (PI)",
          Funding_Agency: "DST",
          Date_of_Sanction: "Sep, 22",
          Duration_of_the_Project: "3 years",
          Sanctioned_Amount: "16.17"
        }
     
      
  ];

  const Indexes = [0];

export default function Chemistry_departments() {
  return (
    <>
     <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={chemgal4} title="Chemistry Department" class='jumbo-head' />
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
                        <h4 className='fw-semibold text-highlighter text-center'>Research</h4>
                        <article className='fw-light'>
                            <ol className='justify '>
                          <p className=''>The research carried out in the Department is oriented towards the applied end of the research spectrum. Hence most of the results are of direct relevance to the needs of the society at large.</p>
                          <li>Biomaterials</li>
  <li>Electrochemistry</li>
  <li>Conducting polymer, nanocomposites, bio & gas sensor applications</li>
  <li>Bioinorganic Chemistry and Renewable Energy</li>
  <li>Environmental Chemistry</li>
  <li>Semiconductors and Device Applications</li>
  <li>Organic-Medicinal Chemistry and Molecular Modeling</li>
  <li>Computational and Theoretical Chemistry</li>
                            </ol>
                        </article>
                    </div>
            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'>Research Collaborations</h4>
                        <article className='fw-light'>
                            <ol className='justify '>
                                <p>The Department of Chemistry has initiated Research collaboration with the following Universities and Institutions</p>
                                <li>National Centre for Cell Science, Pune (DBT Institute)</li>
  <li>ICMR Virus Unit, Kolkata (Indian Council of Medical Research)</li>
  <li>Center for Chronic Viral Diseases, Graduate School of Medical and Dental Sciences, Kagoshima University Kagoshima 890-8544, Japan.</li>
                            </ol>
                        </article>
                    </div>
                    </div>


                    <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                    Recent Sponsored Projects
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                </div>
            </div>
    <FundingTable  card_details={funding_card_details} columnNames={columnNames}  Indexes={Indexes} />
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
          Chemistry Department Gallery
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
