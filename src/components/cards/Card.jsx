import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';
function Card(props) {
    return (
        <>
            <div className="mt-5 d-flex justify-content-center align-items-center"  key={props}>
                <div className="card custom-card d-flex justify-content-between align-items-center " style={props.style}>
                    <img src={props.image} alt={props.alt} className="custom-card-img w-100 h-100 object-fit-cover " />
                    <div className="card-body custom-card-body w-100 px-1 justify">
                        <h5 className="card-title  fw-bold hd-color text-start" style={props.title_style}>{props.title}</h5>
                        <p className="card-text mb-0  custom-desc text-start">{props.desc}</p>
                        <Link to={props.link} className="btn btn-primary d-flex justify-content-center  align-items-center py-2 w-100 btn-custom" style={props.readMoreLinkStyle}>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card