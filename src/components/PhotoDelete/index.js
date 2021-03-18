import React from 'react';
import useFetch from '../../hooks/useFetch';

import './styles.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const token = localStorage.getItem('token');
    const confirm = window.confirm('Deseja deletar essa foto?');

    if (confirm) {
      const { response } = await request({
        method: 'delete',
        url: `/posts/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className='btn-delete'>
          Delete
        </button>
      ) : (
        <button onClick={handleClick} className='btn-delete'>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
