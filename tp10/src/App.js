import logo from './logo.svg';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';
import Error from '.componentes/Error';
import ListadoCitas from './componentes/ListadoCitas';
import './App.css';

function App() {

  const [ListadoCitas, guardarListadoCitas] = useState([])

  const crearCita = (cita) => {
    guardarListadoCitas([
      ...listadoCitas,
      cita
    ]);
  }

  const eliminarCita = (nombre) => {
    guardarListadoCitas([
      listadoCitas.filter(cita => cita.nombre!==nombre)
    ]);
  }

  return (
    <Fragment> 
      <div className = "container">
      <div className = "row">
         <div className = "col-12 text-center">
        <Header title = "Trabajo tp10" subtitulo = "parrafo" /> 
        </div>
     </div>
     <div className = "row">
         <div className = "col-6">
        <Formulario
        crearCita = {crearCita}
        />
        </div>
        <div className = "col-6">
        <ListadoCitas
        listadoCitas = {listadoCitas}
        eliminarCita
        />
        </div>
    </div>
  </div>
 </Fragment>
    
  );
}

export default App;
