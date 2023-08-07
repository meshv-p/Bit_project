import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import ece from '../../images/ece.jpg'
import {ecegal1,ecegal2,ecegal3,ecegal4,ecegal5,ecegal6,ecegal7,ecegal8,ecegal9,ecegal10,ecegal11,ecegal12,ecegal13,ecegal14,ecegal15,ecegal16,ecegal17,ecegal18,ecegal19,ecegal20,ecehome1,ecehome2,ecehome3,ecehome4} from '../../images/Images';
import Footer from "../../components/footer/Footer"
import Homecard from '../../components/HomeCard/Homecard';

import Galery from '../../components/galery/Galery';


const gal = [
  { Sno: '1', image: ecegal1 },
  { Sno: '2', image: ecegal2 },
  { Sno: '3', image: ecegal3 },
  { Sno: '4', image: ecegal4 },
  { Sno: '5', image: ecegal5 },
  { Sno: '6', image: ecegal6 },
  { Sno: '7', image: ecegal7 },
  { Sno: '8', image: ecegal8 },
  { Sno: '9', image: ecegal9 },
  { Sno: '10', image: ecegal10 },
  { Sno: '11', image: ecegal11 },
  { Sno: '12', image: ecegal12 },
  { Sno: '13', image: ecegal13 },
  { Sno: '14', image: ecegal14 },
  { Sno: '15', image: ecegal15 },
  { Sno: '16', image: ecegal16 },
  { Sno: '17', image: ecegal17 },
  { Sno: '18', image: ecegal18 },
  { Sno: '19', image: ecegal19 },
  { Sno: '20', image: ecegal20 },
];
const react1=ecehome1;
const react2=ecehome2;
const react3=ecehome3;
const react4=ecehome4;
const content1=`The Department has modern laboratories and support facilities in all major areas of Electronics and Communication. These include: Analog and Digital Communication, Digital Electronics and Integrated Circuits, Circuit Simulation, Microprocessor, Fiber Optics Communication, Instrumentation, VLSI Design, Wireless Networking, Microwave, Advanced Communication, Antenna Design, and Microwave Integrated Circuit (MIC). The Communication laboratories are well equipped with Analog Communication kits (like Amplitude Modulation & Demodulation, Frequency modulation & Demodulation, Phase Modulation & Demodulation, and Noise Generator) and Digital Communication Kits (like PCM, DM, PPM, ADM, ASK, FSK, PSK & QAM). Cosmism Software is also available in the laboratory for designing of wired, wireless and mobile communication systems`;

