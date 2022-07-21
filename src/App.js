import React, { useState, useEffect } from 'react';
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from "./components/Loader/Loader";
import Button from './components/Button/Button';
import * as API from "./services/pixabyAPI";
import { ToastContainer } from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./App.module.css";

const App = () => {

  const [ query, setQuery ] = useState("");
  const [ page, setPage ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ total, setTotal ] = useState(null);
  const [ items, setItems ] = useState([]);
  const [ error ] = useState(null);

  useEffect(() => {
    if(query === "") {
      return;
    }
      fetchData(query, page)
  },[page, query])

  const fetchData = async (query, page) => {
    setIsLoading( true )
    try {
      const data = await API.pixabyAPI(query, page)
          setItems(prev => [...prev, ...data.hits]);
          setTotal(data.total);
          setIsLoading(false);
    } catch (error) {
      setIsLoading( false )
      console.log(error);
    }
  }

  const onLoadMoreHandler = () => {
    setPage(prev => prev + 1)
  };

  const handleSubmit = (value) => {
    setQuery(value.query)
  };

  const onNewSearchReset = (query) => {
    setQuery(query);
    setItems([]);
    setPage(1);
  }

  const loading = isLoading && <Loader/>;
  const button = items.length > 0 && total > items.length ? <Button isLoading={isLoading} onClick={onLoadMoreHandler}/> : null;
  const view = !error && <ImageGallery items={items}/>;
  return (
    <div className={styles.App}>
        <Searchbar onReset={onNewSearchReset} onSubmit={handleSubmit}/>
        {view}
        {loading}
        {button}
        <ToastContainer/>
      </div>
  )
}

export default App;
