import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'

import Footer from '../../components/footer/Footer'
import {biogal1,biogal2,biogal3,biohome1,biohome2,biohome3,biohome4,be1,be2,be3,be4,be5,be6,be7,be8,be9,be10,be11,be12,be13,be14,be15,be16,be17,be18,be19,be20,} from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';

import Domains from '../../components/Domains/Domains';

const content1=`The Department of Biotechnology has made significant contributions in the field of bioinformatics and software development, resulting in the creation of valuable databases and cutting-edge software tools. Among these resources are "Predict @proteommetal," a powerful tool for predicting metal binding domains in proteins, and "Swift - Modeller," a Java-based GUI application designed for molecular modeling. Additionally, the department has curated the "Infectious Disease Database" and the "Rice Single Exon Gene Database," providing researchers with valuable resources for their studies. These databases and software tools are valuable assets for researchers and scientists in the field, facilitating their investigations into various aspects of molecular biology, genetics, and bioinformatics. In addition to the comprehensive laboratory facilities, the department boasts cutting-edge instrumentation to support their research endeavors. `;
const content2=`The Department's commitment to advanced research and innovation is further reflected in its state-of-the-art infrastructure and well-equipped laboratories spread over approximately 35,000 square feet. These laboratories cater to a wide range of specializations within the field of biotechnology, including molecular biology, genetic engineering, cell biology, plant and animal biotechnology, microbiology, biochemistry, proteomics, bioinformatics, bioprocess engineering, chemical engineering, and environmental biotechnology. These "state-of-the-art" facilities include a MegaBACE Automated DNA sequencer, GC-Mass Spectrophotometer, GC (FID), Real-Time PCR, HPLC, Typhoon Laser imager, Lyophilizer, Thermal cyclers, Gene pulser, Microplate reader, 2D electrophoresis system, Chromatography system, Spectrophotometers, Fluorimeters, modern microscopes with digital imaging systems, Leica microscopes with colony counters and fluorescence capabilities, lab, and pilot-scale Bioreactors, and cross-flow filtration systems`;
const gal = [
    { Sno: '1', image: biogal1 },
    { Sno: '2', image: biogal2 },
    { Sno: '3', image: biogal3 },

  ];
  const react1=biohome1;
  const react2=biohome2;
  const react3=biohome3;
  const react4=biohome4;
