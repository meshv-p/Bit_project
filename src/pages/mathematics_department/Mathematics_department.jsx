import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import { researchNdev_img,  Math1,Math2,Math3,Math4,Math5,Math6,Math7 } from '../../images/Images.js'
import Galery from '../../components/galery/Galery';
const gal = [
    { Sno: '1', image: Math1 },
    { Sno: '2', image: Math2 },
    { Sno: '3', image: Math3 },
    { Sno: '4', image: Math4 },
    { Sno: '5', image: Math5 },
    { Sno: '6', image: Math6 },
    { Sno: '7', image: Math7 },

   

  ];
export default function Mathematics_department() {
  return (
    <>
    
    <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={researchNdev_img} title="Mathematics Department" class='jumbo-head' />

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
                        <h4 className='fw-semibold text-highlighter text-center'>RESEARCH FIELDS</h4>
                        <article className='fw-light'>
                            <ol className='justify '>
                            <li>Computational Solid Mechanics</li>
  <li>Statistical Computing</li>
  <li>Differential Equations and Difference Equations</li>
  <li>Theoretical Seismology</li>
  <li>Mathematical Modelling</li>
  <li>Numerical Solution of Boundary Layer Flow</li>
  <li>Differential Equations and their applications in Ecology</li>
  <li>Fuzzy optimization and Operations Research</li>
  <li>Numerical Analysis and Nonlocal Boundary Value Problems</li>
  <li>Optimization and its applications</li>
  <li>Cryptography and Image Processing</li>
  <li>Lattice Based Cryptography</li>
  <li>Complex Analysis</li>
  <li>Quantum information theory</li>
  <li>Topology</li>
  <li>Number Theory</li>
  <li>Singular Perturbation Problems</li>
  <li>Finite Element Method</li>
  <li>Compact difference method</li>
  <li>Music Analysis</li>
  <li>Heat Transfer</li>
  <li>Medical Diagnosis</li>
  <li>Environment and Biology</li>
                            </ol>
                        </article>
                    </div>
                    </div>
            <div className="outer-card-element text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter text-center'>SPONSORED PROJECTS</h4>
                        <article className='fw-light'>
                            <ol className='justify '>
                            <li>Green's Function, Existence and Asymptotic Behavior of Periodic Solutions of Functional Differential Equations Investigator: Dr. S. Padhi Sponsoring Agency: National Board for Higher Mathematics (Department of Atomic Energy), Govt. of India Period: 2007-2012 Total Outlay: INR.12,30,000/-</li>
                            <li>Existence and Global Attractivity of Periodic Solutions of Functional Differential EquationsInvestigator: Dr. S. PadhiSponsoring Agency: Funded by National Board for Higher Mathematics (Department of Atomic Energy), Govt. of IndiaPeriod: 2012-2015Total Outlay: INR.8,38,000/-</li>
  <li>A decision support system for vendor selection problem in intuitionistic fuzzy environmentInvestigators: Dr. P. Kaur & Dr. S.K JainSponsoring Agency: UGCPeriod: 2013-2016Total Outlay: INR.12,00,000/-</li>
  <li>Analyzing the structure and performance of Hindustani classical music through statisticsInvestigator: Dr. S. ChakrabortySponsoring Agency: UGCPeriod: 2.6 yearsTotal Outlay: (Amount not specified)</li>
                            </ol>
                        </article>
                    </div>
                    </div>

                    <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText   ">
          Mathematics Department Gallery
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
