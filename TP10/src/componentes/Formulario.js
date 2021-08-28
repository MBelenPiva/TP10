import React, { useState } from 'react'; 

const Formulario = ({crearCita}) => { 

    const [cita, guardarCita] = useState({
        nombre:'',
        apellido: ''
    });

    const [error,guardarError] = useState(false);

    const {nombre, apellido} = cita;

    const OnChange = e => {
        guardarCita({
            ...cita,
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

        crearCita(cita);

        guardarCita({
            nombre:'',
            apellido: ''
        })

    }


    return (
        <>
        <h1> Formulario </h1>
        {error ? <p className="alert alert-danger mt-4"></p>:null}
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
                value = "guardar cita"
                class = "btn btn-block-btn-secondary"
                />
                </div>


                
            </form>

        </>
    )
}

export default Formulario; 