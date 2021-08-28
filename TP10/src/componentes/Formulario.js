import React, { useState } from 'react'; 

const Formulario = ({crearPersona}) => { 

    const [persona, guardarPersona] = useState({
        nombre:'',
        apellido: ''
    });

    const [error,guardarError] = useState(false);


    const {nombre, apellido} = persona;

    const OnChange = e => {
        guardarPersona({
            ...persona,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        if (nombre.trim()==='' || apellido.trim()===''){
            guardarError(true);
            return; 
        }

        guardarError(false);

    }


    return (
        <>
        <h1> Formulario </h1>
        <form

         onSubmit = {onSubmit}

        > 

            <div className = "col-4">
                <label> Nombre </label>
                <input 
                type = "text"
                className = "form-control"
                placeholder = "Ingrese Nombre:"
                name = "nombre"
                value = {nombre}
                OnChange = {onchange}
                />

                </div>
                <div className = "col-4">
                <label> Apellido </label>
                <input 
                type = "text"
                className = "form-control"
                placeholder = "Ingrese Apellido:"
                name = "apellido"
                value = {apellido}
                />
                </div>

                <div className = "col-12">
                <input 
                type = "submit"
                value = "guardar persona"
                class = "btn btn-block-btn-secondary"
                />
                </div>


                
            </form>

        </>
    )
}

export default Formulario; 