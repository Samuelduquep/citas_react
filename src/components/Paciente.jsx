import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const Paciente = ({ paciente, setPaciente,eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () =>{
        Swal.fire({
            title: 'Estás seguro de eliminar?',
            text: "No puedes revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);  //llamar el prop y enviar el id
                Swal.fire(
                'Eliminado!',
                'Tu cita se ha eliminado.',
                'success'
                )
            }
        })
}

    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className=" font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className=" font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">E-mail:{' '}
                <span className=" font-normal normal-case">{email}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta:{' '}
                <span className=" font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
                <span className=" font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
