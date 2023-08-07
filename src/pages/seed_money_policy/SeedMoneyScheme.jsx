import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Footer from '../../components/footer/Footer'
import { researchNdev_img } from '../../images/Images'
import { Link } from 'react-router-dom'
function SeedMoneyScheme() {
    return (
        <>
            <Navbar navBg="var(--bg-color)" />
            <Jumbotron img={researchNdev_img} title=" Seed Money Policy" class='jumbo-head' />
            <div className="container mt-5" data-aos='fade-down' data-aos-offset="10">
                <div>
                    <h2 className="text-center hd-color myText  ">
                        Seed Money Scheme
                    </h2>
                    <div className="container d-flex justify-content-center align-items-center position-relative  ">
                        <span className="line d-inline-block"></span>
                        <span className="star fa fa-star d-inline-block checked"></span>
                        <span className="line d-inline-block"></span>
                    </div>
                </div>
            </div>



            
            <div className=" my-5 ">
                <div className="outer-card-element text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
                    <div className='my-2 repeating-gradient p-2' >
                        <h4 className='fw-semibold text-highlighter'> I. PROGRAM DESCRIPTION </h4>
                        <article>
                            <p className='fw-light justify'>
                                Seed Money Scheme (SMS), sponsored by Birla Institute of Technology, Mesra, Ranchi, aim to promote research and innovation amongst young faculty. Seed funding under this scheme is to be used to initiate/continue the research work of the new faculty. The objective of the scheme is to accelerate the possibility to receive the financial support from external agencies in future. The applicant must clearly and convincingly demonstrate that the proposed project represents a new research direction in an area likely to generate external funding. Research Project that is already supported by other sources will not be considered for funding. The project under SMS will be considered as Minor Project and relevant API score will be credited as per CAS rule of BIT, Mesra (Clause- 10A).
                            </p>
                            <p className="text-info">
                                Download Clause 10A of CAS rule
                                {/* Download button */}
                                <button type="button" class="btn btn-outline-light py-1 ms-2">Download </button>
                            </p>
                            <ul>
                                <li>Have a high potential for external funding</li>
                                <li>Have significant scientific merit</li>
                                <li>Represent a new direction for the PI</li>
                                <li>Build or strengthen inter-disciplinary research partnerships</li>
                            </ul>
                        </article>
                    </div>
                    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'> II. APPLICANT ELIGIBILITY & FORMALITIES</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                                <li className='mb-2'>Applicant must be a full-time newly recruited faculty as Assistant Professor in the Institute or its extension centers in last 3 years.</li>
                                <li className='mb-2'>Principal Investigator (PI) must have Ph.D. degree.</li>
                                <li className='mb-2'>If a proposal is turned down by the Seed Grant approval committee, the PI is allowed to submit a new proposal in the same year.</li>
                                <li className='mb-2'>The SMS will be discontinued in the absence of PI for more than 30 days of unsanctioned leave and in such case PI will have to return the money. If the leave is taken due to unforeseen health condition then PI may get special permission to continue the SMS.</li>
                                <li className='mb-2'>In case of resignation without completion of SMS, PI has to refund all the money availed under the scheme to BIT.</li>
                                <li className='mb-2'>In case of Maternity Leave, PI will be given special permission to extend their project after joining duty. However, priori permission is required in such cases.</li>
                                <li className=''>After completion PI must submit a proper report along with achievements, and deliver a formal presentation in the respective department before the committee and PI need to submit utilization certificate as per given format.</li>
                            </ol>
                        </article>
                    </div>

                    <div  className='my-4 repeating-gradient p-2' data-aos='fade-left' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>III. PROPOSAL SUBMISSION WINDOW</h4>
                        <article className='fw-light justify'>
                            The proposal submission will be open throughout the year. The project proposal should be submitted as per format attached herewith (Annexure I). The duration of SMS will be Two year only (maximum), and will not be extended beyond 2 years.
                        </article>
                    </div>
                    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>IV. PROPOSAL REVIEW</h4>
                        <article className='fw-light justify'>
                            Submitted proposal will be evaluated as per the format enclosed as  <span className='fw-medium'>Annexure II.</span>
                        </article>
                    </div>
                    <div  className='my-4 repeating-gradient p-2' data-aos='fade-left' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>V. PROJECT COMPLETION</h4>
                        <article className='fw-light justify'>
                            <ol>
                                <li className='mb-2'>PI must submit a proposal for external funding to the <span className='fw-medium'>external agencies within the time period</span>  of project under SMS.</li>
                                <li className='mb-2'>PI will be responsible to submit <span className='fw-medium'>three copies of project completion report (Annexure III)</span> along with final Utilization Certificate <span className='fw-medium'>(Annexure IV)</span>.</li>
                            </ol>
                        </article>
                    </div>
                    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>VI. PROJECT EVALUATION</h4>
                        <p className='fw-light justify'>
                            The date of proposal evaluation meeting will be notified by the office of the Dean <span className='fw-medium'>(RIE)</span>.
                        </p>
                    </div>
                    <div  className='my-4 repeating-gradient p-2' data-aos='fade-left' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>VII. BUDGET</h4>
                        <p className='fw-light justify'>
                            The funding support under this scheme will be up to Rs. 5,00,000/-  (for 2 years). Additional small grant may be sought with proper justifications at time of the project evaluation meeting.
                        </p>
                        <p className='fw-semibold'>
                            i) Funding is available for purchasing and other activities as specified below:
                        </p>
                        <article>
                            <ol>
                                <li>Minor equipment/software/ related with proposal (which are not available in BIT).</li>
                                <li>Consumables (Like ICs, circuit boards, chemicals, data, testing charges, tools, etc.)</li>
                                <li>Travel support and registration for attending conference inside India only.</li>
                                <li>Contingencies (books, annual membership fees in technical societies excluding subscription charges, etc)</li>
                                <li>Any other important items subject to the prior approval of Dean (RIE).</li>
                            </ol>
                        </article>
                        <p className='fw-semibold'>
                            ii) Grant cannot be used
                        </p>
                        <article>
                            <ol>
                                <li>For Travel outside India.</li>
                                <li>For purchase of Laptop /Desktop</li>
                            </ol>
                        </article>
                    </div>
                    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>VIII. GRANT ADMINISTRATION</h4>
                        <p className='fw-light justify'>
                            The Principal Investigator is responsible for the administration of granted funds. In particular, he/she must be certain that over-expenditures do not occur. Any procurement will be made as per the existing purchase policy of the Institute. Capital equipment purchased from this fund will be the property of <span className='fw-medium'>Birla Institute of Technology, Mesra</span>.<br />

                            If the work requires more time over initial proposed period to complete, the Principal Investigator may request a three-month extension (once only) by sending a request to the Dean, RIE at least one month prior to the end of the project.
                        </p>
                    </div>
                    <div  className='my-4 repeating-gradient p-2' data-aos='fade-left' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>IX. Approval Committee</h4>
                        <p className='fw-light justify'>
                            The committee for evaluating the initial proposal and the final completion report is already notified by the Registrar. Please see the <span className='fw-medium'>Annexure V</span> for details.
                        </p>
                    </div>
                    <div className="inner-card-element rounded-3 p-4 text-dark " data-aos='zoom-in' style={{ background: 'var(--card-color1)' }}>
                        <h5 className='fw-semibold mb-3'> DOWNLOADS</h5>
                        <article>
                            <ul>
                                <li className='mb-3'>Annexure I :
                                    <Link to="/" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> SEED MONEY APPLICATION FORM</Link></li>
                                <li className='mb-3'>Annexure II :
                                    <Link to="/" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">PROJECT EVALUATION FORMAT Revised</Link></li>
                                <li className='mb-3'>Annexure III :
                                    <Link to="/" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> PROJECT COMPLETION REPORT</Link></li>
                                <li className='mb-3'>Annexure IV :
                                    <Link to="/" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">  UTILIZATION CERTIFICATE</Link></li>
                                <li>Annexure V :
                                    <Link to="/" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">APPROVAL COMMITTEE</Link></li>
                            </ul>
                        </article>
                    </div>
                    <div className="bottom-buttons text-center" data-aos='zoom-up' data-aos-offset='10'>
                        <button type="button m-2" class="btn btn-danger m-2">Bill Format for Seed Money</button>
                        <button type="button" class="btn btn-danger m-2">Details of SMS Beneficiary</button>
                        <button type="button" class="btn btn-danger m-2">Seed Money Data</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SeedMoneyScheme
