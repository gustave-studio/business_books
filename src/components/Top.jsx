import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import EditorialDepartmentRecommendationsBox from './EditorialDepartmentRecommendationsBox';

const Top = function () {
  const [businessBooks, setbusinessBooks] = useState([]);
  const [futurePredictionBooks, setFuturePredictionBooks] = useState([]);

  useEffect(() => {
    const businessBooksData = axios.get(process.env.REACT_APP_BUSINESS_BOOKS_URL);
    const futurePredictionBooksData = axios.get(process.env.REACT_APP_FUTURE_PREDICTION_URL);
    // const businessBooksData = axios.get('https://api.gustave-studio.com/api/business_books?category=business');
    console.log('----rankingData');
    console.log(businessBooksData);

    businessBooksData.then((response) => {
      setbusinessBooks(response.data.business_books.map((item) => ({ title: item.title, description: item.description, asin: item.asin })));
    });

    futurePredictionBooksData.then((response) => {
      setFuturePredictionBooks(response.data.business_books.map((item) => ({ title: item.title, description: item.description, asin: item.asin })));
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
              未来予測本
            </h1>
          </div>
          <div className="ranking_container">
            <h2>ビジネス書のおすすめ</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { futurePredictionBooks.length ? <EditorialDepartmentRecommendationsBox rankingData={futurePredictionBooks} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
          </div>
          <div className="ranking_header">
            <h1>
              編集部のおすすめ
            </h1>
          </div>
          <div className="ranking_container">
            <h2>ビジネス書のおすすめ</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { businessBooks.length ? <EditorialDepartmentRecommendationsBox rankingData={businessBooks} /> : <FaSpinner icon="spinner" className="spinner" />}
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
