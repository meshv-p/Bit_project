import React from 'react';
import './Domains.css';

const Domains = ({ persons }) => {
  const chunkSize = 3; // Number of cards per carousel item

  // Function to split persons into groups of 3
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );

  const personChunks = chunkArray(persons, chunkSize);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators mb-5">
              {personChunks.map((_, index) => (
                <li
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : 'false'}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </ol>
            <div className="carousel-inner">
              {personChunks.map((personGroup, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <div className="row">
                    {personGroup.map((person, personIndex) => (
                      <div
                        key={personIndex}
                        className="col-md-4 my-3 d-flex align-items-center"
                      >
                        <div className=" single-box w-100">
                          <div className=" card cardTop">
                            <img
                              src={person.imagePath}
                              alt={person.name}
                              className="card-img-top domimg"
                            />
                          </div>
                       
                            <h5 className="card-title text-center my-3">{person.name}</h5>
                            <p className="card-text ms-2 me-2 mb-5">{person.description}</p>
                         
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
