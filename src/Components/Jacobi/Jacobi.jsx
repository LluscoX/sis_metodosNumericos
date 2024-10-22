import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Importamos la función de evaluación
import './jacobi.css'

const Jacobi = () => {

    const [a1, setA1 ] = useState();
    const [a2, setA2 ] = useState();
    const [a3, setA3 ] = useState();
    const [a4, setA4 ] = useState();
    
    const [a1Despejado, setA1Despejado ] = useState();

    const [b1, setB1 ] = useState();
    const [b2, setB2 ] = useState();
    const [b3, setB3 ] = useState();
    const [b4, setB4 ] = useState();

    const [c1, setC1 ] = useState();
    const [c2, setC2 ] = useState();
    const [c3, setC3 ] = useState();
    const [c4, setC4 ] = useState();


    const [valorInicial, setValorInicial] = useState(1);
    const [margenError, setMargenError] = useState(0.0001);
    const [iteraciones, setIteraciones] = useState(10);
    
    const [result, setResult] = useState('');
    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');


    // Función para calcular Newton-Raphson
    const calculateNewtonRaphson = () => {


        let x0 = parseFloat(valorInicial);
        let tol = parseFloat(margenError);
        let maxIter = parseInt(iteraciones);

        let iter = 0;
        let x1;
        let error = 100;
        let margenError = 1;

        while (iter < maxIter && error > tol) {
            try {

                const f_x0 = evaluate(funcion, { x: x0 });
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

    };

    let a1_despejado;
    let a2_despejado;
    let a3_despejado;

    let b1_despejado;
    let b2_despejado;
    let b3_despejado;
   
    let c1_despejado;
    let c2_despejado;
    let c4_despejado;

    let x0 = 0;
    
    const verificarConst = () =>{        
        //SI el valor x1 es igual es solo x o -x
        if (a1 === 'x' || a1 === '-x') {
            setResult("Diagonal NO dominante")
            // despejar()
        }
        //SI el valor x1 es con una constante
        else{
            let a2_const_extraida ;            
            let a3_const_extraida ;            
            
            let constante_extraida = a1.match(/\d+/); //aca solo el numero
            
            a2_const_extraida = a2.match(/-?\d+/); //aca extraemos con su signo mas con el match
            a3_const_extraida = a3.match(/-?\d+/);
            
            a2_despejado = (a2_const_extraida * (-1));
            a3_despejado = (a3_const_extraida * (-1));
            
            let resultadoA1 = (parseFloat(a4) + parseFloat(a2_despejado) * parseFloat(x0) + parseFloat(a3_despejado) * parseFloat(x0) )/ parseFloat(constante_extraida)
            
            setResult(resultadoA1);
        }
    }

    const resolversegunda = () =>{
        if (b2 === 'x' || b2 === '-x') {
            setResult("Diagonal NO dominante")
            // despejar()
        }
        //SI el valor x1 es con una constante
        else{

            let constante_extraida_b2 = b2.match(/\d+/); //aca solo el numero
            
            let b1_const_extraida = b1.match(/-?\d+/); //aca extraemos con su signo mas con el match
            let b3_const_extraida = b3.match(/-?\d+/);
            
            b1_despejado = (b1_const_extraida * (-1));
            b3_despejado = (b3_const_extraida * (-1));
            
            let resultadoB2 = (parseFloat(b4) + parseFloat(b1_despejado) * parseFloat(x0) + parseFloat(b3_despejado) * parseFloat(x0) )/ parseFloat(constante_extraida_b2)
            
            setResult1(resultadoB2);
        }
    }

    const resolvertercera = () =>{
        if (c3 === 'x' || c3 === '-x') {
            setResult("Diagonal NO dominante")
            // despejar()
        }
        //SI el valor x1 es con una constante
        else{

            let constante_extraida_c3 = c3.match(/\d+(\.\d+)?/) //aca solo el numero
            
            let c1_const_extraida = c1.match(/-?\d+(\.\d+)?/) //aca extraemos con su signo mas con el match
            let c2_const_extraida = c2.match(/-?\d+(\.\d+)?/);
            
            c4_despejado = (c4 * (-1));
            console.log(c4_despejado);
            console.log(constante_extraida_c3);
            
            let resultadoc3 = (parseFloat(c4) + parseFloat(c1_const_extraida) * parseFloat(x0) + parseFloat(c2_const_extraida) * parseFloat(x0) )/ parseFloat(constante_extraida_c3)
            
            setResult2(resultadoc3);
        }
    }




    const despejar = () =>{
        // Cambiamos de signo los valores que se mueven
        a2_despejado = (a2 * (-1));
        a3_despejado = (a3 * (-1));
        
        b1_despejado = parseFloat(a4) + parseFloat(a3_despejado) + parseFloat(a2_despejado); 
        
        if(a1 === "-x") {
            setA1Despejado(a1Despejado * (-1)); 
        }
        else{
            setA1Despejado ( b1_despejado);
        }

    }

    return (
        <div className='fullscreen-container'>

            <div className='container-padre_jacobi'>
                <div className="container_jacobi">
                    
                    <h1 className='title-newthon'>Jacobi</h1>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                        
                        <label htmlFor="function" className="label-function">Matriz :</label>
                        <div className="parent">

                            <input type="text" className="input1" placeholder='a1' onChange={(e) => setA1(e.target.value)} />

                            <input type="text" className="input2" placeholder='a2' onChange={(e) => setA2(e.target.value)} />
                            <input type="text" className="input3" placeholder='a3' onChange={(e) => setA3(e.target.value)}/>
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input4" placeholder='a4' onChange={(e) => setA4(e.target.value)}/>
                            <input type="text" className="input5" placeholder='b1' onChange={(e) => setB1(e.target.value)}/>
                            <input type="text" className="input6" placeholder='b2' onChange={(e) => setB2(e.target.value)}/>
                            <input type="text" className="input7" placeholder='b3' onChange={(e) => setB3(e.target.value)}/>
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input8" placeholder='b4' onChange={(e) => setB4(e.target.value)}/>
                            <input type="text" className="input9" placeholder='c1' onChange={(e) => setC1(e.target.value)}/>
                            <input type="text" className="input10" placeholder='c2'onChange={(e) => setC2(e.target.value)} />
                            <input type="text" className="input10" placeholder='c3' onChange={(e) => setC3(e.target.value)} />
                            <h3 className='igualesMatriz'> = </h3>
                            <input type="text" className="input12" placeholder='c4' onChange={(e) => setC4(e.target.value)}/>
                        </div>
    
                        {/* LEER LA FUNCION QUE USABAMOS EN NEWTON */}
                        {/* <input
                            type="text"
                            id="function"
                            className="input-function"
                            value={funcion}
                            onChange={(e) => setFuncion(e.target.value)}
                            placeholder="Ej: x^5 - x - 1"
                        /> */}

                        <label htmlFor="initialGuess" className="label-initialGuess">Valor inicial (x0):</label>
                        <input
                            type="number"
                            id="initialGuess"
                            className="input-initialGuess"
                            value={valorInicial}
                            onChange={(e) => setValorInicial(e.target.value)}
                        />

                        <label htmlFor="tolerance" className="label-tolerance">Error aprox. a buscar:</label>
                        <input
                            type="number"
                            id="tolerance"
                            className="input-tolerance"
                            value={margenError}
                            onChange={(e) => setMargenError(e.target.value)}
                            step="0.00001"
                        />

                        <label htmlFor="iterations" className="label-iterations">Máx Iteraciones:</label>
                        <input
                            type="number"
                            id="iterations"
                            className="input-iterations"
                            value={iteraciones}
                            onChange={(e) => setIteraciones(e.target.value)}
                        />

                        <button type="button" onClick={verificarConst}>Calcular</button>
                        <button type="button" onClick={resolversegunda}>Calcular</button>
                        <button type="button" onClick={resolvertercera}>Calcular</button>
                    </form>
                </div>

                <div className='container2'>
                    {/* <h3 className='resultado_personal'>{a1}</h3> */}
                    {/* <h3 className='resultado_personal'>{a1Despejado}</h3> */}
                    <h3 className='resultado_personal'>  {result} </h3>
                    <h3 className='resultado_personal'>|{result1}| </h3>
                    <h3 className='resultado_personal'> {result2}  </h3>
                </div>
            </div>
        </div>

    );
};

export default Jacobi;
