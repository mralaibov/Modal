import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLE = {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '50%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding:'10px 10px 100px 10px',
    zIndex: 1000,
    background: '#FFF',
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,.7)',
}


const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return ReactDOM.createPortal(
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLE}>
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Modal;