import React, { useState, useEffect, useRef } from 'react'

/* Clase 2: Aparte de lo visto en la clase 1, useRef también nos
  permite guardar información mutable podemos modificar el valor de la propiedad
  current en cualquier momento, y no va renderizar nada nuevo */
export const Ejemplo = () => {

    const[numeroSaludo, setNumeroSaludo] = useState(0);
    const saludosEnCola =  useRef(numeroSaludo);


    /* Vamos a simular que los saludos (envios), son elementos que se ponen en cola
       para ello vamos a usar useEfect para que cada vez que se modifique el estado
       numeroSaludo se ejecute la función setTimeOut que pondra el elemento en cola
       buscamos que aunque haya una cola con cierto retraso, se nos muestre el
       dato actualizado, la referncia cambia en todo momentoporque es un valor mutable
        y cada 2 segundos se nos mostrará el valor actualizado */

       useEffect(() => {
        saludosEnCola.current = numeroSaludo;
        setTimeout(()=>{
            console.log("Saludos en cola: " + saludosEnCola.current);
        }, 2000) 
       }, [numeroSaludo])
       


    const enviarSaludo = e => {
        setNumeroSaludo(numeroSaludo + 1);
    }

  return (
    <div>
        <h1>Ejemplo con useRef</h1>

        <h2>Saludo enviados: {numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar saludo</button>
        <hr/>
    </div>
  )
}
