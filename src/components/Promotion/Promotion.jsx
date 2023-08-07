import React from 'react'
import './Promotion.css'
import { Link } from 'react-router-dom'
export default function Promotion() {
  return (
    <>
 <div className='container cont1  pt-4 my-5  rounded-4'>
    <p className='MainPara ms-3  '>
      <p> <strong>1. Seed Money Scheme (SMS)</strong> The initiated by the Institute in the year 2015 to provide grant for the Faculty Members under different areas of research, which is to be used to initiate/continue the research work of the Faculty. The objective of the scheme is to accelerate the possibility to receive the financial support from external agencies in future. The applicant must clearly and convincingly demonstrate that the proposed project represents a new research direction in an area likely to generate external funding. The project under SMS is being considered as Minor Project and relevant API score will be credited as per CAS rule of BIT, Mesra (Clause – 10A).</p>
      <p>Download Clause 10A of CAS rule <Link target='_blank' to="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Clause%2010%20A.pdf" className="text-decoration-underline" >Clause 10A</Link></p>
      <p> The List of Previous SMS beneficiary is attached: <Link target='_blank' to="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/SEED_MONEY_AWARDED_FULL_DETAILS_BIT_MESRA.pdf "className="text-decoration-underline">Details of SMS Beneficiary</Link></p>

      <strong><p className='fw-bold'>Applicant must be a full-time newly recruited faculty as Assistant Professor in the Institute or its extension centers in last 3 years & Grant will be of Rs. 5,00,000.</p></strong>
      <p className='pb-4'>
      Link for Seed money Scheme :  <Link to="/seed_money_policy" className="text-decoration-underline">Seed Money Scheme</Link>
      </p>
      </p>
</div>



{/* 2nd div */}
<div className='container cont2 pt-5  my-5 rounded-4'>
    <p className='MainPara ms-3 '>
      <p> <strong>2. Research Promotion Grant (RPG)</strong>  Research Promotion Grant (RPG): The Institute is giving 30% of the over-head cost of the project under RPG to the Principal Investigator (PI) /Co-PI of the project as under:</p>
      <ol>
        <li>Principal Investigatior(PI): 60%</li>
        <li>CO-Principal Investigator(CO-PI): 40%</li>
      </ol>

      <p>The amount under RPG is being given to the PI and Co-PI towards the following:</p>
      <ol>
        <li> For attending National / International Conferences.</li>
        <li>Buying books, computer peripherals, publication in reviewed journals, telephone / internet charges, for extending hospitality to the experts / invitees.</li>
      </ol>
      <p className='pb-5 '>The PI /Co-PI may utilize the unspent amount under this grant till his/her superannuation/resignation.</p>
      </p>
</div>


{/* 3rd  div*/}
<div className='container cont3 pt-4 my-5 rounded-4'>
    <p className='MainPara ms-3 mt-4 '>
      <p> <strong>2. Performance Based Incentive (PBI)</strong>  The Institute has taken initiative to give incentives to the Departments & Principal Investigators as under, based on the performance for accumulating maximum amount of research fund from the external Funding Agencies.</p>
      </p>
{/*  */}

<div className="container ">
  <div className="row d-flex justify-content-center ms-5 me-5 pb-3 ">
    <div className="innerCont1 col-lg-6 mb-5">
      <ol>
        <li>
          First 3 Departments who have accumulated maximum funds for research from different funding agencies in the last 3 / 4 years:
        </li>
        <h5>a&#41;: 5.00 Lacs</h5>
        <h5>b&#41;: 3.00 Lacs</h5>
        <h5>c&#41;: 2.00 Lacs</h5>
        <h5>Total 10.00 Lac</h5>
      </ol>
    </div>
    <div className="innerCont2 col-lg-6 mb-5">
    <ol>
        <li>
        Contingency Grant to first 3 PIs who have accumulated maximum funds for their research from the funding agencies in last 3 / 4 years:
        </li>
        <h5>a&#41;: 0.40 Lacs</h5>
        <h5>b&#41;: 0.30 Lacs</h5>
        <h5>c&#41;: 0.20 Lacs</h5>
        <h5>Total 0.90 Lac</h5>
      </ol>
    </div>
  </div>
</div>



{/*  */}

</div>
    </>
  )
}
