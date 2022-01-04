import React from 'react'

const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria, id, fecha} = gasto

    //Funcion que da formato a la fecha del objeto gasto
    const formatearFecha = (fecha) =>{
        const fechaNueva = new Date(fecha);
        const opciones = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }

        return fechaNueva.toLocaleDateString('es-ES', opciones);
    }

    return (
        <div className='gasto sombra'>
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className='fecha-gasto'>
                    Agregado el: {''}
                    <span>{formatearFecha(fecha)}</span>
                </p>
                </div>
            </div>
            <p className='cantidad-gasto'>${cantidad}</p>
        </div>
    )
}

export default Gasto
