import React from 'react'; 

const Cita = ({Cita,eliminarCita}) => { 
    return(
        <div className="card mb-4">
            <div className="card-body">
            <p className="card-text">Nombre: {cita.nombre}</p>
            <p className="card-text">Apellido: {cita.apellido}</p>
            <button
            className="btn btn-secondary btn-block"
            onClick={()=>eliminarCita(cita.nombre)}
            type = "button"
            > Eliminar </button>

            </div>
         </div>
    );
}

export default Cita;