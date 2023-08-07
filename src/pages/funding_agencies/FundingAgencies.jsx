import React from 'react'
import "./fundingAgency.css"
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import funding_agency from '../../images/funding_agency.png'
import { LOGO1, LOGO2, LOGO3, LOGO4, LOGO5 } from '../../images/Images.js'
import FundingTable from '../../components/fundingTable/FundingTable'
import Footer from "../../components/footer/Footer"
import { Link } from 'react-router-dom';
function FundingAgencies() {
  const fundingCardData = [
    {
      id: "c01",
      img: LOGO1,
      title: "DST-SERB Funding Opportunities",
      style: {
        backgroundColor: "#81BDF2"
      },
      link:"https://www.serbonline.in/SERB/HomePage"
    },
    {
      id: "c02",
      img: LOGO2,
      title: "DST Recent Calls for Proposals",
      style: {
        backgroundColor: "#F0A35F"
      },
      link:"https://dst.gov.in/call-for-proposals"
    },
    {
      id: "c03",
      img: LOGO2,
      title: "DST Recent Announcements",
      style: {
        backgroundColor: "#FF6582"
      },
      link:"https://dst.gov.in/whatsnew/announcement"
    },
    {
      id: "c04",
      img: LOGO3,
      title: "India Science, Technology and Innovation New Announcements",
      style: {
        backgroundColor: "#C999EC"
      },
      link:"https://www.indiascienceandtechnology.gov.in/latest-updates"
    },
    {
      id: "c05",
      img: LOGO4,
      title: "AICTE Links to Research Funds",
      style: {
        backgroundColor: "#69E7CE"
      },
      link:"https://www.aicte-india.org/opportunities/students/research-funds"
    },
    {
      id: "c06",
      img: LOGO5,
      title: "DST-SERB Funding Opportunities",
      style: {
        backgroundColor: "#EFA9D3"
      },
      link:""
    },
  ];
  const funding_card_details =[
    {
      SNo: "1",
      FundingAgency: "AICTE",
      Abbreviation: "All India Council for Technical Education",
      Website: "www.aicte-india.org"
    },
    {
      SNo: "2",
      FundingAgency: "CSIR",
      Abbreviation: "Council of Scientific and Industrial Research",
      Website: "www.csirhrdg.res.in"
    },
    {
      SNo: "3",
      FundingAgency: "DAE-BRNS",
      Abbreviation: "Department of Atomic Energy",
      Website: "www.dae.gov.in"
    },
    {
      SNo: "4",
      FundingAgency: "DAE-NBHM",
      Abbreviation: "National Board for Higher Mathematics",
      Website: "www.nbhm.dae.gov.in"
    },
    {
      SNo: "5",
      FundingAgency: "DBT",
      Abbreviation: "Department of Bio-Technology",
      Website: "www.dbtindia.nic.in"
    },
    {
      SNo: "6",
      FundingAgency: "DOE",
      Abbreviation: "Department of Electronics",
      Website: "www.dde.nic.in"
    },
    {
      SNo: "7",
      FundingAgency: "DRDO",
      Abbreviation: "Defence Research and Development Organisation",
      Website: "www.drdo.gov.in"
    },
    {
      SNo: "8",
      FundingAgency: "DRDO-AR&DB",
      Abbreviation: "Aeronautics Research and Development Board",
      Website: "www.drdo.gov.in"
    },
    {
      SNo: "9",
      FundingAgency: "DRDO-DMRL",
      Abbreviation: "Defence Metallurgical Research Laboratory",
      Website: "www.drdo.gov.in"
    },
    {
      SNo: "10",
      FundingAgency: "DRDO-LSRB",
      Abbreviation: "Life Sciences Research Board",
      Website: "www.drdo.gov.in"
    },
    {
      SNo: "11",
      FundingAgency: "DSIR",
      Abbreviation: "Department for Scientific and Industrial Research",
      Website: "www.dsir.gov.in"
    },
    {
      SNo: "12",
      FundingAgency: "DST",
      Abbreviation: "Department of Science and Technology",
      Website: "www.dst.gov.in"
    },
    {
      SNo: "13",
      FundingAgency: "ICMR",
      Abbreviation: "Indian Council of Medical Research",
      Website: "www.icmr.nic.in"
    },
    {
      SNo: "14",
      FundingAgency: "IGCAR",
      Abbreviation: "Indira Gandhi Centre for Atomic Research",
      Website: "www.igcar.ernet.in"
    },
    {
      SNo: "15",
      FundingAgency: "INSA",
      Abbreviation: "Indian National Science Academy",
      Website: "www.insaindia.org"
    },
    {
      SNo: "16",
      FundingAgency: "IREDA",
      Abbreviation: "Indian Renewable Energy Development Agency Limited",
      Website: "www.ireda.gov.in"
    },
    {
      SNo: "17",
      FundingAgency: "ISRO",
      Abbreviation: "Indian Space Research Organisation",
      Website: "www.isro.org"
    },
    {
      SNo: "18",
      FundingAgency: "ISTE",
      Abbreviation: "Indian Society For Technical Education",
      Website: "www.isteonline.in"
    },
    {
      SNo: "19",
      FundingAgency: "IE",
      Abbreviation: "The Institution of Engineers (India)",
      Website: "www.ieindia.org"
    },
    {
      SNo: "20",
      FundingAgency: "IET",
      Abbreviation: "The Institution of Engineering and Technology",
      Website: "www.theiet.org"
    },
    {
      SNo: "21",
      FundingAgency: "IMD",
      Abbreviation: "India Meteorological Department",
      Website: "www.imd.gov.in"
    },
    {
      SNo: "22",
      FundingAgency: "MCIT",
      Abbreviation: "Ministry of Communications and Information Technology",
      Website: "www.mcit.gov.ws"
    },
    {
      SNo: "23",
      FundingAgency: "MHRD",
      Abbreviation: "Ministry of Human Research Development",
      Website: "www.mhrd.gov.in"
    },
    {
      SNo: "24",
      FundingAgency: "MNRE",
      Abbreviation: "Ministry of New and Renewable Energy",
      Website: "www.mnre.gov.in"
    },
    {
      SNo: "25",
      FundingAgency: "MoEF",
      Abbreviation: "Ministry of Environment and Forests",
      Website: "www.moef.nic.in"
    },
    {
      SNo: "26",
      FundingAgency: "MoES",
      Abbreviation: "Ministry of Earth Science",
      Website: "www.moes.gov.in"
    },
    {
      SNo: "27",
      FundingAgency: "MOWR",
      Abbreviation: "Ministry of Water Resources",
      Website: "www.wrmin.nic.in"
    },
    {
      SNo: "28",
      FundingAgency: "MOCIT",
      Abbreviation: "Ministry of Communications & Information Technology",
      Website: "www.deity.gov.in"
    },
    {
      SNo: "29",
      FundingAgency: "MFPI",
      Abbreviation: "Ministry of Food Processing Industries",
      Website: "www.mofpi.nic.in"
    },
    {
      SNo: "30",
      FundingAgency: "NCERT",
      Abbreviation: "National Council for Economic Research and Training",
      Website: "www.iccw.vsnl.net.in"
    },
    {
      SNo: "31",
      FundingAgency: "NJB",
      Abbreviation: "National Jute Board",
      Website: "www.jute.org"
    },
    {
      SNo: "32",
      FundingAgency: "PCRA",
      Abbreviation: "Petroleum Conservation Research Association",
      Website: "www.pcra.org"
    },
    {
      SNo: "33",
      FundingAgency: "RSFC",
      Abbreviation: "Research Scheme on Flood Control",
      Website: "www.rsfc.vsnl.net.in"
    },
    {
      SNo: "34",
      FundingAgency: "RSOP",
      Abbreviation: "Research Scheme on Power",
      Website: "www.cbip.org"
    },
    {
      SNo: "35",
      FundingAgency: "SDC",
      Abbreviation: "SAARC Documentation Centre",
      Website: "www.sdc.gov.in"
    },
    {
      SNo: "36",
      FundingAgency: "SERC",
      Abbreviation: "Science and Engineering Research Council",
      Website: "www.serc-dst.org"
    },
    {
      SNo: "37",
      FundingAgency: "TAAS",
      Abbreviation: "Technology Absorption and Adaptation Scheme",
      Website: "www.taas-dst.org"
    },
    {
      SNo: "38",
      FundingAgency: "UGC",
      Abbreviation: "University Grants Commission",
      Website: "www.ugc.ac.in"
    },
    {
      SNo: "39",
      FundingAgency: "VSSC",
      Abbreviation: "Vikram Sarabhai Space Centre",
      Website: "www.vssc.gov.in"
    },
    {
      SNo: "40",
      FundingAgency: "W2E",
      Abbreviation: "Waste to Energy",
      Website: "www.w2es.com"
    }
  ]
  
  
  const columnNames = {
    sno: 'S.No.',
    fundingAgency: 'FundingAgency',
    abbreviation: 'Abbreviation',
    website: 'Website',
  };
  const Indexes = [3];
  const link1 = [
    "https://www.aicte-india.org",
    "https://www.csirhrdg.res.in",
    "https://www.dae.gov.in",
    "https://www.nbhm.dae.gov.in",
    "https://www.dbtindia.nic.in",
    "https://www.dde.nic.in",
    "https://www.drdo.gov.in",
    "https://www.drdo.gov.in",
    "https://www.drdo.gov.in",
    "https://www.drdo.gov.in",
    "https://www.dsir.gov.in",
    "https://www.dst.gov.in",
    "https://www.icmr.nic.in",
    "https://www.igcar.ernet.in",
    "https://www.insaindia.org",
    "https://www.ireda.gov.in",
    "https://www.isro.org",
    "https://www.isteonline.in",
    "https://www.ieindia.org",
    "https://www.theiet.org",
    "https://www.imd.gov.in",
    "https://www.mcit.gov.ws",
    "https://www.mhrd.gov.in",
    "https://www.mnre.gov.in",
    "https://www.moef.nic.in",
    "https://www.moes.gov.in",
    "https://www.wrmin.nic.in",
    "https://www.deity.gov.in",
    "https://www.mofpi.nic.in",
    "https://www.iccw.vsnl.net.in",
    "https://www.jute.org",
    "https://www.pcra.org",
    "https://www.rsfc.vsnl.net.in",
    "https://www.cbip.org",
    "https://www.sdc.gov.in",
    "https://www.serc-dst.org",
    "https://www.taas-dst.org",
    "https://www.ugc.ac.in",
    "https://www.vssc.gov.in",
    "https://www.w2es.com"
  
  ];
  return (
    <>
      <header>
        <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={funding_agency} title="Funding Agencies" />
        <div className='gallery mb-custom mt-5' data-aos='fade-down' data-aos-offset="10">
          <div className='container-lg'>
            <div className='row gy-3 row-cols-1 row-cols-sm-2 row-cols-md-3 '>
              {fundingCardData.map((item, index) => (
                <div key={index}>
                  {/* Card */}
                  <div className=' col ' style={{ height: "160px" }}>
                    <div className="funding-card d-flex gap-3 position-relative  shadow rounded h-100" style={item.style}>
                      {/* Logo Image */}
                      <div className="logo-image d-flex h-100 align-items-center p-lg-3 p-0 ps-2">
                        <img src={item.img} className='img-fluid rounded-circle p-2 h-auto ' alt='card1' />
                      </div>
                      {/* Card Info */}
                      <div className="card-info d-flex flex-column h-100 text-end justify-content-center align-items-end me-lg-3 me-0">
                        <div className="card-title ps-2">
                          <p className='fw-semibold pt-3' style={{ color: 'var(--head-color)' }} >{item.title}</p>
                        </div>
                        {/* Read More Button */}
                        <div className="read-more-button-div   bottom-0  pb-2" >
                        <Link to={item.link} className="btn btn-primary border-0 shadow">Read More</Link>  
                                  </div>
                      </div>
                    </div>
                  </div>
                  {/* Card End */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
            Funding Agencies
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <FundingTable  card_details={funding_card_details} columnNames={columnNames} Indexes={Indexes} link1={link1} />
      </header>
      <Footer />
    </>
  )
}

export default FundingAgencies