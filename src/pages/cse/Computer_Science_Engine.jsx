import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import { cseGal1, cseGal2, cseGal3, cseGal4, cseGal5, cseGal6, cseGal7, cseGal8, cseGal9, cseJumbo, cs1, cs2, cs3, cs4, cs5, cs6, cseHome1, cseHome2, cseHome3, cseHome4, } from '../../images/Images';
import Domains from '../../components/Domains/Domains';
import Footer from "../../components/footer/Footer"
import Homecard from '../../components/HomeCard/Homecard';

import FundingTable from '../../components/fundingTable/FundingTable'

import Galery from '../../components/galery/Galery';

const Indexes = [0];
const gal = [
  { Sno: '1', image: cseGal1 },
  { Sno: '2', image: cseGal2 },
  { Sno: '3', image: cseGal3 },
  { Sno: '4', image: cseGal4 },
  { Sno: '5', image: cseGal5 },
  { Sno: '6', image: cseGal6 },
  { Sno: '7', image: cseGal7 },
  { Sno: '8', image: cseGal8 },
  { Sno: '9', image: cseGal9 }
];
const react1 = cseHome1;
const react2 = cseHome2;
const react3 = cseHome3;
const react4 = cseHome4;
const columnNames = {
  Sno: 'Sno',
  Name: `Name`,
  ProjectTitle: 'Project Title',
  FundingAgency: 'Funding Agency',
  Amount: 'Amount (Lakhs) ',
  Duration: `Duration (months) `
};

const funding_card_details1 = [
  {
    Sno: '1',
    Name: `Abhijit Mustafi and Vandana Bhattacharya `,
    ProjectTitle: `Automated vegetation stress detection from very highresolution multi-temporal spectral data and to establish relationship using Artificial Intelligence`,
    FundingAgency: `Skymap Global, Earth observati on Analytics `,
    Amount: '7.5 ',
    Duration: `12 (2019-20)`
  },
  {
    Sno: '2',
    Name: `Shruti Garg `,
    ProjectTitle: `Event Modelling and Predictive Analysis`,
    FundingAgency: `Delhi University, Delhi`,
    Amount: '3.5 ',
    Duration: `06 (2020-21)`
  },
  {
    Sno: '3',
    Name: `Subrajeet Mohapatra and Vandana Bhattacharya`,
    ProjectTitle: `Development of Machine Learning Algorithm for the early diagnosis of Delinquent Behaviour in Juveniles `,
    FundingAgency: `CSRI, DST`,
    Amount: '22.54 ',
    Duration: `36 (2019-22)`
  },
  {
    Sno: '4',
    Name: `K.K. Senapati`,
    ProjectTitle: `Skill Development`,
    FundingAgency: `AICTE`,
    Amount: '14.8 ',
    Duration: `36 (2019-20)  `
  },
  {
    Sno: '5',
    Name: `K.K. Senapati`,
    ProjectTitle: `Reading Behaviour Analysis by Image Processing `,
    FundingAgency: `BIT, Mesra`,
    Amount: '2 ',
    Duration: `12 (2019-20)`
  },
  {
    Sno: '6',
    Name: `K.K. Senapati`,
    ProjectTitle: `Auto Robotic Resection of Tumors by Volumetric Analysis of Medical Images`,
    FundingAgency: `AICTE`,
    Amount: '11.38',
    Duration: `12 (2019-20)`
  },
  {
    Sno: '7',
    Name: `Sujan Kumar Saha`,
    ProjectTitle: `Development of Basic Natural Language Processing Tools and Resources for Maithili `,
    FundingAgency: `SERB`,
    Amount: '17.98 ',
    Duration: `36 (2017-20)`
  },
  {
    Sno: '8',
    Name: `Sujan Kumar Saha`,
    ProjectTitle: `Automatic Question Generation and Evaluatio Based System for Instant Assessment of Learning in School Level `,
    FundingAgency: `SERB`,
    Amount: '19.61 ',
    Duration: `36 (2016-19)`
  },
  {
    Sno: '9',
    Name: `Bhaskar Karn`,
    ProjectTitle: `Need, Availability and Utilization of Electronic resources and UGC INFONET Consortia in Universities of Eastern India`,
    FundingAgency: `UGC`,
    Amount: '5.66',
    Duration: `3 (2011-14)`
  },



];
const content1 = ` The department provides facilities for programming in C, C++, Java, and Oracle. These languages are commonly used in various domains, including software development and database management
Matlab for Soft Computing and Image Processing: Matlab is a popular software environment for numerical computing, data analysis, and visualization. In your department, it is specifically used for soft computing and image processing applications.
Rational Rose for Software Engineering: Rational Rose is a software development tool that supports the entire software development lifecycle. It is commonly used for modeling, designing, and testing software systems. In your department, it is used for software engineering purposes.
Specialized laboratories: The department also offers laboratories dedicated to specific areas such as networking, multimedia, simulation, and parallel computing. These labs provide students with hands-on experience in these domains.
`;

