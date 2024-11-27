import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Importamos la función de evaluación
import '../GaussSeidel/GaussSeidel.css'
import Swal from 'sweetalert2'

const GaussSORT = () => {

    const [a1, setA1] = useState('');
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
    const [margenError, setMargenError] = useState(10);
    const [iteraciones, setIteraciones] = useState(10);
    const [suavisado, setSuavisado] = useState(1);

    const [result, setResult] = useState('');
    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');

    const [errorA1, setErrorA1] = useState('');
    const [errorB2, setErrorB2] = useState('');
    const [errorC3, setErrorC3] = useState('');

    const [suavisado1, setSuavisado1] = useState('');
    const [suavisado2, setSuavisado2] = useState('');
    const [suavisado3, setSuavisado3] = useState('');

    const [resultados, setResultados] = useState([]);


    const [mensajeError, setMensajeError] = useState('');

    let suavi1 = 0;
    let suavi2 = 0;
    let suavi3 = 0;


    const verificarConst = () => {

        let errorEncontrado = false;
        if (a1 != '' && a2 != '' && a3 != '' && a4 != '' && b1 != '' && b2 != '' && b3 != '' && b4 != '' && c1 != '' && c2 != '' && c2 != '' && c3 != '' && c4 != '') {
            const historial = [];


            let x0 = parseFloat(valorInicial);
            let xa = x0, xb = x0, xc = x0;
            let iter = 0;

            const calcularError = (valorNuevo, valorAntiguo) => {
                if (valorNuevo === 0) {
                    throw new Error("El valor nuevo no puede ser cero.");
                }
                return Math.abs((valorNuevo - valorAntiguo) / valorNuevo) * 100;
            };

            while (iter < iteraciones) {

                // Método de Gauss-Seidel: se usa el valor actualizado inmediatamente para la siguiente variable

                xa = (parseFloat(a4) - parseFloat(a2) * suavi2 - parseFloat(a3) * suavi3) / parseFloat(a1);
                suavi1 = suavisado * xa + (1 - suavisado) * suavi1;

                xb = (parseFloat(b4) - parseFloat(b1) * suavi1 - parseFloat(b3) * suavi3) / parseFloat(b2);
                suavi2 = suavisado * xb + (1 - suavisado) * suavi2;

                xc = (parseFloat(c4) - parseFloat(c1) * suavi1 - parseFloat(c2) * suavi2) / parseFloat(c3);
                suavi3 = suavisado * xc + (1 - suavisado) * suavi3;

                // Calcular errores relativos
                console.log(suavi1 + " suavi ")
                console.log("xa =  " + xa)
                let errorA1Value = calcularError(suavi1, xa);

                let errorB2Value = calcularError(suavi2, xb);
                let errorC3Value = calcularError(suavi3, xc);

                historial.push({
                    iteracion: iter + 1,
                    normales: [xa, xb, xc],
                    valores: [suavi1, suavi2, suavi3],
                    errores: [errorA1Value, errorB2Value, errorC3Value]
                });

                setResultados(historial);

                // Si alguno de los errores es menor o igual al margen de error
                if (errorA1Value <= parseFloat(margenError) || errorB2Value <= parseFloat(margenError) || errorC3Value <= parseFloat(margenError)) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: `Al menos un error (A1, B2 o C3) es menor o igual al margen de error (${margenError}) en la iteración ${iter + 1}.`,
                        showConfirmButton: false,
                        timer: 5000
                      });
                    errorEncontrado = true;
                    break;
                }

                // Actualizar valores
                setResult(suavi1.toFixed(6));
                setResult1(suavi2.toFixed(6));
                setResult2(suavi3.toFixed(6));

                setErrorA1(errorA1Value.toFixed(6));
                setErrorB2(errorB2Value.toFixed(6));
                setErrorC3(errorC3Value.toFixed(6));

                iter++;
            }
            if (!errorEncontrado) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `No se encontró ningún error menor o igual al margen de error (${margenError}), Intente aumentar el limite de iteraciones`,
                });
            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los datos deben ser llenados!",
            });
        }
        
    };


    const reiniciar = () => {
        setA1('')
        setA2('')
        setA3('')
        setA4('')
        setB1('')
        setB2('')
        setB3('')
        setB4('')
        setC1('')
        setC2('')
        setC3('')
        setC4('')

        setSuavisado(1)
        setMargenError(10)
        setValorInicial(1)
        setIteraciones(10)
    }

    return (
        <div className='fullscreen-container'>
            <div className='container-padre_gaussSeidel'>
                <div className="container_gaussSeidel">
                    <h1 className='title-gaussSeidel'>Método de Gauss-Seidel SORT</h1>

                    <form onSubmit={(e) => e.preventDefault()}>

                        <label htmlFor="function" className="label-function">Matriz :</label>
                        <div className="parent">
                            <input type="text" className="input1" placeholder='a1' value={a1} onChange={(e) => setA1(e.target.value)} />
                            <input type="text" className="input2" placeholder='a2' value={a2} onChange={(e) => setA2(e.target.value)} />
                            <input type="text" className="input3" placeholder='a3' value={a3} onChange={(e) => setA3(e.target.value)} />
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input4" placeholder='a4' value={a4} onChange={(e) => setA4(e.target.value)} />
                            <input type="text" className="input5" placeholder='b1' value={b1} onChange={(e) => setB1(e.target.value)} />
                            <input type="text" className="input6" placeholder='b2' value={b2} onChange={(e) => setB2(e.target.value)} />
                            <input type="text" className="input7" placeholder='b3' value={b3} onChange={(e) => setB3(e.target.value)} />
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input8" placeholder='b4' value={b4} onChange={(e) => setB4(e.target.value)} />
                            <input type="text" className="input9" placeholder='c1' value={c1} onChange={(e) => setC1(e.target.value)} />
                            <input type="text" className="input10" placeholder='c2' value={c2} onChange={(e) => setC2(e.target.value)} />
                            <input type="text" className="input10" placeholder='c3' value={c3} onChange={(e) => setC3(e.target.value)} />
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input12" placeholder='c4' value={c4} onChange={(e) => setC4(e.target.value)} />
                        </div>
                        <div className='mt-2'>

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

                            <label className="label-initialGuess mt-4">Valor de suavisado (W):</label>
                            <input
                                type="number"
                                className="input-iterations"
                                value={suavisado}
                                onChange={(e) => setSuavisado(e.target.value)}
                            />

                            <label className="label-initialGuess">Error aprox. a buscar:</label>
                            <input
                                type="text"
                                // className="input-tolerance"
                                value={margenError}
                                onChange={(e) => setMargenError(e.target.value)}
                            // step="0.00001"
                            />
                        
                        </div>

                        <button type="button" className='bg-primary rounded' onClick={verificarConst}>Calcular</button>
                        <button type="button" className='m-2 rounded' onClick={reiniciar}>Reiniciar</button>

                    </form>
                </div>

                <div class="container2_gaussSeidel">
                    <h2 className='text-light'> RESULTADOS POR ITERACION </h2>

                    {resultados.map(({ iteracion, valores, errores, normales }) => (
                        <div key={iteracion}>

                            <h4 className="text-primary">ITERACION {iteracion}:</h4>

                            <h4 className="text-light"> <strong>Normales y Suavisados: </strong> :</h4>
                            <h3 className="resultado_personal_jacobi">Resultado normal X1: {normales[0]}</h3>
                            <h3 className="resultado_personal_jacobi">Resultado Suavisado X1: {valores[0].toFixed(6)}</h3>

                            <h3 className="resultado_personal_jacobi">Resultado normal X2: {normales[1]}</h3>
                            <h3 className="resultado_personal_jacobi">Resultado Suavisado X2: {valores[1].toFixed(6)}</h3>

                            <h3 className="resultado_personal_jacobi">Resultado normalX3: {normales[2]}</h3>
                            <h3 className="resultado_personal_jacobi">Resultado Suavisado X3: {valores[2].toFixed(6)}</h3>


                            <h4 className="text-light"> <strong>Errores</strong> :</h4>
                            <h3 className="resultado_personal_jacobi">Error X1: {errores[0].toFixed(6)}%</h3>
                            <h3 className="resultado_personal_jacobi">Error X2: {errores[1].toFixed(6)}%</h3>
                            <h3 className="resultado_personal_jacobi">Error X3: {errores[2].toFixed(6)}%</h3>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    );
};

export default GaussSORT;
