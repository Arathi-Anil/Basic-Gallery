import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose }) => {
  console.log("Rendering Modal with src:", src);
  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={src} alt="" />
    </div>
  );
};

export default Modal;
