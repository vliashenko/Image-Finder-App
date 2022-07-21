import React from 'react';
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ url, onClose }) => {
    return createPortal (
        <div 
            className={styles.Overlay}
            onClick={onClose}    
        >
            <div className={styles.Modal}>
                <img src={url} alt="pixelby" />
            </div>
        </div>, modalRoot    
    );
};

Modal.proptypes = {
    url: PropTypes.string.isRequired,
    onclose: PropTypes.func.isRequired
}

export default Modal;