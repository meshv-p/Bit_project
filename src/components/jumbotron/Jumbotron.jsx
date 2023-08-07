import React from 'react';
import './jumbo.css';
function Jumbotron(props) {
  return (
    <div className="jumbotron text-bg-dark position-relative" style={{ height: "60vh" }}>
      <img src={props.img} className="card-img jumbotron-img " alt={props.alt} style={{ backgroundColor: "var(--head-bg)", mixBlendMode: "overlay", height: "-webkit-fill-available", objectFit: "fill" }} />
      <div className="card-img-overlay">
        <span className={`text-light textChota text-wrap position-absolute top-50 start-50 translate-middle fs-1 ${props.class}`} style={{fontWeight:'900',letterSpacing:'0.05em'}}>{props.title}</span>
      </div>
    </div>
  )
}

export default Jumbotron