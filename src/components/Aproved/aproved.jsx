import React from 'react'
import './Aproved.css'
export default function Aproved({ class1, class2, para, title}) {
  return (
    <>
      <section className={class1}>
        <div className={class2} ></div>
        <div className="main_content">
          <div className="main-container">
            <div className="row">
              <div className="moveR"></div>
              <div className="col-sm-6 aph">
                <h1 className="ms-2 mt-4">{title}</h1>
                <div>
                  <div className="container lineH">
                    <p className="mt-5">
                      {para}
                    </p>
                  </div>
                  <p className="container">
                    <a href="./"><button type="button" className="btnC">Read More &gt;</button></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}