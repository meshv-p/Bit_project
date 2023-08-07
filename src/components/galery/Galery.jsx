import React, { useState, useEffect, useCallback } from 'react';
import './Galery.css';

const handleKeyDown = (event, handlePrevImage, handleNextImage) => {
  if (event.key === 'ArrowLeft') {
    handlePrevImage();
  } else if (event.key === 'ArrowRight') {
    handleNextImage();
  }
};

export default function ImageGallery({ gal }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleViewMore = () => {
    setSelectedImage(null);
    setShowAllImages(true);
  };

  const handlePrevImage = useCallback(() => {
    setSelectedImage((prevSelectedImage) => Math.max(0, prevSelectedImage - 1));
  }, []);

  const handleNextImage = useCallback(() => {
    setSelectedImage((prevSelectedImage) =>
      Math.min(gal.length - 1, prevSelectedImage + 1)
    );
  }, [gal]);

  const displayedImages = showAllImages ? gal : gal.slice(0, 6);

  const handleImageClick = (index) => {
    if (showAllImages) {
      setSelectedImage(index);
    } else {
      setSelectedImage(index + 1);
    }
  };

  useEffect(() => {
    // Add event listeners when the overlay is displayed
    if (selectedImage !== null) {
      const eventListener = (event) => handleKeyDown(event, handlePrevImage, handleNextImage);
      document.addEventListener('keydown', eventListener);
      return () => {
        document.removeEventListener('keydown', eventListener);
      };
    }
  }, [selectedImage, handlePrevImage, handleNextImage]);


  return (
    <>
      <div className="container mt-2 mb-5">
        <div className="row text-center gallery">
          {displayedImages.map((item, index) => (
            <div key={index} className="cmt col-lg-4 col-md-6 col-sm-12 mt-4">
              <img
                src={item.image}
                className="img-fluid"
                alt={`Gallery_image ${item.Sno}`}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
        {!showAllImages && (
          <div className="pagination d-flex justify-content-center align-items-center my-4">
            <button className="btn btn-primary" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
        {selectedImage !== null && (
          <div id="overlay" className="show">
            <span className="close-button" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <div className="image-nav-arrows">
              <span className="prev-arrow" onClick={handlePrevImage}>
                &#10094;
              </span>
              <span className="next-arrow" onClick={handleNextImage}>
                &#10095;
              </span>
            </div>
            {showAllImages ? (
              <div className="image-zoom-container">
                <img
                  src={gal[selectedImage].image}
                  className="img-fluid zoom-in-animation large-image"
                  alt={`Gallery_image ${gal[selectedImage].Sno}`}
                />
              </div>
            ) : (
              <img
                src={gal[selectedImage - 1].image}
                className="img-fluid zoom-in-animation"
                alt={`Gallery_image ${gal[selectedImage - 1].Sno}`}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
