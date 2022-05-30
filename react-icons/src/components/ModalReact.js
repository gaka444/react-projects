import React,{useState} from 'react';
import Modal from 'react-modal';

function ModalReact(props) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    return (
        <div>
            <button type="button" onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Modal title</h2>
                <p>Modal body</p>
                <button onClick={() => setModalIsOpen(false)}>close</button>
            </Modal>
        </div>
    );
}

export default ModalReact;