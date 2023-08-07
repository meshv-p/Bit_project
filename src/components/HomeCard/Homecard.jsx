import React from 'react'
import './Homecard.css';

export default function Homecard({homeRight, rect1, rect2,content}) {
 return (
    <>
<div class="container imgWidth mt-5 mb-5 imgP">
  <div class={homeRight}>

    <div class="res col-md-6 col-lg-3 col-sm-6  col-xs-12 mb-3 mt-5  text-center">
      <img src={rect1} class="img-fluid rounded-start " alt="..."/>
    </div>

    <div class="col-md-6 col-lg-3 mb-3  col-sm-6 col-xs-12 text-center" >
      <img src={rect2} class="img-fluid rounded-start " alt="..."/>
    </div>

    <div class="col-md-12 col-lg-6 col-sm-12">
      <div class="">
        <div class="card-body homePara">
          <p class="card-text justify">{content}.</p>
        </div>
      </div>
    </div>
  </div>
</div>















      



    </>
  )
}
