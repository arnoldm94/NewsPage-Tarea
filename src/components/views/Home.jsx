import React from "react";


const Home = () => {

const previosimg = ()=>{console.log('anterior')}
const nextimg  = ()=>{console.log('siguiente')}
  return <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
          <div className="carousel-item active">
              <img src="src/assets/img/coche1.jpg" className="d-block w-100" alt="Coche1"></img>
          </div>
          <div className="carousel-item ">
            
            <img src="src/assets/img/coche2.jpg" className="d-block w-100" alt="Coche2"></img>
          </div>
          <div className="carousel-item ">
            
            <img src="src/assets/img/coche3.jpg" className="d-block w-100" alt="Coche3"></img>
          </div>
  </div>
  <button className="carousel-control-prev" type="button" onClick={previosimg} data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" onClick={nextimg} data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> 
</div>
};

export default Home;
