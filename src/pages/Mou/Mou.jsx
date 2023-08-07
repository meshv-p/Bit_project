import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import { researchNdev_img } from '../../images/Images'

import HorizontalCard from '../../components/horizontalCard/HorizontalCard';
import { Link } from 'react-router-dom';


function MOU() {
    const mouData = [
        {
            id: "mou01",
            sno: "1",
            title: "Jharkhand State Pollution Control Board, BIT and Ranchi Municipal Corporation",
            background:"#620D21",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU_JSPCB_BIT_RMC_IoR_190321.pdf"
        },
        {
            id: "mou02",
            sno: "2",
            title: "Central Training College, CRPF, Ranchi and BIT",
            background:"#620D21",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU_BITM-CTC_T_IT_CRPF-RNC_160421.PDF"
        },
        {
            id: "mou03",
            sno: "3",
            title: "Jharkhand State Pollution Control Board, BIT and Jamshedpur Notified Area-Jamshedpur",
            background:"#620D21",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU_JSPCB_BIT_JNAC-Jsr_IoR_190321_Jamshedpur_MOU.pdf"
        },
        {
            id: "mou04",
            sno: "4",
            title: "Delhi Technological University-Delhi and BIT, Mesra",
           background:"#620D21",
           link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU_DTU-BIT_1.pdf"
        },
        {
            id: "mou05",
            sno: "5",
            title: "Indian Institute of Technology – Hauz Khas, New Delhi and BIT , Mesra",
            background:"#620D21",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU%20IIT%20DELHI.pdf"
        },
        {
            id: "mou06",
            sno: "6",
            title: "Central Leather Research Institute- Adyar- Chennai and BIT , Mesra",
           background:"#620D21",
           link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU%20CLRI.pdf"
        },
        {
            id: "mou07",
            sno: "7",
            title: "Sabita Engineering Works , Tipudana Industrial Area, Hatia, Ranchi and BIT, Mesra",
           background:"#620D21",
           link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU%20SEW.pdf"
        },
        {
            id: "mou08",
            sno: "8",
            title: " Artificial Computing Machines Pvt. Ltd., Ranchi and BIT, Mesra",
           background:"#620D21",
           link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MOU_BIT-Artificial%20Computing%20Machines%20Pvt%20Ltd_.pdf"
        },
    ]
    return (

        <>

            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={researchNdev_img} title="Memorandum of Understanding" class='jumbo-head' />

            <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div className="buttons text-center">

                    {/* Past and Current MOUs */}
                    <Link to="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MoU's%20List%2017-18_to_2021-22.pdf" type="button" class="btn btn-primary m-3">Past & Current MOUs</Link>

                    {/* List of MOus */}
                    <Link to="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/MoU%20Uploading%2016_09_2021(1).pdf" type="button" class="btn btn-primary m-3">List of MOUs</Link>
                </div>
                <div>
                    <h2 className="text-center hd-color myText  ">
                        MOU Documents
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                    <div className="container mb-custom" data-aos='fade-up' data-aos-offset="10">
                        <div className="row gy-3 mt-2">
                            {mouData.map((item, index) =>
                            
                             <HorizontalCard
                                    key={index}
                                    sno={item.sno}
                                    title={item.title}
                                    background={item.background}
                                    link={item.link}
                                />
                            
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default MOU