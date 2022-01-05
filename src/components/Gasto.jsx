import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria, id, fecha} = gasto

    const diccionarioGastos = {
        ahorro: IconoAhorro,
        comida: IconoComida,
        casa: IconoCasa,
        gastos: IconoGastos,
        ocio: IconoOcio,
        salud: IconoSalud,
        suscripciones: IconoSuscripciones
    }

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

    const leadingActions = () =>(
       
        <LeadingActions>
            <SwipeAction onClick={() => console.log('editar...')}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () =>(

        <TrailingActions>
            <SwipeAction onClick={() => console.log('eliminar...')}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions = {leadingActions()}
                trailingActions = {trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                        <img src={diccionarioGastos[categoria]} alt=""
                        
                        />
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
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
