// Modal.jsx
import React from 'react';
import './Modal.css'; // Assume CSS for styling the modal
const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={event => event.stopPropagation()}>
                {children}
                <span className="close" onClick={onClose}>&times;</span>
            </div>
        </div>
    );
};
export default Modal;