import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import { progal1,progal2,progal3,progal4,progal5,progal6,progal7,proHome1,proHome2,proHome3,proHome4,
} from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';


const content1=`The Department of Production and Industrial Engineering  boasts a comprehensive range of cutting-edge laboratories and a central workshop, dedicated to providing students with state-of-the-art knowledge and hands-on experience in the field of production and industrial engineering. These well-equipped facilities house a plethora of sophisticated equipment, carefully selected to enhance the learning experience of both undergraduate and postgraduate students. The laboratories are not only utilized for academic training but also serve as vital research hubs for the department's faculty and students. Beyond academics, the department extends its support to other research endeavors within the institute and collaborates with medium and small-scale industries in the Ranchi region, offering access to these advanced facilities. The department's laboratories and workshop foster innovation and technical excellence in flexible manufacturing systems, robotics, metrology, metallurgy, work study & ergonomics.`
const content2=`At the heart of the Department of Production and Industrial Engineering lies its central workshop, a bustling hub of creativity and hands-on learning. Within this workshop, students gain invaluable experience in diverse areas, including pattern making, foundry, welding, forging, and machining. These practical skills complement theoretical knowledge and prepare students to excel in real-world industrial settings. The central workshop's state-of-the-art equipment and skilled instructors enable students to explore various aspects of metal forming, machine tools, automation, and non-traditional manufacturing techniques. By providing a collaborative environment that encourages creativity and problem-solving, the central workshop serves as a focal point for fostering innovation and supporting research efforts within the department. Furthermore, its contributions extend beyond the academic sphere, as it actively supports local industries, empowering them with technical expertise and contributing to the growth of the industrial sector`
const gal = [
    { Sno: '1', image: progal1 },
    { Sno: '2', image: progal2 },
    { Sno: '3', image: progal3 },
    { Sno: '4', image: progal4 },
    { Sno: '5', image: progal5 },
    { Sno: '6', image: progal6 },
    { Sno: '7', image: progal7 },

   

  ];
  const react1=proHome1;
  const react2=proHome2;
  const react3=proHome3;
  const react4=proHome4;
const columnNames = {
    FundingAgency: "Funding Agency",
    ProjectTitle: "Project Title",
    FundingAmount: "Funding Amount",
    FundingYear: "Funding Year",
    Duration: "Duration",
    Status: "Status"
  };
  const funding_card_details = [
    {
      FundingAgency: "AICTE",
      ProjectTitle: "Development of CAM Lab",
      FundingAmount: "12",
      FundingYear: "1995-96",
      Duration: "2",
      Status: "C"
    },
    {
      FundingAgency: "AICTE",
      ProjectTitle: "Process Automation in Steel Industry",
      FundingAmount: "5",
      FundingYear: "1996-97",
      Duration: "2",
      Status: "C"
    },
    {
      FundingAgency: "UGC",
      ProjectTitle: "Agile Manufacturing Technology",
      FundingAmount: "4.12",
      FundingYear: "1997-98",
      Duration: "2",
      Status: "C"
    },
    {
      FundingAgency: "AICTE",
      ProjectTitle: "Effect of Ergonomic Status of Industrial works in Tribal area of Production",
      FundingAmount: "10",
      FundingYear: "1998-99",
      Duration: "2",
      Status: "C"
    },
    {
      FundingAgency: "UGC",
      ProjectTitle: "Design and allocation of work under extreme environmental conditions",
      FundingAmount: "6.5",
      FundingYear: "1998-99",
      Duration: "3",
      Status: "C"
    },
    {
      FundingAgency: "DST",
      ProjectTitle: "Formability of Sintered Preforms",
      FundingAmount: "18.3",
      FundingYear: "1998-99",
      Duration: "2",
      Status: "C"
    }
  ];

  const Indexes = [0];


export default function production_Industrial_engineering() {
  return (
    <>
     <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={progal4} title=" Production and Industrial Engineering" class='jumbo-head' />
            <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                        Research Domain
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
                        <h4 className='fw-semibold text-highlighter'>Manufacturing Technology related works</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                          
                            <li className='mb-2'>Production of Metallic Foam</li>
                            <li className='mb-2'>Microwave-assisted Manufacturing Processes</li>
                            <li className='mb-2'>Incremental Sheet Metal Forming</li>
                            <li className='mb-2'>Production of Aluminium Nano Metal Matrix Composite</li>
                            <li className='mb-2'>Micromachining of Metals, Ceramics, Polymers, and Composites, and Analysis of Machining Quality, Performance, and Process Efficiency</li>
                            <li className='mb-2'>Welding of Metals, Polymers, and Hybrid Structures and Analysis of Weld Efficiency, Weldability, Mechanical Performance of the Weld</li>
                            <li className='mb-2'>Semi-Solid Metal Processing</li>
                            <li className='mb-2'>Additive Manufacturing</li>
                            <li className='mb-2'>Surface Engineering</li>
                            <li className='mb-2'>Fabrication of Composite Material through Powder Metallurgical Routes</li>


                            </ol>
                        </article>
                    </div>
            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Industrial Engineering</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                          
                            <li className='mb-2'>Sustainable Supply Chain for Perishable Materials</li>
                            <li className='mb-2'>Lean Manufacturing and Fuzzy Theory Applications to Reverse Engineering</li>
                            <li className='mb-2'>Value Stream Mapping</li>
                            <li className='mb-2'>Modular Product Development</li>
                            <li className='mb-2'>Industry 4.0</li>

                            </ol>
                        </article>
                    </div>
            
    </div>
    
    <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                    Projects Completed
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                </div>
            </div>
    <FundingTable  card_details={funding_card_details} columnNames={columnNames} Indexes={Indexes} />
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
          Production and Indutrial Engineering Gallery
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
