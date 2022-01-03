import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    
    //Dar formato de moneda a cantidad del presupuesto
    const formatoCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica aqui</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatoCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatoCantidad(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatoCantidad(0)}
                </p>
            </div>
            
        </div>
    )
}

export default ControlPresupuesto
