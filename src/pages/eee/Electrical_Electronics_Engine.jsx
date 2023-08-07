import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Galery from '../../components/galery/Galery';
import Domains from '../../components/Domains/Domains';
import Footer from "../../components/footer/Footer"
import Homecard from '../../components/HomeCard/Homecard';
import {ee1,ee2,ee3,ee4,ee5,ee6,ee7,eeeJumbo,eeegal1,eeegal2,eeegal3,eeegal4,eeegal5,eeegal6,eeegal7,eeegal8,eeegal9,eeegal10,eeegal11,eeegal12,eeehome1,eeehome2,eeehome3,eeehome4,} from '../../images/Images';


const gal = [
  { Sno: '1', image: eeegal1 },
  { Sno: '2', image: eeegal2 },
  { Sno: '3', image: eeegal3 },
  { Sno: '4', image: eeegal4 },
  { Sno: '5', image: eeegal5 },
  { Sno: '6', image: eeegal6 },
  { Sno: '7', image: eeegal7 },
  { Sno: '8', image: eeegal8 },
  { Sno: '9', image: eeegal9 },
  { Sno: '10', image: eeegal10 },
  { Sno: '11', image: eeegal11 },
  { Sno: '12', image: eeegal12 },
];
const react1=eeehome1;
const react2=eeehome2;
const react3=eeehome3;
const react4=eeehome4;
const persons = [
  {
    name: 'Power System Analysis',
    description: `
    Power System Analysis includes research in microgrid analysis, demand response programs, renewable sources integration, PMU modeling, wide area measurement systems, and power system resiliency, all aimed at improving power system efficiency.`,
    imagePath: ee1,
  },
  {
    name: 'Control System Anaylsis',
    description: `Control System Anaylsis includes research in system identification and classification, image processing for vehicular applications, digital signal processing, and robotics, aiming to advance control system development for various applications.`,
    imagePath: ee2,
  },
  {
    name: 'Power Electronics ',
    description: `Power Electronics includes research in Power Electronics and Drives, Hybrid Electric Vehicles, motor drives, IoT-based Battery Management System, Contactless Energy Exchange and focusing on advancing technology. Additionally, it explores emerging trends and innovations. `,
    imagePath: ee3,
  },
  {
    name: 'Multi-level Converter',
    description: `Research on multi-level converters involves exploring their applications, efficiency improvement, and optimization for various fields like HVDC transmission, renewable energy integration, electric vehicles, and motor drives.`,
    imagePath: ee4,
  },
  {
    name: 'Lightining Protection System',
    description: `Researchers at BIT Mesra aim to improve lightning protection measures through innovative approaches and advanced technologies to safeguard buildings and critical infrastructure from lightning-induced damage.`,
    imagePath: ee5,
  },
  {
    name: 'Magneto Optic Sensors',
    description:`Magneto-optic sensors are devices that combine the principles of magnetism and optics to measure magnetic fields. These sensors are used in various applications, such as magnetic field measurements, current sensing.`,
        imagePath: ee6,
  },
  {
    name: 'System Biology',
    description: 'System biology, also known as systems biology, is an interdisciplinary field that seeks to understand biological systems at the level of their entire complexity. ',
    imagePath: ee7,
  },
//   {
//     name: 'Cryptography and Computer Security',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem et dolores quod aliquam laboriosam. Excepturi labore, explicabo deleniti accusantium numquam debitis distinctio et corporis. Odio accusamus rerum optio blanditiis minima.',
//     imagePath: 'path-to-image6.jpg',
//   }
];
const content1=`The Electrical and Electronics Engineering department at BIT Mesra boasts a comprehensive set of advanced laboratories equipped with state-of-the-art hardware and software tools for research purposes. The Power System Lab, Power Electronics Lab, Electrical Devices Lab, Control System Lab, Smart Grid Lab, Basic Electrical Lab, Electrical Machine Lab, Measurement Lab, Simulation Lab, and Digital Signal Processing Lab offer students and researchers hands-on experience with cutting-edge equipment and technologies. These facilities enable students to gain practical knowledge, conduct experiments, and explore innovative solutions for various electrical and electronics engineering challenges. The department's focus on control systems and automation is well-supported by the sophisticated Control System Lab, where students can study advanced control techniques and applications in real-time systems`;
const content2=`In addition to the well-equipped labs, BIT Mesra provides access to a wide range of industry-standard software tools like MATLAB, LTSPICE, PSIM, LabVIEW, PSCAD, and Dig SILENT. These software packages facilitate advanced simulations, modeling, and analysis of complex electrical and electronics systems, empowering students to develop and validate their ideas in a virtual environment. Moreover, the department offers access to high-end hardware systems such as Typhoon HIL, OPAL-RT, Micro-Lab Box, PCB Design Machine, dSPACE – 1104, power quality analyzers, and Phasor Measurement Unit. These resources enable researchers to prototype and test cutting-edge electrical and electronics technologies, providing them with a solid foundation for innovation and practical application in the industry. Overall, BIT Mesra's electrical and electronics engineering facilities empower students and researchers with an exceptional learning environment to address real-world challenges`;

export default function Electrical_Electronics_Engine() {
  
  return (
    <>
     <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={eeeJumbo} title="Electrical and Electronics Engineering " />
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
          EEE Gallery
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
