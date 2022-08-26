import React, { useRef } from 'react'

/* Clase 1: useRef hace una referencia con un elemento del DOM devuelve un objeto
   de referencia mutable con una propiedad current con un valor dentro
   este objeto va ha estar persistiendo durante el ciclo de vida del componente
   es decir, solo mientras el componente este montado va a existir referencia */ 

export const Formulario = () => {

    //1.
    const nombre = useRef();
    const apellido = useRef();
    const email = useRef();
    //2. y 3.
    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault();
        // 1. : con useRef podemos capturar los value de un form. Hay que añadir atributo ref
        console.log(nombre.current.value);
        console.log(apellido.current.value);
        console.log(email.current.value);

        //mi caja (useRef en un div), le añadimos atributo ref,

        /* 2. : añadimos nueva clase al div (.classList.add(""))
          para acceder mas facil desestructuramos y renombramos la propiedad current (:)
          asi nos ahorramos el tener que acceder asi todo el tiempo: miCaja.current.;*/

          let { current: caja } = miCaja;
          caja.classList.add("fondo-verde");

          /* 3. : cambiamos contenido del div con (innerHTML) */
          caja.innerHTML = "Formulario enviado!";

    }

  return (
    <div>
        <h1>Formulario</h1>

        <div className='mi-caja' ref={miCaja}>
            <h2>Pruebas con useRef</h2>
        </div>
        
        <form onSubmit={mostrar}>
            {/* Hay que añadir atributo ref */}
            <input type='text' placeholder='Nombre' ref={nombre}/><br/>
            <input type='text' placeholder='Apellidos' ref={apellido}/><br/>
            <input type='text' placeholder='Correo electronico' ref={email}/><br/>
            <input type='submit' value='Enviar'/><br/>
        </form>

        <button onClick={() => nombre.current.select()}>Empezar a rellenar el form</button>

    </div>
  )
}
