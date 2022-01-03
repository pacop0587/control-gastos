import React from 'react'
import { useState } from 'react/cjs/react.development';
import Mensaje from './Mensaje';


const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    //Hooks useState
    const [mensaje, setMensaje] = useState('');

    const validarFormulario = (e) =>{
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('No es un presupuesto valido')
        }else{
            console.log('Si es un presupuesto valido')
        }
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={validarFormulario} className='formulario'>
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                    className='nuevo-presupuesto'
                    type="text"
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={(e) => setPresupuesto(e.target.value)}
                     />
                </div>
                <input 
                type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
            </form>
        </div>
    )
}

export default NuevoPresupuesto
