import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { nanoid } from 'nanoid';

function App() {
	//Hooks state
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false)
	const [gastos, setGastos] = useState([]);

	//Funcion que muestra modal y da animacion al dar click al icono
	const handleModal = () =>{
		setModal(true)

		setTimeout( () =>{
			setAnimarModal(true)
		}, 500)
	}

	//Funcion para guadar el gasto
	const guardarGasto = (gasto) =>{
		gasto.id = nanoid();
		gasto.fecha = Date.now();
		setGastos([...gastos, gasto]);

		setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
	}

  return (
	  <div className={modal ? 'fijar' : ''}>
	  	<Header
			presupuesto = {presupuesto}
			setPresupuesto = {setPresupuesto}
			isValidPresupuesto = {isValidPresupuesto} 
			setIsValidPresupuesto = {setIsValidPresupuesto}
			gastos = {gastos}
		  />
		  {isValidPresupuesto && (
			    <>
					<main>
						<ListadoGastos
							gastos = {gastos}
						/>
					</main>
					<div className='nuevo-gasto'>
						<img 
						src={IconoNuevoGasto} 
						alt="icono nuevo gasto"
						onClick={handleModal} />
					</div>
				</>
			)}
			{modal && <Modal 
						setModal={setModal}
						animarModal={animarModal}
						setAnimarModal = {setAnimarModal}
						guardarGasto = {guardarGasto}
						/>}
	  </div>

  )
}

export default App
