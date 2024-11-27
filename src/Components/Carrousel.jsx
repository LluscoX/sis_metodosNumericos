import React from 'react'

// import carousel1 from '../source/img/carousel-1.jpg'
import img1 from '../source/Images/fondoMN.jpg'
import '../Components/Carrousel.css'

const Carrousel = () => {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img className="imagen-fondo" src={img1} alt="Image" />
                        {/* <img className="w-100" src="./carousel-1.jpg" alt="Image" /> */}
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h3 className="text-white mb-3 d-none d-sm-block">Metodos Numericos</h3>
                                <h1 className="display-3 text-white mb-3">Calculadora
                                </h1>
                                <h5 className="text-light font-italic mb-3 d-none d-sm-block">
                                    Temas avanzado durante el semestre.
                                </h5>
                                <h5 className="text-light font-italic mb-3 d-none d-sm-block">
                                    Ing. Diego Robles Saucedo.
                                </h5>
                                <a href="/newtonRaphon" className="btn btn-lg custom-btn mt-3 mt-md-4 px-4" style={{ backgroundColor: '#ff5733', color: 'white', marginRight: '20px' }}>Newton R.</a>
                                <a href="/gaussSeidel" className="btn btn-lg custom-btn mt-3 mt-md-4 px-4" style={{ backgroundColor: 'orange', color: 'white', marginRight: '20px' }}>Gauss S.</a>
                                <a href="/gaussSeidelSORT" className="btn btn-lg custom-btn mt-3 mt-md-4 px-4" style={{ backgroundColor: 'black', color: 'white' }}>Gauss SORT</a>
                                <a href="/jacobi" className="btn btn-lg custom-btn mt-3 mt-md-4 px-4 ml-3" style={{ backgroundColor: 'blue', color: 'white' }}>Jacobi</a>
                                <a href="/jacobiSORT" className="btn btn-lg custom-btn mt-3 mt-md-4 px-4 ml-3" style={{ backgroundColor: 'green', color: 'white' }}>Jacobi SORT</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrousel