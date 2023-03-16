import { useState } from 'react';
import Modal from './Modal';
import Form from './Form';

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }

const Card = (props) => {
  
      const [isOpen, setIsOpen] = useState(false)

      const modalHandler = (evetn) => {
        setIsOpen(true)
      }
    
      const modalClose = (event) => {
        setIsOpen(false)
      }

    return (
        <div key={props.location._id} className="card">
            <h3 className='location-name'>{props.location.name}</h3>
            <img className='location-img' src={props.location.img} alt="location" />
            <p>City: {props.location.city}</p>
            <h2>Available Spaces: {props.location.spaces}</h2>
            <p>Square Meters: {props.location.sqm}</p>
            <button onClick={modalHandler}>Request Information</button>
      
            {isOpen && 
                <div style={BUTTON_WRAPPER_STYLES}>
                    <div>
                        <Modal open={isOpen} onClose={modalClose} onAdd={props.onAdd}>
                            <Form img={props.location.img} name={props.location.name} city={props.location.city} onClose={modalClose}  onAdd={props.onAdd}/>
                        </Modal>
                    </div>
                </div>
            }
        </div>  
    )
}

export default Card