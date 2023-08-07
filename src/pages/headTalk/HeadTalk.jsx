import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import FundingTable from '../../components/fundingTable/FundingTable'
import Footer from "../../components/footer/Footer"
import { fundingJumbo } from '../../images/Images'
  const columnNames = {
    Date: 'Date',
    Department: 'Department',
    Representative: 'Representative',
    Invitation: 'Invitation',
    HeadTalk: 'Head Talk'
  };

  
  const funding_card_details= [
    {
      Date: "2022-08-03",
      Department: "SER",
      Representative: "Head / In-charge",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-08-10",
      Department: "Arch. & Planning",
      Representative: "Head",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-08-24",
      Department: "Management",
      Representative: "Head",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-09-07",
      Department: "BIT Extension Centre - Deoghar",
      Representative: "Director",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-09-21",
      Department: "BIT Extension Centre - Patna",
      Representative: "Director",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-10-12",
      Department: "BIT Extension Centre - Noida",
      Representative: "Director",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-10-27",
      Department: "BIT Extension Centre - Jaipur",
      Representative: "Director",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-11-09",
      Department: "BIT Extension Centre - Lalpur",
      Representative: "Director",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-01-05",
      Department: "PIE",
      Representative: "Dr. Joyjeet Ghosh",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-01-19",
      Department: "Remote Sensing",
      Representative: "Dr. A.P. Krishna",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-02-02",
      Department: "ECE",
      Representative: "DR. S.S. Solanki",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-02-16",
      Department: "PST",
      Representative: "Dr. Swastika Ganguly",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2022-03-02",
      Department: "CEE",
      Representative: "Dr. Sudeshna Chakarborty",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-08-11",
      Department: "Chemistry",
      Representative: "Dr. Ashoke Sharon",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-08-25",
      Department: "Physics",
      Representative: "Dr. S. K. Sinha",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-09-08",
      Department: "Mathematics",
      Representative: "Dr. S. Padhi",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-09-22",
      Department: "Chemical Engg.",
      Representative: "Dr. Gautam Sarkhel",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-10-06",
      Department: "BEBT",
      Representative: "Dr. Rakesh Sinha",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-10-20",
      Department: "EEE",
      Representative: "Dr. Sarbani Chakarborty",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-11-17",
      Department: "CSE",
      Representative: "Dr. Vandana Bhattacharjee",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    },
    {
      Date: "2021-12-15",
      Department: "Mech. Engg.",
      Representative: "Dr. D. P. Mishra",
      Invitation: "Invitation",
      HeadTalk: "Head Talk"
    }
  ]
  const Indexes = [3,4];
  const link1 = [
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_3rd%20August%202022_SER.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Poster_Dr%20Satyaki_Sarkar.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation%2024th%20August%20Managment.jpg",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_7th%20Sep%202022.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk_BITP.jpg",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_12thOctober2022(2).pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_Dr%20Peeyush_27Oct2022(2).pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Invitation_Head%20Talk%20Poster_Dr%20Vandana_Director_Lalpur_EC(1).pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_16thMarch2022_HOD_PIE_DR_JOYJEET_GHOSE.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_19jan2022_DRS.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_2Feb2022_HOD_ECE.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_16Feb2022_PST%20(1).pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_Dr_Sudeshna_CEE.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HEAD_TALK_SERIES_INVITATION_11august2021%20Chemistry.jpg",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20%20Physics%2025%20Aug_%202021.jpg",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%203_Mathematics(1).jpg",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Chemical_Talk_22sep2021.jpg",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/biotechnology%20poster.jpg",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HOD_EEE_TALK_20OCT2021.pdf",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/head%20talk%20Invitation%20Dr%20Vandana.png",
   "https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_5jan2022_MECH.pdf",
  ];
  const link2 = [
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HeadTalk%20SER%203rd%20Aug_%202022.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk_Dr%20Satyaki_Sarkar_10_08_2022_Arch.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20PPT%2024-08-22%20for%20website%20pdf%20Managment.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/PPT_BIT%20Deoghar%20Head%20Talk%2007-09-2022.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk-%20Director%2C%20Patna.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HeadTalk_NoidaCampus-12_10_22.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/jaipur%20headtalk%20Final-1.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HeadTalk%20BIT%20Lalpur_Our%20Legacy%20and%20the%20Road%20Ahead.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Heald%20Talk%2016_03_2022%20JG%20PIE.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/DRS_HeadTalk_Dr_APK_19012022_Corrected.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20PPT_02_02_2022_ECE.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HOD%20PPT%20on%2016th%20February%2022%20_%20Pharmacy.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/02%2003%2022%20Talk%20CEE.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HOD%20Chemistry_Presentation_Aug%2011_2021.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/PHYSICS%20DEPT%20PRESENTATION%2025%208%2021%20Final(1).pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Glimpse%20on%20Mathematics_HEADTALK%20Presesntatio_8sep2021.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk-%20Chemical.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk_Bioengineering%20and%20Biotechnology_06102021(1).pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head_Talk_EEE_6oct2021.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/CSE_Footprints%20and%20Vision_2021.pdf",
"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Mechanical_Final.pdf",
  ];


export default function HeadTalk() {
  return (
   <>
    <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={fundingJumbo} title="HeadTalk" />
        <div className="container mt-5" data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Schedule of M0-22
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
        <FundingTable  card_details={funding_card_details} columnNames={columnNames}  Indexes={Indexes} link1={link1} link2={link2}/>
        <Footer />


   </>
  )
}