const columnNames = {
    SNo: 'Sno',
    ProjectTitle : 'Project Title ',
    P_I: 'PI / Co- PI/Collaborator',
    Funding_Agency: 'Funding Agency',
    Sanction_order: 'Sanction order no. and Date',
    SanctionedAmount : 'Sanctioned Amount ',
    Duration: 'Duration of the Project'
  };
  const funding_card_details= [
    {
          sl_no: 1,
          project_title: "Analysis and identification of features from neural dynamics and their correlations with autonomic nervous system for Development of Hybrid Brain-Computer Interface",
          pi_copi_collaborator: "Dr. Rakesh Kumar Sinha",
          funding_agency: "AICTE",
          sanction_order_no_and_date: "RPS File No. 8-34/FDC/RPS (Policy-1)/2019-20, 14/08/2020- 13/08/2023",
          sanctioned_amount_in_lakhs: 17.64,
          duration_of_project: "2020-08-14 to 2023-08-13"
        },
        {
          sl_no: 2,
          project_title: "Brain Signal Controlled Wheelchair",
          pi_copi_collaborator: "Dr. P. K. Upadhyay (PI), Dr. Yogender Aggarwal (Co-PI)",
          funding_agency: "ICMR",
          sanction_order_no_and_date: "BMI/12(01)/2022 & 19/03/2023",
          sanctioned_amount_in_lakhs: 31.01,
          duration_of_project: "2023 to 2026"
        },
        {
          sl_no: 3,
          project_title: "Development of a rational technology for production of ceramic materials from coal mining, washeries and processing wastes",
          pi_copi_collaborator: "D. M. Pandey (Co-PI)",
          funding_agency: "CIL GOI",
          sanction_order_no_and_date: "CIL/R &D/04/17/2022 & 08-07-2022",
          sanctioned_amount_in_lakhs: 136.36,
          duration_of_project: "2022-07-11 to 2024-11-10"
        },
        {
          sl_no: 4,
          project_title: "Bioleaching process for the recovery of precious metals (Cu, Ag) from electronic waste: Towards circular economy",
          pi_copi_collaborator: "Dr Muthu (PI), Dr V. K. Nigam (Co-PI)",
          funding_agency: "SERB",
          sanction_order_no_and_date: "CRG/2022/006243 & 07/02/2023",
          sanctioned_amount_in_lakhs: 29.51,
          duration_of_project: "2023 to 2026"
        },
        {
          sl_no: 5,
          project_title: "Indigenous development of novel biomaterial for laser tissue soldering process and real-time monitoring with optical coherence tomography/angiography system",
          pi_copi_collaborator: "Dr. Raju Poddar (PI) and Dr. Ashok Pattnaik (Co-PI)",
          funding_agency: "DST-SERB",
          sanction_order_no_and_date: "CRG/2022/001404 dated 23.02.2023",
          sanctioned_amount_in_lakhs: 41.00,
          duration_of_project: "2023-2026"
        },
        {
          sl_no: 6,
          project_title: "Indigenous development of low-cost, portable, high-speed confocal Scanning Laser Ophthalmoscopy (cSLO) system for fluorescence angiographic and photoreceptors imaging of human eye",
          pi_copi_collaborator: "Dr. Raju Poddar (PI)",
          funding_agency: "ICMR",
          sanction_order_no_and_date: "2020-0540-ITR dated 19.02.2021",
          sanctioned_amount_in_lakhs: 43.00,
          duration_of_project: "2021-2024"
        },
        {
          sl_no: 7,
          project_title: "Indigenous development of low-cost optical imaging system for early detection of Retinoblastoma in child",
          pi_copi_collaborator: "Dr, Raju Poddar (PI) and Dr. R. K. Sinha (Co-PI)",
          funding_agency: "DHR, GOI",
          sanction_order_no_and_date: "2022-1566 dated 02.02.2023",
          sanctioned_amount_in_lakhs: 38.00,
          duration_of_project: "2023-2026"
        },
        {
          sl_no: 8,
          project_title: "Indigenous development of low-cost AI enabled portable multispectral camera system for rapid early detection of plant diseases and other stress based morphological changes",
          pi_copi_collaborator: "Dr, Raju Poddar (PI) and Dr. K. Mukhopadhyay (Co-PI)",
          funding_agency: "IDEAS, Technology Innovation Hub @ Indian Statistical Institute",
          sanction_order_no_and_date: "",
          sanctioned_amount_in_lakhs: 5.26,
          duration_of_project: "2022-2025"
        },
        {
          sl_no: 9,
          project_title: "Self-fitting 4D-Printed Smart Scaffolds with Efficient Bone Regenerative Potential",
          pi_copi_collaborator: "Dr. Sneha Singh (PI), Dr. Dilip K. Singh (Co-PI), and Prof. Ashok Kumar (Co-PI, IIT Kanpur)",
          funding_agency: "DST-SERB",
          sanction_order_no_and_date: "CRG/2021/002179 dated 24.12.2021",
          sanctioned_amount_in_lakhs: 70.56,
          duration_of_project: "2021-2024"
        },
        {
          sl_no: 10,
          project_title: "Development of Novel Antileukemics through Structural and Functional Studies of Engineered and Chimeric Plant type Asparaginase",
          pi_copi_collaborator: "Dr V. K. Nigam (Co-PI), Dr. H. R. Singh (Co-PI), Dr. K. K. Pradhan (PI)",
          funding_agency: "DST-SERB",
          sanction_order_no_and_date: "File No. CRG/2021/006543, December 23, 2021",
          sanctioned_amount_in_lakhs: 33.66,
          duration_of_project: "2022-2025"
        },
        {
          sl_no: 11,
          project_title: "A Multi-scale Simulation-based Approach to Design, Characterize and Optimize the Peptide Based Scaffold for Tissue Engineering Applications",
          pi_copi_collaborator: "Dr. Alok Jain (PI)",
          funding_agency: "SERB-SRG",
          sanction_order_no_and_date: "SRG/2022/000575, 07 Nov 2022",
          sanctioned_amount_in_lakhs: 29.81,
          duration_of_project: "2022-2024"
        },
        {
          sl_no: 12,
          project_title: "In-silico design and validation of boronic acid-based molecules for the treatment of colorectal cancer: Computer aided hit to lead discovery",
          pi_copi_collaborator: "Dr. Alok Jain (PI)",
          funding_agency: "DBT-Ramalingaswami Fellowship",
          sanction_order_no_and_date: "BT/HRD/35/02/2006, 17 May 2019",
          sanctioned_amount_in_lakhs: 113.60,
          duration_of_project: "2019-2024"
        },
        {
          sl_no: 13,
          project_title: "Nanorobotic drug delivery system & LAB-ON-CHIP platform development",
          pi_copi_collaborator: "Dr. Koel Mukherjee (PI)",
          funding_agency: "IHFC-IIT Delhi",
          sanction_order_no_and_date: "GP/2023/NR/035, 31st March 2023",
          sanctioned_amount_in_lakhs: 45.88,
          duration_of_project: "2023-2026"
        }
  
    
]
const persons1 = [
  // ... (existing data)
  {
    name: 'Agriculture & Plant Biotechnology',
    description: 'BIT Mesra excels in research related to Agriculture & Plant Biotechnology, focusing on innovative projects that address various aspects of plant biotechnology and its applications in agriculture and crop improvement.',
    imagePath: be1,
  },
  {
    name: 'Algal Biotechnology',
    description: `BIT Mesra actively engages in cutting-edge Algal Biotechnology research, exploring algae's vast potential for various applications, including biofuel production, wastewater treatment, and value addition to biomass and waste materials`,
    imagePath: be2,
  },
  {
    name: 'Animal & Plant Tissue Culture',
    description: 'BIT Mesra conducts research on Animal & Plant Tissue Culture, studying the techniques for growing cells, tissues, and organs of both animals and plants, enabling valuable applications in medicine, agriculture.',
    imagePath: be3,
  },
  {
    name: 'Biofuel Production',
    description: 'BIT Mesra actively participates in research related to Biofuel Production, exploring sustainable methods to produce biofuels from renewable resources, contributing to the development of eco-friendly energy solutions.',
    imagePath: be4,
  },
  {
    name: 'Bioinformatics',
    description: 'BIT Mesra excels in research related to Bioinformatics, utilizing computational techniques to analyze and interpret biological data, playing a crucial role in genomics, proteomics, and other areas of life sciences.',
    imagePath: be5,
  },
  {
    name: 'Bioprocess Engineering',
    description: 'BIT Mesra actively engages in Bioprocess Engineering research, focusing on the design and optimization of biological processes to produce valuable products such as pharmaceuticals, enzymes, and biofuels.',
    imagePath: be6,
  },
  {
    name: 'Biosensor & Nano-biotechnology',
    description: 'BIT Mesra is involved in research on Biosensor & Nano-biotechnology, exploring the development of cutting-edge biosensors and applications of nanotechnology in medicine, agriculture, and environmental monitoring.',
    imagePath: be7,
  },
  {
    name: 'Down Stream Processing',
    description: 'BIT Mesra conducts research on Down Stream Processing, focusing on the separation and purification of biotechnological products, enabling the production of high-quality pharmaceuticals and bio-based chemicals.',
    imagePath: be8,
  },
  {
    name: 'Environmental Biotechnology',
    description: 'BIT Mesra excels in Environmental Biotechnology research, exploring innovative solutions to address environmental challenges through the use of biotechnological approaches for waste treatment and pollution control.',
    imagePath: be9,
  },
  {
    name: 'Food Biotechnology',
    description: 'BIT Mesra actively participates in Food Biotechnology research, exploring applications of biotechnology to enhance food quality, safety, and production, contributing to the development of the food industry.',
    imagePath: be10,
  },
  {
    name: 'Industrial Biotechnology',
    description: 'BIT Mesra is involved in Industrial Biotechnology research, focusing on the use of biological systems and processes for the production of bio-based chemicals, materials, and energy in various industries.',
    imagePath: be11,
  },
  {
    name: 'Medicinal Plant',
    description: 'BIT Mesra actively engages in research related to Medicinal Plant, exploring the potential of plants in traditional medicine, and studying their active compounds for pharmaceutical applications and drug discovery.',
    imagePath: be12,
  },
  {
    name: 'Microbial Resources',
    description: 'BIT Mesra conducts research on Microbial Resources, studying diverse microorganisms and their applications in biotechnology, including the production of enzymes, biofuels, and biopolymers.',
    imagePath: be13,
  },
  {
    name: 'Microbial Biotransformation',
    description: 'BIT Mesra excels in research related to Microbial Biotransformation, focusing on the use of microorganisms to transform and synthesize valuable compounds, contributing to the pharmaceutical and chemical industries.',
    imagePath: be14,
  },
  {
    name: 'Value Addition to Biomass & Waste Materials',
    description: 'Research on Value Addition to Biomass & Waste Materials, exploring innovative methods to utilize  waste for the production of valuable products, including biofuels and bio-based chemicals.',
    imagePath: be15,
  },
];

