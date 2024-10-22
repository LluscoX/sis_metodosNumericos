import React from 'react'

// import carousel1 from '../source/img/carousel-1.jpg'
import carousel1 from '../source/Images/fondoMN.jpg'

const Carrousel = () => {
  return (
        <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="w-100" src={carousel1} alt="Image" />
            {/* <img className="w-100" src="./carousel-1.jpg" alt="Image" /> */}
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '900px' }}>
                <h3 className="text-white mb-3 d-none d-sm-block">Metodos Numericos</h3>
                <h1 className="display-3 text-white mb-3">Calculadora</h1>
                <h5 className="text-black mb-3 d-none d-sm-block">
                Temas avanzado durante el semestre
                </h5>
                <a href="#" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Newton</a>
                <a href="#" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Gauss</a>
                <a href="#" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Jacobi</a>
            </div>
            </div>
        </div>
        <div className="carousel-item">
            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '900px' }}>
                <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
                <h1 className="display-3 text-white mb-3">Pet Spa & Grooming</h1>
                <h5 className="text-white mb-3 d-none d-sm-block">
                Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat
                </h5>
                <a href="#" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Jacobi</a>
                <a href="#" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Gauss</a>
                <a href="#" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4"></a>
            </div>
            </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
       
        </a>
        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
        
        </a>
    </div>
    </div>

  )
}

export default Carrousel