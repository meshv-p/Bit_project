import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import { innovation2 } from '../../images/Images'

import HorizontalCard from '../../components/horizontalCard/HorizontalCard';


function IPRCell() {
    const iprCellData = [
        {
            id: "ipr01",
            sno: "1",
            title: "IPR Policy of BIT",
            background:"#BE4453",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/IPR%20Policy%20of%20Birla%20Institute%20of%20Technology-2019.pdf"
        },
        {
            id: "ipr02",
            sno: "2",
            title: "List of Patents in BIT",
            background:"#BE4453",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Patent%20List(1).pdf"
        },
        {
            id: "ipr01",
            sno: "3",
            title: "Recent List of Patent Activities(2021-22)",
            background: "#A63B48",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/PATENT_APPLICATION_FORMAT.docx"
        },
        {
            id: "ipr01",
            sno: "4",
            title: "IPR application Form (for faculty to apply)",
            background:"#8A2E39",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/PATENT_APPLICATION_FORMAT.docx"
        },
        {
            id: "ipr01",
            sno: "5",
            title: "National Research Development Corporation (NRDC) weblink",
           background: "#78202A",
           link:"http://www.nrdcindia.com/"
        },
    ]
    return (
        <>
            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={innovation2} title="IPR Cell of BIT Mesra" class='jumbo-head' />
            <div>
                <h2 className="text-center hd-color myText  ">
                    IPR Cell
                </h2>
                <div className="container d-flex justify-content-center align-items-center position-relative  ">
                    <span className="line d-inline-block"></span>
                    <span className="star fa fa-star d-inline-block checked"></span>
                    <span className="line d-inline-block"></span>
                </div>
                <div className="container mb-custom " data-aos='fade-up' data-aos-offset="10">
                    <div className="row gy-3 mt-2">
                        {iprCellData.map((item,index)=>
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
                <Footer/>
            </div>

        </>
    )
}

export default IPRCell