import React from 'react';

import './styles.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick(event) {
    setModalPhoto(photo);
  }

  return (
    <li className='photo-item' onClick={handleClick}>
      <img src={photo.url} alt={photo.title} />
      <span className='visualizacao'>12</span>
    </li>
  );
};

export default FeedPhotosItem;