const content2 = `Internally networked laboratories: All the laboratories in the department are connected through a network. This connectivity allows students to access resources remotely at any time, enhancing convenience and flexibility in conducting laboratory sessions.
High Performance Computing (HPC) resource: The department possesses a High Performance Computing resource, which supports various research activities within the department and across different departments. HPC resources are typically used for computationally intensive tasks that require significant processing power.
Specialized labs for emerging areas: The department has recently established specialized labs for Machine Learning, Intelligence System, IoT (Internet of Things), and Computational Intelligence. These labs are dedicated to teaching and research in these novel areas, reflecting the department's commitment to staying updated with the latest technologies and advancements.
`;


export default function Computer_Science_Engine() {
  const persons = [
    {
      name: 'Machine Learning',
      description: 'BIT Mesra excels in machine learning research with experienced faculty leading innovative projects and involving students. Their research covers supervised and unsupervised learning, as well as cutting-edge applications like natural language processing and computer vision.',
      imagePath: cs1,
    },
    {
      name: 'Image Processing',
      description: 'BIT Mesra is actively involved in image processing research, exploring various aspects of this field with dedicated faculty and student participation. Their research encompasses diverse topics such as image enhancement, object detection, image segmentation, and pattern recognition.',
      imagePath: cs2,
    },
    {
      name: 'Internet Of Things',
      description: `BIT Mesra is actively engaged in IoT research, with a focus on exploring the potential and applications of this transformative technology. The institute's faculty and students work on projects related to IoT devices, communication protocols, sensor networks `,
      imagePath: cs3,
    },
    {
      name: 'Computational Inteligence',
      description: `BIT Mesra is actively involved in research related to Computational Intelligence, a subfield of artificial intelligence that focuses on developing adaptive and intelligent systems capable of solving complex real-world problems.`,
      imagePath: cs4,
    },
    {
      name: 'Deep Learning',
      description: `BIT Mesra is actively engaged in research related to Deep Learning, a specialized area of ML that focuses on training artificial neural networks to perform complex tasks such as deep learning techniques, including CNNs & RNNs.`,
      imagePath: cs5,
    },
    {
      name: 'Artificial Intelligence',
      description: 'BIT Mesra is actively involved in research related to Artificial Intelligence (AI), a field of computer science that aims to create intelligent systems that can perform tasks that typically require human intelligence. ',
      imagePath: cs6,
    },
    //   {
    //     name: 'Cryptography and Computer Security',
    //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem et dolores quod aliquam laboriosam. Excepturi labore, explicabo deleniti accusantium numquam debitis distinctio et corporis. Odio accusamus rerum optio blanditiis minima.',
    //     imagePath: 'path-to-image6.jpg',
    //   }
  ];
  const [funding_card_details, setFunding_card_details] = useState([]);
  useEffect(() => {

    console.log('hi')
    fetch('https://bit-strapi-f.onrender.com/api/cs-projects?fields[0]=name&fields[1]=title&fields[2]=funding_agency&fields[3]=amount&fields[4]=duration')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setFunding_card_details(data.data);
      })
      .catch(error => {
        console.error('Error fetching data from API 1:', error);
      });

  }, [])


  return (
    <>
      <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={cseJumbo} title="Computer Science and Engineering" />
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
      <Domains persons={persons} />
      <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
        <h2 className="text-center hd-color myText  ">
          Funded Projects
        </h2>
        <div className="container d-flex justify-content-center align-items-center position-relative  ">
          <span className="line d-inline-block"></span>
          <span className="star fa fa-star d-inline-block checked"></span>
          <span className="line d-inline-block"></span>
        </div>
      </div>
      <FundingTable card_details={funding_card_details} columnNames={columnNames} Indexes={Indexes} />

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

      <Homecard homeRight={"row"} rect1={react1} rect2={react2} content={content1} />
      <Homecard homeRight={"row flex-row-reverse"} rect1={react3} rect2={react4} content={content2} />
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
      <Galery gal={gal} />
      <Footer />
    </>
  )
}
