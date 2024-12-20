import React from 'react'


const Navbar = () => {
  return (
    <div className="container-fluid p-0">
        {/* <Newton_raphon/> */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                    <a href="/" className="nav-item nav-link active">Inicio</a>
                    <a href="/newtonRaphon" className="nav-item nav-link"> Newton Raphson</a>
                    <a href="/gaussSeidel" className="nav-item nav-link">Gauss-Seidel</a>
                    <a href="/jacobi" className="nav-item nav-link">Jacobi</a>
                    <a href="/jacobiSORT" className=" nav-link"> Jacobi SORT</a>
                    <a href="/gaussSeidelSORT" className=" nav-link"> Gauss-Seidel SORT</a>
                    <a href="/informacion" className=" nav-link"> Como Realizar...?</a>
                </div>
                <a  className="btn btn-lg btn-primary px-3 d-none d-lg-block">Brayan x Anahi </a>
            </div>
        </nav>
    </div>  
  )
}

export default Navbar