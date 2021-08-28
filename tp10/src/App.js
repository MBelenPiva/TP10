import logo from './logo.svg';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';
import Error from '.componentes/Error';
import ListadoCitas from './componentes/ListadoCitas';
import './App.css';

function App() {

  const [listadoPersonas, guardarListadoPersonas] = useState([])

  const crearPersona = (persona) => {
    guardarListadoPersonas([
      ...listadoPersonas,
      persona
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
        crearPersona = {crearPersona}
        guardarListadoPersonas = {guardarListadoPersonas}
        />
         </div>
    </div>
  </div>
 </Fragment>
    
  );
}

export default App;
