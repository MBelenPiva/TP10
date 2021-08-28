import React from 'react'; 
import Cita from './Cita'; 

const ListadoCitas = ({listadoCitas, eliminarCita}) => { 
    return(
        <>
        <h1>Listado Citas </h1>
        {listadoCitas.map(cita=>(
            <Cita
            key = {cita.nombre}
            cita={cita}
            eliminarCita ={liminarCita}

            />
        ))}


        </>
    );
}

export default ListadoCitas;