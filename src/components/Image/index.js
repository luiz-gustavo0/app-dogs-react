import React, { useState } from 'react';

import './styles.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className='cp-wrapper'>
      {skeleton && <div className='skeleton'></div>}
      <img onLoad={handleLoad} className='cp-img' alt={alt} {...props} />
    </div>
  );
};

export default Image;
