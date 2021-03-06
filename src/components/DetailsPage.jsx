import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const DetailsPage = function () {
  const { asin } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const recommendedBook = axios.get(`${process.env.REACT_APP_ALL_BUSINESS_BOOKS_URL}?asin=${asin}`);

    recommendedBook.then((response) => {
      console.log('response');
      console.log(response);

      setDetails(
        {
          title: response.data.business_books[0].title,
          description: response.data.business_books[0].description,
        },
      );
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="details_container">
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div className="to_amazon">

              <a href={`https://amazon.co.jp/dp/${asin}`}>
                <Card style={{
                  width: '125px', height: '160px', margin: '10px', textAlign: 'center', backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
                }}
                />
              </a>
              <div className="to_amazon_button">
                <a href={`https://amazon.co.jp/dp/${asin}`}>Amazonで見る</a>
              </div>
            </div>

            <div className="details_title">
              <h2>
                { details.title }
              </h2>
            </div>

            <div className="details_description">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  { details.description }
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
