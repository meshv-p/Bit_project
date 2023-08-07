import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import { innovation2 } from '../../images/Images'

import HorizontalCard from '../../components/horizontalCard/HorizontalCard';

function ResearchNews() {
    const researchNewsData = [
        {
            id: "rn01",
            title: "DST WISE Fellowship for Ph.D. (WISE-PhD)",
            background: " #620D21 ",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/SchemeId_2319_Advertisement_WISE_PhDwithInstructionSheet_ePMS_Revised.docx"

        }, {
            id: "rn02",
            title: "DST WISE Post- Doctoral Fellowship (PDF)",
            background: "#393EC1",
            link:"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/WISE-PDF-Guidelines.pdf"
        }
    ]
    return (
        <>
            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={innovation2} title="Research News" class='jumbo-head' />
            <div>
                <h2 className="text-center hd-color myText  ">
                    Research News
                </h2>
                <div className="container d-flex justify-content-center align-items-center position-relative  ">
                    <span className="line d-inline-block"></span>
                    <span className="star fa fa-star d-inline-block checked"></span>
                    <span className="line d-inline-block"></span>
                </div>

                <div className="container mb-custom " data-aos='fade-up' data-aos-offset="10">
                    <div className="row gy-3 mt-2">
                        {researchNewsData.map((item,index)=>
                            <HorizontalCard
                            key={index}
                            title={item.title}
                            background={item.background}
                            link={item.link}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ResearchNews;