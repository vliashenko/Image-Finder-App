import React from 'react';
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = ({ onSubmit, onReset }) => {

    const handleSubmit = ( values, _ ) => {
        if(values.query.trim() === ""){
            toast.warn("You should write at least something! :)", {
                position: toast.POSITION.TOP_RIGHT
            })
            return;
        }
        onReset(values.query)
        onSubmit(values)
    }

    return (
        <Formik     
            initialValues={{query: ""}}
            onSubmit={ handleSubmit }
        >
            <Form className={styles.SearchForm}>
                <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}>
                        <FaSearch size={18}/>   
                    </span>
                </button>

                <Field
                    className={styles.SearchFormInput}
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Form>
        </Formik>
    );
};

SearchForm.protoTypes = {
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}

export default SearchForm;