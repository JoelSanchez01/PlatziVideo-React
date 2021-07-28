import React from 'react'
import '../assets/styles/Components/CaroulselItem.scss'
import playicon from '../assets/static/play-icon.png'
import plusicon from '../assets/static/plus-icon.png'
import PropTypes from 'prop-types';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playicon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusicon} alt="Plus Icon" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselItem;