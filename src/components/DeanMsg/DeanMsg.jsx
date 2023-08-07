
import React, { useState, useEffect, useRef } from 'react';
import {newsLogo,carousel1,carousel2,carousel3,dean} from '../../images/Images'
export default function DeanMsg() {
  return (
    <>
      <Ticker />
    </>
  );
}
export function Crousel() {
  return (
    <div className="carousel-wrapper">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src={carousel1} className="d-block w-100 " alt="carousel_image1" />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="carousel_image2" />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="carousel_image3" />
          </div>
        </div>
      </div>
      <div className="black-div p-3" style={{ background: "var(--head-color)", color: "var(--bg-color)" }}>
        <h3>Message From Dean RIE</h3>
        <article>The office of the Dean (Research, Innovation and Entrepreneurship) is now called Research and Development Cell (RDC) as per the requirement of UGC. RDC is responsible for the implementation of the institute's overall research, innovation and entrepreneurship programmes which are focused towards advancement of human knowledge and development of society. Research efforts are directed towards solving complex problems, delivering social benefits and driving economic prosperity, nationally as well as globally.
          </article>
        {/* dean card */}
        <div className=' col  ' style={{ height: "160px" }}>
          <div className="funding-card d-flex position-relative align-items-center shadow rounded h-100 flex-row-reverse">
            {/* dean Image */}
            <div className="logo-image d-flex  align-items-center p-0 ps-2">
              <img src={dean} className='img-fluid rounded-circle p-0' alt='Dr.C.Jeganathan' style={{ width: "5rem", height: "6rem" }} />
            </div>
            {/* Info */}
            <div className="card-info d-block align-items-center ps-3">
              <div className="card-title ps-2">
                <h3> Dr.C.Jeganathan</h3>
                <p className='fw-semibold text-light' >Professor and Dean, Remote Sensing</p>
              </div>
              {/* contact Button */}
              <div className=" position-relative bottom-0 pb-2" >
                <button type="button" className=" btn btn-primary border-0 shadow ">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of dean card */}
    </div>
  );
}
const Ticker = () => {
  return (
    <div className="ms-lg-4 mb-custom">
      <div className="row me-0">
        <div className="col-lg-8 mt-4" data-aos='zoom-in-down' >
          <Crousel />
        </div>
        <div className="col-lg-4 mt-4 " data-aos='zoom-in-up'>
          <div className="container ">
            <h3 className="customNews fw-bold">Latest Research News</h3>
            <div className="news-box ">
              <div className="row news-container ">
                <div className="col-lg-12">
                  <div className="card-wrapper row">
                    <NewsSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const NewsSection = () => {
  const news_card_details = [
    {
      sNo: 1,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '01 April, 2020'
    },
    {
      sNo: 2,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '02 April, 2020'
    },
    {
      sNo: 3,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '03 April, 2020'
    },
    {
      sNo: 4,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '04 April, 2020'
    },
    {
      sNo: 5,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '05 April, 2020'
    },
    {
      sNo: 6,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '06 April, 2020'
    },
    {
      sNo: 7,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '07 April, 2020'
    },
    {
      sNo: 8,
      logo: newsLogo,
      description: 'All India Council for Technical Education is assigned a value but never used',
      date: '08 April, 2020'
    }
  ];

  const [isScrolling, setIsScrolling] = useState(true);
  const newsRef = useRef(null);

  useEffect(() => {
    const container = newsRef.current;
    const handleMouseEnter = () => {
      setIsScrolling(false);
    };
    const handleMouseLeave = () => {
      setIsScrolling(true);
    };
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!isScrolling) return;

    const container = newsRef.current;
    const childHeight = container.firstChild.clientHeight;

    let scrollDistance = 0;

    const scroll = () => {
      scrollDistance += 1;

      if (scrollDistance >= childHeight) {
        scrollDistance = 0;
        container.appendChild(container.firstChild);
        container.scrollTop -= childHeight;
      }

      container.scrollTop += 1;
    };

    let scrollInterval = setInterval(scroll, 30);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isScrolling]);

  return (
    <div
      className="news-container overflow-hidden"
      style={{ height: '965px', }} // height  can be adjusted as needed
      ref={newsRef}
    >
      {news_card_details.map((news_card, index) => (
        <div
          className={`card-row ${index === 0 ? 'top-news' : ''}`}
          key={news_card.sNo}
        >
          <div className="card-col">
            <div className="card mt-1">
              <img
                src={news_card.logo}
                className="card-img-top customImg"
                style={{ width: '110px' }}
                alt="Logo"
              />
              <div className="card-body">
                <p className="card-text desc">{news_card.description}</p>
                <p className="card-text date">{news_card.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};