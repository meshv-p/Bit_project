import React from 'react'
import { Link } from 'react-router-dom'


function HorizontalCard(props) {
    return (
        <div className="col-sm-12 col-md-12 col-lg-12 d-flex  justify-content-center" >
            <div className="card-item d-flex align-items-center rounded shadow-sm w-100 " style={{height:"100px",maxWidth:"600px" ,background: `${props.background}`}}>
                
                {/*Serial number  */}
                <div className="s-number text-light px-3" style={{width:"40px", fontSize: "14px"}}>
                    {props.sno}
                </div>
                <div className="title text-light pt-3" style={{ fontSize: "14px" }}>
                    <p>
                        {props.title}
                    </p>
                </div>
                
                <Link to={props.link} className="btn btn-primary me-2 py-1 px-4 ms-auto " style={{ fontSize: "14px" }} >
                    View
                </Link>
            </div>
        </div>
    )
}

export default HorizontalCard