import { useState, useEffect } from "react";
import Alerta from "./Alerta";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const[error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0){
      const {nombre, propietario, email, fecha, sintomas} = paciente
      setNombre(nombre)
      setPropietario(propietario)
      setEmail(email)
      setFecha(fecha)
      setSintomas(sintomas)
    }
  }, [paciente]);
  

  const generarId = () => {
    const randon = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return randon + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }else{
      setError(false)
    }
    
    const objPacientes = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id){
      //Editando registro
      objPacientes.id = paciente.id
      const pacientesAct = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPacientes : pacienteState)

      setPacientes(pacientesAct)
      setPaciente({})
    
    }else{
      //Creando un nuevo registro
      objPacientes.id = generarId();
       setPacientes([...pacientes, objPacientes]);
    }

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center text-gray-700">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center mb-10">Añadir Pacientes y {' '}
        <span className="text-indigo-600 font-bold">
          Administrarlos
        </span>
      </p>
      <form 
      onSubmit={handleSubmit}
      className=" bg-white shadow-md rounded-lg py-10 px-5 " action="">
        {error &&
          <Alerta><p>Todos los campos deben ir llenos</p></Alerta>
        }
        <div className=" mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota">Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario">Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email">E-mail de contacto
          </label>
          <input
            id="email"
            type="email"
            placeholder="Tu E-mail"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta">Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas">Síntimas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
        hover:bg-indigo-700 cursor-pointer transition-all"
          type="submit"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario
