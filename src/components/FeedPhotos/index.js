import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';

import './styles.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      await request({
        metthod: 'get',
        url: '/posts',
      });
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className='anime-left feed-photos'>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
