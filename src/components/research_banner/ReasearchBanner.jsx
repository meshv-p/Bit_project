import React from 'react'
import "./research.css"
import CountUp from 'react-countup';
function ReasearchBanner({FundedReasearchNumber,DeptReasearchNumber}) {
    return (
        <div className="card ReasearchBanner text-bg-dark border-0 cursor-move mb-custom " data-aos='zoom-in-up' data-aos-offset="10">
            <div className="card-img-overlay d-flex justify-content-between align-items-center">
                <div className="left-container d-flex justify-content-around w-75">
                    <div className="title1">
                        <h1><CountUp start={0} end={FundedReasearchNumber} duration={2} delay={1} redraw={false} decimals={0} /> Crore+</h1>
                        <h3>Research Budget</h3>
                    </div>
                    <div className="title2" >
                    <h1><CountUp start={0} end={DeptReasearchNumber} duration={2} delay={1} redraw={false} decimals={0} />+</h1>
                        <h3>Research Domain</h3>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default ReasearchBanner