import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import { pharmgal1,pharmgal2,pharmgal3,pharmgal4,pharmgal5,pharmgal6,pharmgal7,pharmhome1,pharmhome2,pharmhome3,pharmhome4,} from '../../images/Images.js'
import Homecard from '../../components/HomeCard/Homecard';
import Galery from '../../components/galery/Galery';

const content1=`The Department of Pharmaceutical Sciences is equipped with cutting-edge facilities to support advanced research and experimentation. Among these facilities, there are two Instrumental laboratories, each equipped with state-of-the-art instruments to facilitate various analytical and experimental studies. Additionally, the department houses a comprehensive computational and molecular modelling laboratory, equipped with a total of thirty-six computers connected via LAN. This laboratory is equipped with a range of molecular modelling software from Schrodinger and Fujitsu, enabling researchers and students to conduct sophisticated computational analyses. The department also offers Wi-Fi access to ensure seamless connectivity for students and staff, enabling easy access to the internet and intranet resources. The state-of-the-art facilities available at the Department of Pharmaceutical Sciences offer an exceptional environment for students and researchers to delve into various aspects of pharmaceutical research. `
const content2=`To further enhance the existing facilities, the department has recently added several new instruments and equipment. These additions include a Microwave Organic Synthesis system, a Milli Q Water Purification Unit (Millipore), a Non-Invasive Blood Pressure System, a Plethysmometer, a Randal Selito Instrument, an Electro von Frey Instrument, a Table Top anesthesia machine, an Operon Lyophillizer, a Camag HPTLC system, an Agilent Preparative HPLC, a Buchi Rotary Evaporator, a Rectangular Maze for behavioral studies, a Stanford Precision Melting Point Apparatus, and more. Moreover, the department has also acquired advanced software tools such as FlexX Molecular Modelling software, Scigress Explorer 7.7 Ultra, Statistica, ADME Works 3.0, and GraphPad Prism for sophisticated data analysis and molecular simulations. With the addition of these facilities, students and researchers have access to a comprehensive range of tools and resources to conduct innovative research and address critical challenges in pharmaceutical sciences`
const gal = [
    { Sno: '1', image: pharmgal1 },
    { Sno: '2', image: pharmgal2 },
    { Sno: '3', image: pharmgal3 },
    { Sno: '4', image: pharmgal4 },
    { Sno: '5', image: pharmgal5 },
    { Sno: '6', image: pharmgal6 },
    { Sno: '7', image: pharmgal7 },
   

  ];
  const react1=pharmhome1;
  const react2=pharmhome2;
  const react3=pharmhome3;
  const react4=pharmhome4;

  
  



export default function Pharmaceutical_Science_and_technology() {
  return (
   <>
   <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={pharmgal2} title="Pharmaceutical Science and technology" class='jumbo-head' />
      <div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Pharmaceutical Science and Technology
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>

        <div className="outer-card-element text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'> Research</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <p className='mb-2'>Department has been recognized for its significant research outputs. A number of funding agencies like: University Grants Commission, All India Council of Technical Education, Department of Sciences and Technology, Indian Council of Agricultural Research, Indian Forest Research Institute, Defense Research Development Organization, CSIR, ICAR, ICMR, DST, BMBF (Germany), UGC-UKIERI etc. have sanctioned many innovative R&D projects to the Department. Department frequently organizes Quality Improvement Programs, Workshops, Seminars and Conferences sponsored by various agencies. A few National and International events are on the card of its activities. </p>
                            </ol>
                        </article>
                    </div>
</div>
        <div className="outer-card-element text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'>Pharmaceutics</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2'>New Drug Delivery Systems</li>
                                <li className='mb-2'>BA/BE Studies</li>
                                <li className='mb-2'>Nanotechnology Based Formulation Development</li>
                                <li className='mb-2'>Exploration of Natural molecules as Pharmaceutical Adjuvant</li>
                            </ol>
                        </article>
                    </div>
        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'>Pharmaceutical Chemistry</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                            <li>In silico design, synthesis (conventional, microwave, development of combinatorial solution phase synthetic techniques) and evaluation of novel candidate compounds with special reference to heterocyclic moieties and small peptides in the field of antimicrobial, antiprotozoal, antiviral, antiHIV, anticancer, analgesic, antihistaminic, anticonvulsant, cardiovascular, antidiabetic, and other activities.</li>
                            <li>Molecular modeling, docking, QSAR, and solution phase ADME studies using CADD based software like Sybyl 7.1, Glide, Flex X, and Scigress Explorer.</li>
                            <li>Natural products-chemistry/pharmacology/structure standardization/ using spectroscopic methods (UV-VIS/IR/NMR/MS etc.).</li>
                            <li>Studies on synthetic nutraceuticals.</li>

                            </ol>
                        </article>
                    </div>
        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'>Pharmacology</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                            <li>General pharmacological screening, in vitro and in vivo toxicological studies of new bioactive molecules from synthetic and natural sources.</li>
                            <li>Neuropharmacological studies of bioactive molecules with special reference to cognitive functions.</li>
                            <li>Studies of bioactive molecules on experimentally induced diabetes, and its implications in animal models.</li>
                            <li>Biochemical and Molecular Pharmacological studies of bioactive molecules.</li>
                            <li>Antioxidant and DNA protective properties of bioflavonoids.</li>
                            </ol>
                        </article>
                    </div>
        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'>Pharmacognosy</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                            <li>Validation of traditional systems of medicine.</li>
                            <li>Validated methodologies for the development of new herbal formulations.</li>
                            <li>Development of drug molecules from natural sources and their enhancement by biotechnological approaches.</li>
                            <li>Exploring natural resources for novel drug delivery systems.</li>

                            </ol>
                        </article>
                    </div>
        <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'>Pharmaceutical Quality Assurance</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                            <li>Analytical Method Development and Validation.</li>
                            <li>Bio-analytical Method Development and Validation.</li>
                            <li>Standardization of traditional drugs and polyherbal formulations.</li>
                            <li>Pharmaceutical Validation.</li>

                            </ol>
                        </article>
                    </div>
</div>

<div className="container mt-4" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Pharmaceutical Science and Technology Facalities
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
          Pharmaceutical Science and Technology Gallery
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
