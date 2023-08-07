import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'

import Domains from '../../components/Domains/Domains';
import Footer from "../../components/footer/Footer"
import Homecard from '../../components/HomeCard/Homecard';

import FundingTable from '../../components/fundingTable/FundingTable'


import {archiGal1,archiGal2,archiGal3,archiGal4,archiGal5,archiGal6,archiGal7,archiGal8,archiGal9,archiGal10,archiGal11,
  archiGal12,archiHome1,archiHome2,archiHome3,archiHome4,ad1,ad2,ad3,ad4,ad5,ad6,ad7,ad8,ad9,ad10,ad11,ArchitectureJumbo} from '../../images/Images'

import Galery from '../../components/galery/Galery';
const gal = [
  { Sno: '1', image:archiGal1},
  { Sno: '2', image:archiGal2},
  { Sno: '3', image:archiGal3},
  { Sno: '4', image:archiGal4},
  { Sno: '5', image:archiGal5},
  { Sno: '6', image:archiGal6},
  { Sno: '7', image:archiGal7},
  { Sno: '8', image:archiGal8},
  { Sno: '9', image:archiGal9},
  { Sno: '10', image: archiGal10},
  { Sno: '11', image: archiGal11},
  { Sno: '12', image: archiGal12},
];
const react1=archiHome1;
const react2=archiHome2;
const react3=archiHome3;
const react4=archiHome4;
const columnNames = {
  Sno: 'Sno',
  Name: `Name`,
  Ph_D_Topic: 'Ph.D. Topic', 
};

const funding_card_details= [
  {
    Sno: '1',
    Name: `Dr. Manjari Chakraborty`,
    Ph_D_Topic: 'Restructuring of Undergraduate Education of Architecture in India– Realities and Reforms', 
  },
  {
    Sno: '2',
    Name: `Dr. Rachna Khare`,
    Ph_D_Topic: 'Designing Inclusive Educational Spaces for Autism', 
  },
  {
    Sno: '3',
    Name: `Dr. N.R. Mandal`,
    Ph_D_Topic: 'Participatory Delivery of Built Spaces for Development of Social Infrastructure', 
  },
  {
    Sno: '4',
    Name: `Dr. S. P. Bhatacharya`,
    Ph_D_Topic: 'Modelling  on Behaviour of Building Structure due to Seismic Excitation: An Architectural Foretell', 
  },
  {
    Sno: '5',
    Name: `Dr. Bimal Chandra Roy`,
    Ph_D_Topic: 'Industrial Development Strategy for Resource Based state with reference to Jharkhand', 
  },
  {
    Sno: '6',
    Name: `Dr. Janmejoy Gupta`,
    Ph_D_Topic: 'Passive Design Strategies for rural mud dwellings in Jharkhand considering architectural design parameters for thermal comfort.', 
  },
  {
    Sno: '7',
    Name: `Dr. Anamika Nandan`,
    Ph_D_Topic: 'Symbiotic Housing- An architectural approach towards a new environmentally conscious design', 
  },
  {
    Sno: '8',
    Name: `Dr.. Rajan C. Sinha`,
    Ph_D_Topic: 'Development of Housing quality assessment toolkit in Indian context', 
  },
  {
    Sno: '9',
    Name: `Dr. Gaurav Chandra`,
    Ph_D_Topic: 'Redefining Water Sustainability Index for an Institutional Building in North India', 
  },
  {
    Sno: '10',
    Name: `Dr.Sudha Panda`,
    Ph_D_Topic: 'Assessment of the Social Sustainable Development in Urban Odisha with a composite Index ', 
  },
  {
    Sno: '11',
    Name: `Dr.Sumantra Misra`,
    Ph_D_Topic: 'Determination of Architectural styles in post-independent India', 
  },
  {
    Sno: '12',
    Name: `Dr.Monalipa Dash`,
    Ph_D_Topic: 'Impact of urban fabric on microclimate, redefining building development regulation on climatic context.', 
  },
  {
    Sno: '13',
    Name: `Dr.Md Danish`,
    Ph_D_Topic: 'Assessing the Economic Sustainability of UNESCO World Heritage Sites-a case of Red Fort Complex, New Delhi', 
  },
  {
    Sno: '14',
    Name: `Dr.Umesh Chandra Mishra`,
    Ph_D_Topic: 'Social Acceptability of Affordable Housing Designs in Resettlement Colonies in Planned Cities of Northen India', 
  },
  

];
const content1=` The Department of Architecture at BIT Mesra is an innovative seat of learning that provides students with cutting-edge facilities to enhance their learning experience. Students engage in hands-on learning through laboratory work and design studios, where they work on various architectural projects. The department is well-equipped with state-of-the-art software, including AUTOCAD, NVMET 4.0, ARCGIS 10.4.1, Bentley Building Information Modeling, IBM SPSS Statistics 24, Rhino with Grasshopper, and SketchUp. These software tools enable students to explore design concepts, create detailed architectural drawings, and conduct data analysis for research projects. The Building Science Laboratory within the department houses modern instruments that aid in research related to sustainable building practices. Students have access to advanced tools such as the Total Weather Station, Surface Temperature Measuring Gun, Data Logger, Light Meter, and Indoor Air Quality Handheld Meter`;

