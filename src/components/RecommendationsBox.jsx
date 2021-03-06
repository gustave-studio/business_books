import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const RecommendationsBox = function (props) {
  const { rankingData } = props;

  console.log('----rankingData');
  console.log(rankingData);

  const linkOfImage = (ranking) => {
    if (ranking.description) {
      return (
        `${process.env.REACT_APP_HOST}/details/${ranking.asin}`
      );
    }
    return `https://amazon.co.jp/dp/${ranking.asin}`;
  };

  const awardChecker = (ranking) => {
    if (ranking.description) {
      return (
        <div className="to_details">
          <a href={`${process.env.REACT_APP_HOST}/details/${ranking.asin}`}>
            詳細ページ
          </a>
        </div>
      );
    }
    return '';
  };

  const imageURL = (asin) => {
    if (asin === '4908686092') {
      return 'https://m.media-amazon.com/images/I/517YxDGm7EL._SL160_.jpg';
    }
    return `https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ`;
  };

  return (
    <>
      { rankingData.map((ranking) => (
        <div className="ranking_item">
          <div className="award_container" />
          <a href={linkOfImage(ranking)}>
            <Card style={{
              width: '125px', height: '160px', margin: 'auto', textAlign: 'center', backgroundImage: `url(${imageURL(ranking.asin)})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
            }}
            >
              <CardContent>
                <Typography
                  variant="string"
                  component="div"
                  style={{ fontSize: '18px' }}
                />
              </CardContent>
            </Card>
          </a>
          <p>
            {awardChecker(ranking)}
          </p>
        </div>
      ))}

    </>
  );
};

RecommendationsBox.propTypes = {
  rankingData: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      ranking: PropTypes.number,
      asin: PropTypes.string,
    }),
  ).isRequired,
};

export default RecommendationsBox;
