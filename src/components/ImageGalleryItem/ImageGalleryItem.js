import React, { useState, useEffect, useCallback } from 'react';
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
    
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    
    const handleKeyDown = useCallback(() => {
        window.addEventListener("keydown", e => {
            if(e.code === "Escape") {
                onModalClose();
            }
        })
    },[])

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () =>  window.removeEventListener("keydown", handleKeyDown)
    },[handleKeyDown])

    const onModalOpen = () => {
        setModalIsOpen( true )
    }

    const onModalClose = () => {
        setModalIsOpen( false )
    }

    return (
        <>
            <li 
                onClick={onModalOpen}
                className={styles.ImageGalleryItem}>
                <img 
                    className={styles.ImageGalleryItemImage} 
                    src={webformatURL} 
                    alt="pixelby" 
                />
            </li>
            {modalIsOpen && <Modal onClose={onModalClose} url={largeImageURL}/>}
        </>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}

export default ImageGalleryItem;