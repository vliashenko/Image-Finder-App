import React from 'react';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
    return (
        <ul className={styles.ImageGallery}>
            {items.map( item => {
                const { id, webformatURL, largeImageURL } = item;
                return (
                    <ImageGalleryItem 
                        key={id} 
                        webformatURL={webformatURL} 
                        largeImageURL={largeImageURL} 
                    />
                )
            })}
        </ul>
    );
};

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired,
}

export default ImageGallery;