import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import RecommendationsBox from './RecommendationsBox';

const Top = function () {
  const [businessBooks, setbusinessBooks] = useState([]);
  const [futurePredictionBooks, setFuturePredictionBooks] = useState([]);
  const [dxFuturePredictionBooks, setDxFuturePredictionBooks] = useState([]);
  const [medicalFuturePredictionBooks, setMedicalFuturePredictionBooks] = useState([]);

  useEffect(() => {
    const businessBooksData = axios.get(process.env.REACT_APP_BUSINESS_BOOKS_URL);
    const futurePredictionBooksData = axios.get(process.env.REACT_APP_FUTURE_PREDICTION_URL);
    const dxFuturePredictionBooksData = axios.get(process.env.REACT_APP_DX_FUTURE_PREDICTION_URL);
    const medicalFuturePredictionBooksData = axios.get(process.env.REACT_APP_MEDICAL_FUTURE_PREDICTION_URL);

    businessBooksData.then((response) => {
      setbusinessBooks(response.data.business_books.map((item) => ({ title: item.title, description: item.description, asin: item.asin })));
    });

    futurePredictionBooksData.then((response) => {
      setFuturePredictionBooks(response.data.business_books.map((item) => ({ title: item.title, description: item.description, asin: item.asin })));
    });

    dxFuturePredictionBooksData.then((response) => {
      setDxFuturePredictionBooks(response.data.business_books.map((item) => ({ title: item.title, description: item.description, asin: item.asin })));
    });

    medicalFuturePredictionBooksData.then((response) => {
      setMedicalFuturePredictionBooks(response.data.business_books.map((item) => ({ title: item.title, description: item.description, asin: item.asin })));
    });
  }, []);

  return (

    <div className="container">
      <Header />

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="ranking_header">
            <h1>
              特集 未来予測
            </h1>
          </div>
          <div className="ranking_container">
            <h2>未来予測全般</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { futurePredictionBooks.length ? <RecommendationsBox rankingData={futurePredictionBooks} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <hr />
            <h2>DXの未来予測</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { dxFuturePredictionBooks.length ? <RecommendationsBox rankingData={dxFuturePredictionBooks} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <h2>医療の未来予測</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { medicalFuturePredictionBooks.length ? <RecommendationsBox rankingData={medicalFuturePredictionBooks} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
          </div>
          <div className="ranking_header">
            <h1>
              おすすめビジネス書一覧
            </h1>
          </div>
          <div className="ranking_container">
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { businessBooks.length ? <RecommendationsBox rankingData={businessBooks} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Footer />
    </div>
  );
};

export default Top;
