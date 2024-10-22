import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Importamos la función de evaluación
import './NewtonRaphsonCalculator.css';

const NewtonRaphsonCalculator = () => {

    const [fn, setFn] = useState('x^5 - x - 1');
    const [dfn, setDfn] = useState('5*x^4 - 1');
    const [initialGuess, setInitialGuess] = useState(1);
    const [tolerance, setTolerance] = useState(0.0001);
    const [iterations, setIterations] = useState(10);
    const [result, setResult] = useState('');


    const calculateNewtonRaphson = () => {

        let x0 = parseFloat(initialGuess);
        let tol = parseFloat(tolerance);
        let maxIter = parseInt(iterations);

        let iter = 0;
        let x1;
        let error = 100;
        let margenError = 1;

        while (iter < maxIter && error > tol) {
            try {

                const f_x0 = evaluate(fn, { x: x0 });
                const fprime_x0 = evaluate(dfn, { x: x0 });


                console.log("ecuacion " + f_x0);
                // console.log(fprime_x0);

                if (fprime_x0 === 0) {
                    setResult("Error: La derivada es 0. No se puede continuar.");
                    return;
                }

                // formula
                x1 = x0 - f_x0 / fprime_x0;
                // let x1bien = parseFloat(x1.toFixed(7));
                error = Math.abs(x1 - x0);

                margenError = error.toFixed(12);

                console.log("x1 = ", x1);
                // console.log("x0 = ", x0);
                // console.log('-------------');
                x0 = x1;

                iter++;
            } catch (error) {
                setResult("Error en la evaluación de la función. Verifica la sintaxis.");
                return;
            }
        }

        let respuesta;
        if (margenError === tol || margenError < tol) {
            respuesta = `Resultado: ${x1} en ${iter} iteraciones. Margen de Error = ${margenError}`
            setResult(respuesta);
        }
        else {
            respuesta = 'No se encontró una solución dentro del límite de iteraciones.';
            setResult(respuesta);
        }

        // const Respuesta = error < tol 
        //     ? `Resultado: ${x1} en ${iter} iteraciones. Margen de Error = ${margenError}` 
        //     : 'No se encontró una solución dentro del límite de iteraciones.';

        // setResult(Respuesta);
    };

    return (
        <div className='fullscreen-container'>

            <div className='container-padre'>
                <div className="container">
                    <h1 className='title-newthon'>Newton-Raphson</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="function" className="label-function">Función f(x):</label>
                        <input
                            type="text"
                            id="function"
                            className="input-function"
                            value={fn}
                            onChange={(e) => setFn(e.target.value)}
                            placeholder="Ej: x^5 - x - 1"
                        />

                        <label htmlFor="derivative" className="label-derivative">Derivada f'(x):</label>
                        <input
                            type="text"
                            id="derivative"
                            className="input-derivative"
                            value={dfn}
                            onChange={(e) => setDfn(e.target.value)}
                            placeholder="Ej: 5*x^4 - 1"
                        />

                        <label htmlFor="initialGuess" className="label-initialGuess">Valor inicial (x0):</label>
                        <input
                            type="number"
                            id="initialGuess"
                            className="input-initialGuess"
                            value={initialGuess}
                            onChange={(e) => setInitialGuess(e.target.value)}
                        />

                        <label htmlFor="tolerance" className="label-tolerance">Error aprox. a buscar:</label>
                        <input
                            type="number"
                            id="tolerance"
                            className="input-tolerance"
                            value={tolerance}
                            onChange={(e) => setTolerance(e.target.value)}
                            step="0.00001"
                        />

                        <label htmlFor="iterations" className="label-iterations">Máx Iteraciones:</label>
                        <input
                            type="number"
                            id="iterations"
                            className="input-iterations"
                            value={iterations}
                            onChange={(e) => setIterations(e.target.value)}
                        />

                        <button type="button" onClick={calculateNewtonRaphson}>Calcular</button>
                    </form>
                </div>

                <div className='container2'>
                    <h3 className='resultado_personal'>{result}</h3>
                </div>
            </div>
        </div>

    );
};

export default NewtonRaphsonCalculator;
