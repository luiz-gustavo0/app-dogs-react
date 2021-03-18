import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import Error from '../Error';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';
import './styles.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getPhoto() {
      await request({
        method: 'get',
        url: `/posts/${photo.id}`,
      });
    }

    getPhoto();
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className='feed-modal' onClick={handleOutsideClick}>
      {error & <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
