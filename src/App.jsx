import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
	//Hooks state
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);

	//Funcion que muestra modal al dar click al icono
	const handleModal = () =>{
		setModal(true)
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
			{modal && <Modal setModal={setModal}/>}
	  </div>

  )
}

export default App
