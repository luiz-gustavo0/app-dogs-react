import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import Input from '../Input';
import Button from '../Button';
import Error from '../Error';
import { UserContext } from '../../context/UserContext';

import useFetch from '../../hooks/useFetch';

const LoginCreate = () => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { response } = await request({
      method: 'post',
      url: '/users',
      data: {
        name: name.value,
        email: email.value,
        password: password.value,
      },
    });

    if (!response) {
      return;
    }

    userLogin(email.value, password.value);
  }

  return (
    <section className='anime-left'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='name' {...name} />
        <Input label='Eamil' type='email' name='email' {...email} />
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
