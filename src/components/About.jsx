import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Footer from './Footer';
import Header from './Header';

const About = function () {
  return (
    <div className="container">
      <Header />

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="about_container">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h2>このサイトについて</h2>
                このサイトはおすすめのビジネス書をまとめたサイトです。
                ITエンジニアの視点から、未来予測本をメインにまとめたサイトになっています。
                <br />
                <br />
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Footer />
    </div>
  );
};

export default About;