const content2=`The Fiber Optic Laboratory is well-equipped with Optical to Electrical Converters, Electrical to Optical converters, He-Ne Laser Source, Argon-ion Laser Source, Tunable Laser Source, Optical Spectrum Analyzer, Optical Time Domain Reflectometer, LED and LD Sources, Monochromator, various types of Photo-Detectors, Couplers, Multiplexers, CCD camera, BSO crystal, Vibration Isolation Table, Newport Kit, Falcon Kits and various types of fibers. Recently, Beam Prop software has been installed in the laboratory. It will aid in designing various Optical Components, Optical Fibers, Optical Switching, and Fiber Bragg Grating etc. Several research projects are ongoing with the existing facilities. Department also has an Advanced Instrumentation Lab which includes Data Acquisition Cards (DAC) from National Instruments and Lab View software for real time calibration and measurement experiments. This lab also has acquired a new PLC of Mitsubishi make`
export default function Electrical_Comm_Engine() {
  return (
   <>
   <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={ece} title="Electrical and Communication Engineering"/>
        <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                        Research Projects
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                </div>
            </div>

            <div className="outer-card-element text-light rounded-3 my-4 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>

            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'> I. On-going Projects</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2'>“Design of Low Power CMOS Temperature Sensor for Aerospace Applications, sanctioned by RESPOND, ISRO Bangalore. PI: Dr. Vijay Nath. Sanctioned Amount: Rs. 25 Lac</li>
                                <li className='mb-2'>“Speech-based Access of Agricultural Commodity Prices and Weather Information in 12 Indian Languages / Dialects, sanctioned by DEITY. PI: Dr. Mahesh Chandra. Sanctioned Amount: Rs. 31.82 Lac</li>
                                </ol>
                        </article>
                    </div>
            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-left' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'> II. Completed Projects</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2'>“Design of Ultra Low Power CMOS Cell for Temperature Sensor in VLSI”, sanctioned by DST, New Delhi & DRDL, Hyderabad. PI: Dr. Vijay Nath. Sanctioned Amount: Rs. 26.7 Lac</li>
                                <li className='mb-2'>“Studies on Microwave Dielectric Ceramics and their device application, sanctioned by DST (SERB). Co-PI: Prof. V. R. Gupta & Prof. N. Gupta. Sanctioned Amount: Rs. 31.7 Lac</li>
                                <li className='mb-2'>“Microstrip antenna for wearable applications”, sanctioned by AICTE. PI: Prof. V. R. Gupta. Sanctioned Amount: Rs. 6 Lac</li>
                                <li className='mb-2'>“Health care monitoring system for rural peoples”, sanctioned by IEI. PI: Vishal H. Shah. Sanctioned Amount: Rs. 0.6 Lac</li>
                                </ol>
                        </article>
                    </div>
            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'> III. Pedagogy Projects</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2'>“Development of VLSI Design Course (Pilot Phase), sanctioned by MHRD. Coordinator: Dr. Vijay Nath. Sanctioned Amount: Rs. 3.6 Lac</li>
                                <li className='mb-2'>“Development of Intelligent Instrumentation Course, sanctioned by MHRD. Coordinator: Dr. S. S. Solanki, Sanctioned Amount: Rs. 10 Lac</li>
                                <li className='mb-2'>“Development of VLSI Design Course (Main Phase), sanctioned by MHRD. Coordinator: Dr. Vijay Nath. Sanctioned Amount: Rs. 6.4 Lac</li>
                                </ol>
                        </article>
                    </div>
            <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-up' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'> IV. Inter-departmental Projects</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2'>“Developments of nano crystalline high permittivity lead free materials for microwave applications”, In the Dept. of Physics, sanctioned by DST, New Delhi. Sanctioned Amount Rs. 23.35 Lac</li>
                                <li className='mb-2'>“Observational Study of land surface atmosphere interaction in the monsoon through along its active eastern end”, In the Dept. of Mathematics, sanctioned by DST, New Delhi. Sanctioned Amount Rs. 55 Lac</li>
                                <li className='mb-2'>“Studies on Ferromagnetic - Ferroelectric Composites and their Electronic Applications”, in the Dept. of Physics, sanctioned by DST, New Delhi. Sanctioned Amount Rs. 15.796 Lac</li>
                                <li className='mb-2'>“National Program on Micro and Smart Systems (NPMASS)”, in the Dept. of Mechanical Engineering, sanctioned by IISc, Bangalore. Sanctioned Amount Rs. 12 Lac</li>
                                <li className='mb-2'>“Design and Development and Characterization of Magneto-optic Material Based Current Sensor for Industrial Application”, in the Dept of EEE , sanctioned by DST, New Delhi, Sanctioned Amount Rs. 25.55 Lac</li>
                                <li className='mb-2'>“Establishment of Entrepreneurship Development Cell”, sanctioned by AICTE. Sanctioned Amount Rs. 7 Lac</li>
                                </ol>
                        </article>
                    </div>
                    <div className="inner-card-element rounded-3 p-4 text-dark " data-aos='zoom-in' style={{ background: 'var(--card-color1)' }}>
                        <h3 className='fw-semibold mb-3'> Field Of Study</h3>
                        <article>
                           <p >Substrate Integrated Waveguide, Metamaterials, Fractals, EBG/PBG, EMI & EMC, Surface Acoustic Wave, RF Circuit Design, Microwave and Millimetre wave planar components for Multiband, Wideband and Narrowband applications,  RFID, RF MEMS, Microwave to Terahertz Imaging, Through wall Radar, Ground Penetrating Radar, Breast Cancer Detection, Computational Electromagnetics Signal Propagation and Fading, Channel Modelling for 5G, Software Radio Networks, Cognitive radio Networks, Massive MIMO systems, Wireless Sensor networks, Cooperative Communication, Cryptography, Information Coding, Fiber Optic Sensors & Communication, Optical Wireless Communication</p>
                           <p>Biomedical Signal Processing, Brain Machine Interface, Speech Signal Processing, Image Signal Processing, Audio and Video Signal Processing, Automation, Signal Processing for 5G, Statistical Signal Processing Analog VLSI, Digital VLSI, Memory Design, Microelectronics Devices, Nano electronics Devices, Embedded System Design, RF-VLSI: LNA, Mixer, VCO etc.</p>
                        </article>
                    </div>

</div>
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
          ECE Gallery
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
    <Galery gal={gal}/>
    {/* More content need to add 4 para added  */}
        <Footer/>
   </>
  )
}