const content2=`The Model Making Workshop further nurtures students' creativity and craftsmanship, featuring modern tools like the Zodiac Cut Curve 442. Through this workshop, students can bring their design concepts to life, constructing intricate physical models that communicate their architectural ideas effectively. The 3D printing facility, a central resource of the Institute, serves as a pinnacle of innovation, empowering students with the ability to manifest their imaginations into tangible prototypes. This cutting-edge facility enables students to explore new dimensions of architectural representation and materialize their design concepts with precision.

Furthermore, the department offers an A0 printing and scanning facility, streamlining the process of producing large-format prints and digitizing architectural drawings. This resource proves invaluable for presentations, exhibitions, and archiving projects, fostering an environment where students can present their work professionally and preserve their architectural achievements`;
const persons = [
    {
      name: 'Landscape Architecture',
      description: 'Landscape Architecture is a multidisciplinary field that focuses on the design, planning, and management of outdoor spaces, including parks, gardens, urban plazas, campuses, and natural landscapes.',
      imagePath: ad1,
    },
    {
      name: 'Urban Design',
      description: 'Urban design is an interdisciplinary field that focuses on shaping the physical form and layout of cities and urban areas to create functional, attractive, and sustainable environments for people. ',
      imagePath: ad2,
    },
    {
      name: 'Circular Economy',
      description: `Circular economy  aims to minimize waste, maximize resource efficiency, and promote sustainable practices. It encompasses various aspects related to waste reduction, resource recovery. `,
      imagePath: ad3,
    },
    {
      name: 'Urban Regeneration',
      description: `Urban regeneration is a strategic planning process that aims to revitalize and rejuvenate existing urban areas, improving their social, economic, and environmental conditions. `,
      imagePath: ad4,
    },
    {
      name: 'Waste Management',
      description: `Waste management is a critical aspect of environmental protection and public health that involves the collection, treatment, disposal, and recycling of waste materials.`,
      imagePath: ad5,
    },
    {
      name: 'Universal Design',
      description: 'Universal design is an inclusive design approach that aims to create environments, products, and services that are accessible and usable by all people, regardless of their age, ability.',
      imagePath: ad6,
    },
    {
      name: 'Building Retrofit',
      description: 'Building retrofit is the process of renovating and upgrading existing buildings to improve their energy efficiency, environmental performance, and overall functionality. ',
      imagePath: ad7,
    }
    
,
    {
      name: 'Sustainable Urban Development',
      description: 'Sustainable urban development is a planning and design approach that aims to create cities and urban areas that are environmentally responsible, socially inclusive, and economically viable.',
      imagePath: ad8,
    },
    {
      name: 'Conservation and Heritage Management',
      description: 'Conservation and heritage management is a specialized field that focuses on preserving and managing cultural and historical assets for future generations.',
      imagePath: ad9,
    },
    
    {
      name: 'Sustainability and Green Architecture',
      description: 'Sustainability and Green Architecture are two interconnected concepts that prioritize environmentally conscious and resource-efficient practices in the design and construction of buildings and infrastructure.',
      imagePath: ad10,
    },
    {
        name: 'Building Science and Technology',
        description: 'Building Science and Technology is an interdisciplinary field that studies the performance and behavior of buildings by integrating principles from architecture and environmental science.',
        imagePath: ad11,
      }
  ];
  const Indexes = [0];

export default function Architecture_planning() {
  return (
    <>
     <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={ArchitectureJumbo} title="Architecture and Planning Department" />
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
        <div className="outer-card-element text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>

        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Sponsored Research and Consultancy  Projects</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2'> Upgradation of Birsa Munda Airport Ranchi.</li>
                                <li className='mb-2'>Landscaping work of A.N. Sinha Institute for the new B.I.T. Extension Centre at Patna.</li>
                                <li className='mb-2'>Design of proposed Engineering College at Chaibasa, Jharkhand..</li>
                                <li className='mb-2'>Preparation of Conservation cum Development Plan of Sutiambe, Jharkhand.</li>
                                <li className='mb-2'>Design of proposed Cultural Heritage Center for Excellence at Ranchi, Jharkhand.</li>
                                <li className='mb-2'>Preparation of City Development Plan for Gumla.</li>
                                <li className='mb-2'>Checking of Bill of Quantities and Schedule of Rates for Buddha Smriti Park at Patna.</li>
                                <li className='mb-2'>Project titled “Study of Energy consumption trends, Demand and Supply trends in all building types in India”, completed in March 2008, funded by UTRC, USA.</li>
                                <li className='mb-2'>Design of the proposed Redevelopment of Megalith site at Hazaribagh for NTPC.</li>
                                <li className='mb-2'>National Mission Project on Education through ICT: Developing suitable pedagogical methods for courses on Architectural Sociology and Structural Systems for various classes, intellectual calibers and research in e-learning : a project of MHRD.</li>
                                <li className='mb-2'>Redevelopment of Pahari Mandir Temple Complex, Project of Govt. of Jharkhand.</li>
                                <li className=''>Gram Panchayat Spatial Development Plan, for Neori and Kandra GP Jharkhand</li>
                            </ol>
                        </article>
                    </div>
</div>
<div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Completed Research
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <FundingTable  card_details={funding_card_details} columnNames={columnNames} Indexes={Indexes} />
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
          Architecture and Planning Gallery
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
