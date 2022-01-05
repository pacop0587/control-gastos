import { useState,useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({presupuesto, gastos}) => {
    //Hooks state
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0)

    //Calcular el saldo disponible
    useEffect(() => {
        const totalGastos = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastos;

        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        
        setDisponible(totalDisponible);
        setGastado(totalGastos);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1500);
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
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: '#3B82F6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
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
