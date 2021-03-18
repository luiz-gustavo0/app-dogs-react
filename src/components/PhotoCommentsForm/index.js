import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import Error from '../Error';

import './styles.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');

    const { response } = await request({
      method: 'post',
      url: `/comments/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        description: comment,
      },
    });

    setComment('');
    if (response.status === 201) {
      setComments((comments) => [...comments, response.data]);
    }
  }

  return (
    <form className='form-comment' onSubmit={handleSubmit}>
      <textarea
        className='form-comment-item'
        id='commment'
        name='comment'
        value={comment}
        placeholder='Comente...'
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className='form-comment-btn'>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
