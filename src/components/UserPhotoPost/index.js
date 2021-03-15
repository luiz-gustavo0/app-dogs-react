import React, { useEffect, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import Error from '../Error';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';

import './styles.css';
import { useHistory } from 'react-router';

const UserPhotoPost = () => {
  const [file, setFile] = useState({});

  const title = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const history = useHistory();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    if (data) history.push('/conta');
  }, [data, history]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);
    formData.append('file', file.url);

    const token = window.localStorage.getItem('token');

    const { response } = await request({
      method: 'post',
      url: '/posts',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    });

    console.log(response);
  }

  function handleFileChange({ target }) {
    setFile({
      url: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  return (
    <section className='photo-post anime-left'>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='title' {...title} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />
        <input type='file' name='file' id='file' onChange={handleFileChange} />
        {loading ? <Button>Carregando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <div>
        {file.preview && (
          <div
            className='preview'
            style={{ background: `url(${file.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
