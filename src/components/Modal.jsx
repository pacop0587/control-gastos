import BtnCerrar from '../img/cerrar.svg'

const Modal = ({setModal}) => {

    //Funcion para cerrar modal
    const handleCerrar = () =>{
        setModal(false);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                src={BtnCerrar} 
                alt="boton cerrar"
                onClick={handleCerrar} />
            </div>
        </div>
    )
}

export default Modal
