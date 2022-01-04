import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
	//Hooks state
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false)

	//Funcion que muestra modal y da animacion al dar click al icono
	const handleModal = () =>{
		setModal(true)

		setTimeout( () =>{
			setAnimarModal(true)
		}, 500)
	}

  return (
	  <div>
	  	<Header
			presupuesto = {presupuesto}
			setPresupuesto = {setPresupuesto}
			isValidPresupuesto = {isValidPresupuesto} 
			setIsValidPresupuesto = {setIsValidPresupuesto}
		  />
		  {isValidPresupuesto && (
		  		<div className='nuevo-gasto'>
					<img 
					src={IconoNuevoGasto} 
					alt="icono nuevo gasto"
					onClick={handleModal} />
				</div>
			)}
			{modal && <Modal 
						setModal={setModal}
						animarModal={animarModal}
						setAnimarModal = {setAnimarModal}
						/>}
	  </div>

  )
}

export default App