const persons2 = [
  // ... (existing data)
  {
    name: 'Biosignal Analysis',
    description: 'BIT Mesra conducts cutting-edge research in Biosignal Analysis, exploring advanced techniques to interpret and analyze physiological signals for diagnostic and therapeutic applications in healthcare.',
    imagePath: be16,
  },
  {
    name: 'Biomedical Instrumentation',
    description: 'BIT Mesra is actively involved in Biomedical Instrumentation research, focusing on the development and application of advanced devices and systems for medical diagnostics, monitoring, and treatment.',
    imagePath: be17,
  },
  {
    name: 'Artificial Intelligence in Healthcare',
    description: 'BIT Mesra actively engages in research on Artificial Intelligence in Healthcare, exploring innovative AI-based solutions to improve medical diagnosis, patient care, and healthcare management.',
    imagePath: be18,
  },
  {
    name: 'Systems Biology',
    description: 'BIT Mesra explores Systems Biology, an interdisciplinary field that combines computational and experimental approaches to study complex biological systems holistically, understanding their behavior and functions.',
    imagePath: be19,
  },
  {
    name: 'Electrophysiology',
    description: 'BIT Mesra conducts research in Electrophysiology, studying the electrical activity of biological cells and tissues, particularly in the nervous system, to gain insights into neural functions and related medical applications.',
    imagePath: be20,
  }
]
const Indexes = [0];

export default function Bio_Engine_Bio_Tech() {
  return (
  <>
  <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={biogal1} title="Bio-Engineering and Bio-Technology" class='jumbo-head' />
      <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Research Domains Of Biotechnology
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <Domains persons={persons1}/>
      <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Research Domains Of Biomedical
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <Domains persons={persons2}/>

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
        <FundingTable  card_details={funding_card_details} columnNames={columnNames} Indexes={Indexes} />
        
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
