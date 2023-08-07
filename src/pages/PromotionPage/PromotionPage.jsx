import React from 'react'
import Promotion from '../../components/Promotion/Promotion';
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import promotionImg from '../../images/promotionJumbo.png'
import Footer from '../../components/footer/Footer'
export default function promotion() {
  return (
    <>
               <Navbar navBg="var(--bg-color)" />
        <Jumbotron img={promotionImg} title="Research Promotion Scheme at BIT" />
    <Promotion/>
    <Footer />
    </>
  )
}
