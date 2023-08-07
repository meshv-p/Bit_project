import React from 'react'
import { AppliacationFormLogo, downloadButton, formApplicationBanner } from '../../images/Images'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';
function FormsApplication() {
  const applicationFormData = [
    {
      id: "af01",
      sno: "1",
      title: "Form for registration from Project",
      style: {
        width: "200px",
        height: "80px",
        backgroundColor: "red"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Resignation%20from%20project%20Memo(1).pdf"
    },
    {
      id: "af02",
      sno: "2",
      title: "Form for Movements/Travel/to attend Seminar/Conferences",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Revised%20Movement%20order%20formate%20for%20project%20Student%2018_01_2023.pdf"

    },
    {
      id: "af03",
      sno: "3",
      title: "Monthly absentee Report for Fellowship & Along with Leave",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Modified_Absentee%20Report%20for%20the%20departments(2).docx"


    },
    {
      id: "af04",
      sno: "4",
      title: "Monthly attendance Record from Departments",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Monthly_Leave_Record_from_Departments(3)%20(1).docx"


    },
    {
      id: "af05",
      sno: "5",
      title: "Annual Leave Record",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Annual_Leave%20Sanction%20Sheet%20(IRF%2C%20JRF%2C%20SRF%20and%20Project%20Fellow)%20(1).docx"


    },
    {
      id: "af06",
      sno: "6",
      title: "Form for payment request(Govt. grants)",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Revised%20Govt%20Bill%20format%20as%20on%2024_03_2022(3)%20(1)%20(1).docx"


    },
    {
      id: "af07",
      sno: "7",
      title: "Leave application for CISR/UGC/Project Student",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Revised%20Leave%20application%20as%20on%2001_01_2023.pdf"


    },
    {
      id: "af08",
      sno: "8",
      title: "Bio-metric Missed Punch Slip",
      style: {
        width: "200px",
        height: "80px"
      },
      link:""


    },
    {
      id: "af09",
      sno: "9",
      title: "Exception Report for UGC",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/ExceptionScholarship(1).pdf"


    },
    {
      id: "af10",
      sno: "10",
      title: "Covering Letter for Exception Report",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Covering%20for%20Exception%20report%20of%20fellowship.docx"


    },
    {
      id: "af11",
      sno: "11",
      title: "CISR Statement of Expenditure",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Statement%20of%20Expenditure.pdf"


    },
    {
      id: "af12",
      sno: "12",
      title: "No Dues Form",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/No%20dues%20Form%20.docx"


    },
    {
      id: "af13",
      sno: "13",
      title: "Joining Report",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Joining%20for%20fellowship.docx"


    },
    {
      id: "af14",
      sno: "14",
      title: "Monthly Conformation report for UGC",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/301118_Format_for_Fellowship_Scholarship.pdf"


    },
    {
      id: "af15",
      sno: "15",
      title: "UGC Continuation certificate",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/ANNEXURE%20III%20for%20NET%20JRF.pdf"


    },
    {
      id: "af16",
      sno: "16",
      title: "UGC HRA certificate",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Annexure6%20HRA.pdf"


    },
    {
      id: "af17",
      sno: "17",
      title: "UGC Contigency certificate",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Annexure5%20Contigency.pdf"


    },
    {
      id: "af18",
      sno: "18",
      title: "UGC Covering Letter",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Covering%20letter%20for%20continution%20and%20HRA%20certificates(1).docx"


    },
    {
      id: "af19",
      sno: "19",
      title: "UGC Upgradation JRF to SRF",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/NET%20JRF%20Upgradation%20from%20JRF%20to%20SRF%20Annexure%20VII.docx"


    },
    {
      id: "af20",
      sno: "20",
      title: "MANF Continuation certificate",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Continuation%20Certificate%20for%20MANF.pdf"


    },
    {
      id: "af21",
      sno: "21",
      title: "MANF HRA certificate",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HRA%20Certificate%20for%20MANF.pdf"


    },
    {
      id: "af22",
      sno: "22",
      title: "Contigency and UC certificate for MANF",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Contigincy%20and%20UC%20for%20MANF.pdf"


    },
    {
      id: "af23",
      sno: "23",
      title: "MANF Yearly Progress Report",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Yearly%20Progress%20Report%20for%20MANF.pdf"


    },
    {
      id: "af24",
      sno: "24",
      title: "MANF Upgradation HRF to SRF",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Upgradation%20form%20JRF%20to%20SRF%20MANF.pdf"


    },
    {
      id: "af25",
      sno: "25",
      title: "Joining Report for MANF",
      style: {
        width: "200px",
        height: "80px"
      },
      link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Joining%20Report%20for%20MANF.pdf"

    }
  ];
  return (
    <>
      <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={formApplicationBanner} title="Forms & applications" />
      <div className="container mt-5">
        <h2 className="text-center hd-color myText  ">
          Application forms ( Relevant to students)
        </h2>
        <div className="container d-flex justify-content-center align-items-center position-relative  ">
          <span className="line w-25"></span>
          <span className="star fa fa-star checked"></span>
          <span className="line w-25"></span>
        </div>
      </div>
      <div className='container'>
        {/* <div className="forms-container h-auto p-2 rounded-3" style={{ background: 'var(--card-color1)' }}>
          <h5 className="text-center">Memo Related Forms</h5>
          <div className='svg-container d-flex flex-wrap justify-content-evenly'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"><label x="50%" y="50%" className="position-absolute">Text Over SVG</label><path fill="#F0A35F" d="M0 10.274V8a8 8 0 0 1 8-8h45.345a8 8 0 0 1 5.46 2.154l6.39 5.967a8 8 0 0 0 5.46 2.153H373a8 8 0 0 1 8 8V190a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V10.274Z" /><path fill="#FED7B5" fill-opacity=".97" d="M55.5 43V.002h-38C0 .002 0 .002 0 16v65.5C22.769 66.577 51.146 59.823 55.5 43Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#F0A35F" d="M0 10.274V8a8 8 0 0 1 8-8h45.345a8 8 0 0 1 5.46 2.154l6.39 5.967a8 8 0 0 0 5.46 2.153H373a8 8 0 0 1 8 8V190a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V10.274Z" /><path fill="#FED7B5" fill-opacity=".97" d="M55.5 43V.002h-38C0 .002 0 .002 0 16v65.5C22.769 66.577 51.146 59.823 55.5 43Z" /></svg>
          </div>
        </div> */}
        <div className="row gy-3 my-2">
          {applicationFormData.map((item, index) =>
            <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
              <div className="card-item  d-flex align-items-center ps-2 border shadow-sm rounded" style={{ height: "80px" }}>
                <div className="s-number pt-2" style={{ width: "30px" }} >
                  <p>
                    {item.sno}
                  </p>
                </div>
                <div className="image" style={{ width: "60px" }} >
                  <img src={AppliacationFormLogo} alt='Logo' />
                </div>
                <div className="title ps-3 pt-2" style={{ width: "300px" }}>
                  <p style={{ fontSize: "13px" }}>
                    {item.title}
                  </p>
                </div>
                <div className="download align-self-end">
                <Link to={item.link} download target="_blank" className="btn btn-light">
              <img src={downloadButton} alt='Download Button' style={{ height: "10px" }} />
            </Link>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FormsApplication