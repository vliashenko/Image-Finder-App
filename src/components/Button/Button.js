import React from 'react';
import PropTypes from "prop-types";
import styles from "./Button.module.css"

const Button = ({ onClick, isLoading }) => {
    return (
        <button 
            disabled={isLoading}
            type='button'
            onClick={onClick}
            className={styles.Button}
        >
            Load More
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default Button;