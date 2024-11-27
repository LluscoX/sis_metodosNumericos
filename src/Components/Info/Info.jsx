import React from 'react'
// import '../Jacobi/Jacobi.css'
import './Info.css'
import { MathComponent } from 'mathjax-react';


const k = "k"
const ji = "ji"
const Info = () => {
    return (
        <div className='fullscreen-container'>

        <div className="container mt-5">
            <h1 className='tilteIndo'> Guías de Métodos Numéricos</h1>

            <div className="tarjeta" id="jacobi" style={{ backgroundColor: 'rgb(219, 105, 12)' }}>
                <h2>Método de Jacobi</h2>
                <p>Este método iterativo es utilizado para resolver sistemas de ecuaciones lineales. Se basa en la fórmula:</p>
                <p style={{ fontSize: '18px' }}>
                    <MathComponent tex={String.raw`x_j^{(k+1)} = \frac{1}{a_{jj}} \left(b_j - \sum_{i \neq j} a_{ji} x_i^{(k)} \right)`} />
                </p>
                <p>
                    Donde x_j^k+1 es el valor de la incógnita en la siguiente iteración, a_ji son los coeficientes de
                    la matriz del sistema y b_j son los términos independientes.
                </p>
            </div>

            <div className="tarjeta" id="gauss-seidel" style={{ backgroundColor: 'rgba(134, 199, 38, 0.788)' }}>
                <h2>Método de Gauss-Seidel</h2>
                <p>
                    Este método también es iterativo y resuelve sistemas de ecuaciones lineales. La diferencia principal con
                    Jacobi es que utiliza el valor actualizado de cada incógnita en el mismo ciclo de iteración, mejorando la
                    convergencia:
                </p>
                <p style={{ fontSize: '18px' }}>
                    <MathComponent
                        tex={String.raw`x_j^{(k+1)} = \frac{1}{a_{jj}} \left(b_j - \sum_{i < j} a_{ji} x_i^{(k+1)} - \sum_{i > j} a_{ji} x_i^{(k)} \right)`}
                    />
                </p>
                <p>En esta fórmula, los valores de las incógnitas se actualizan en tiempo real, lo que optimiza el proceso iterativo.</p>
            </div>

            <div className="tarjeta" id="newton-raphson" style={{ backgroundColor: 'rgb(38, 161, 209)' }}>
                <h2>Método de Newton-Raphson</h2>
                <p>
                    Este método se utiliza para encontrar las raíces de ecuaciones no lineales. Se basa en la siguiente fórmula
                    iterativa, donde \(f(x)\) es la función y \(f'(x)\) su derivada:
                </p>
                <p style={{ fontSize: '18px' }}>
                    <MathComponent tex={String.raw`x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}`} />
                </p>
                <p>
                    Comienza con una estimación inicial \(x_0\) y se aproxima sucesivamente hacia la raíz de la ecuación. Cada
                    iteración ajusta el valor de \(x\) con base en la pendiente de la función.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Info