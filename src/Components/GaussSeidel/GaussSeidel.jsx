import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Importamos la función de evaluación
import './gaussSeidel.css'

const GaussSeidel = () => {

    const [a1, setA1] = useState(3);
    const [a2, setA2] = useState('');
    const [a3, setA3] = useState('');
    const [a4, setA4] = useState('');

    const [b1, setB1] = useState('');
    const [b2, setB2] = useState('');
    const [b3, setB3] = useState('');
    const [b4, setB4] = useState('');

    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');
    const [c4, setC4] = useState('');

    const [valorInicial, setValorInicial] = useState(1);
    const [margenError, setMargenError] = useState(0.0001);
    const [iteraciones, setIteraciones] = useState(10);

    const [result, setResult] = useState('');
    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');

    const [errorA1, setErrorA1] = useState('');
    const [errorB2, setErrorB2] = useState('');
    const [errorC3, setErrorC3] = useState('');

    const [mensajeError, setMensajeError] = useState('');

    const verificarConst = () => {
        let x0 = parseFloat(valorInicial);
        let xa = x0, xb = x0, xc = x0;
        let iter = 0;
        let errorEncontrado = false;
    
        const calcularError = (valorNuevo, valorAntiguo) => Math.abs((valorNuevo - valorAntiguo) / valorNuevo);
    
        while (iter < iteraciones) {
            
            // Método de Gauss-Seidel: se usa el valor actualizado inmediatamente para la siguiente variable
            xa = (parseFloat(a4) - parseFloat(a2) * xb - parseFloat(a3) * xc) / parseFloat(a1);
            xb = (parseFloat(b4) - parseFloat(b1) * xa - parseFloat(b3) * xc) / parseFloat(b2);
            xc = (parseFloat(c4) - parseFloat(c1) * xa - parseFloat(c2) * xb) / parseFloat(c3);
    
            // Calcular errores relativos
            let errorA1Value = calcularError(xa, x0);
            let errorB2Value = calcularError(xb, x0);
            let errorC3Value = calcularError(xc, x0);
    
            // Si alguno de los errores es menor o igual al margen de error
            if (errorA1Value <= parseFloat(margenError) || errorB2Value <= parseFloat(margenError) || errorC3Value <= parseFloat(margenError)) {
                errorEncontrado = true;
                setMensajeError(`Al menos un error (A1, B2 o C3) es menor o igual al margen de error (${margenError}) en la iteración ${iter + 1}.`);
                break;
            }
    
            // Actualizar valores
            setResult(xa.toFixed(6));
            setResult1(xb.toFixed(6));
            setResult2(xc.toFixed(6));
    
            setErrorA1(errorA1Value.toFixed(6));
            setErrorB2(errorB2Value.toFixed(6));
            setErrorC3(errorC3Value.toFixed(6));
    
            iter++;
        }
    
        if (!errorEncontrado) {
            setMensajeError(`No se encontró ningún error menor o igual al margen de error (${margenError}) en el límite de ${iteraciones} iteraciones.`);
        }
    };
    

    return (
        <div className='fullscreen-container'>
            <div className='container-padre_gaussSeidel'>
                <div className="container_gaussSeidel">
                    <h1 className='title-gaussSeidel'>Método de Gauss-Seidel</h1>

                    <form onSubmit={(e) => e.preventDefault()}>

                        <label htmlFor="function" className="label-function">Matriz :</label>
                        <div className="parent">
                            <input type="text" className="input1" placeholder='a1' onChange={(e) => setA1(e.target.value)} />
                            <input type="text" className="input2" placeholder='a2' onChange={(e) => setA2(e.target.value)} />
                            <input type="text" className="input3" placeholder='a3' onChange={(e) => setA3(e.target.value)} />
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input4" placeholder='a4' onChange={(e) => setA4(e.target.value)} />
                            <input type="text" className="input5" placeholder='b1' onChange={(e) => setB1(e.target.value)} />
                            <input type="text" className="input6" placeholder='b2' onChange={(e) => setB2(e.target.value)} />
                            <input type="text" className="input7" placeholder='b3' onChange={(e) => setB3(e.target.value)} />
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input8" placeholder='b4' onChange={(e) => setB4(e.target.value)} />
                            <input type="text" className="input9" placeholder='c1' onChange={(e) => setC1(e.target.value)} />
                            <input type="text" className="input10" placeholder='c2' onChange={(e) => setC2(e.target.value)} />
                            <input type="text" className="input10" placeholder='c3' onChange={(e) => setC3(e.target.value)} />
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input12" placeholder='c4' onChange={(e) => setC4(e.target.value)} />
                        </div>

                        <label htmlFor="initialGuess" className="label-initialGuess">Valor inicial (x0):</label>
                        <input
                            type="number"
                            id="inputGauss"
                            className="input-initialGuess"
                            value={valorInicial}
                            onChange={(e) => setValorInicial(e.target.value)}
                        />

                        <label htmlFor="iterations" className="label-initialGuess">Máx Iteraciones:</label>
                        <input
                            type="number"
                            id="iterations"
                            className="input-iterations"
                            value={iteraciones}
                            onChange={(e) => setIteraciones(e.target.value)}
                        />

                        <button type="button" className='bg-primary rounded' onClick={verificarConst}>Calcular</button>
                    </form>
                </div>

                <div class="container2_gaussSeidel">
                    <h2 className='text-light'><strong>RESULTADOS:</strong></h2>
                    <h3 className="resultado_personal_gaussSeidel">Resultado X1: {result}</h3>
                    <h3 className="resultado_personal_gaussSeidel">Resultado X2: {result1}</h3>
                    <h3 className="resultado_personal_gaussSeidel">Resultado X3: {result2}</h3>

                    {/* <h2 className='text-light'>ERRORES: </h2>
                    <h3 className="resultado_personal_gaussSeidel">Error X1: {errorA1}</h3>
                    <h3 className="resultado_personal_gaussSeidel">Error X2: {errorB2}</h3>
                    <h3 className="resultado_personal_gaussSeidel">Error X3: {errorC3}</h3> */}

                    {/* {mensajeError && <h3 className="text-danger fs-5">{mensajeError}</h3>} */}
                </div>
            </div>
        </div>
    );
};

export default GaussSeidel;
