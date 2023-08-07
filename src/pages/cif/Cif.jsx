import React from 'react'
import {  cifjumbo } from '../../images/Images'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import Aproved from '../../components/Aproved/aproved';
import { Link } from 'react-router-dom'

const para1="CENTRAL INSTRUMENTATION FACILITYCentral Instrumentation Facility (C.I.F.), at BIT Mesra, has been created with an objective of providing a central facility of latest and advanced analytical techniques for research in various areas of science and technology. It houses several highly sophisticated and modern analytical equipment’s offering its users, a wide range of analytical methods / techniques for chemical / material analysis / testing / characterization enabling them to keep pace with developments taking place globally, publish their research findings in peer reviewed high impact factor journals and through their concerted efforts contribute to the uplift of the society at large. This facility is extensively used by undergraduate, postgraduate, doctoral students and faculty members. The facility is also extended to external organizations mainly academic institutions in the country, on chargeable basis. The facilities are availed by approximately 1500 internal users and 500 external users annually. This facility is also used for organizing short term courses/ workshops on the use and application of various instruments and analytical techniques.";
const para2=" To carry out analysis of samples received from faculty members of the institute, other academic institutions, and industries. To provide facilities of modern analytical instruments to students and researchers enabling them to keep pace with developments taking place globally, publish their research findings in peer reviewed high impact factor journals and through their concerted efforts, contribute to the uplift of the society at large. To acquire and develop capability for preventive maintenance and repair of the high end instruments. To organize short term courses/workshops on the use and application of various instruments and analytical techniques. To trained technicians for maintenance and operation of sophisticated instruments.";

const title1="CENTRAL INSTRUMENTATION FACILITY";
const title2="OBJECTIVES OF C.I.F";
export default function cif() {
  return (
    <>
            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={cifjumbo} title="CENTRAL INSTRUMENTATION FACILITY" class='jumbo-head' />
            <Aproved class1='others' class2='overlay' para={para1} title={title1}/>
            <Aproved class1='home--others' class2='over-right'para={para2} title={title2}/>
            <div className="container-fluid top-banner3 cif d-flex align-items-center">
  <div className='row col-lg-12 col-md-12 col-sm-12 col-12'>
    <div className='text-center col-lg-6 col-md-12 col-sm-12'>
      <h1 className='CustHColor py-5 '><button className="btn">
  <Link to="https://www.bitmesra.ac.in/Show_Other_Department?cid=1&deptid=190" style={{ textDecoration: 'none' }}>
    Go To C.I.F Home Page
  </Link>
</button>
</h1>
    </div>
    <div className='col-lg-6 col-md-0 col-sm-0'></div>
  </div>
</div>
            <Footer />
    
    </>
  )
}
