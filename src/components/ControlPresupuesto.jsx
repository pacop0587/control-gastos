import { useState,useEffect } from "react"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({presupuesto, gastos}) => {
    //Hooks state
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastos = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastos;
        
        setDisponible(totalDisponible);
        setGastado(totalGastos);
    }, [gastos])
    
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
                <CircularProgressbar

                />
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatoCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatoCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatoCantidad(gastado)}
                </p>
            </div>
            
        </div>
    )
}

export default ControlPresupuesto
