import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import Input from '../Input';
import Button from '../Button';
import { UserContext } from '../../context/UserContext';

import api from '../../services/api';

const LoginCreate = () => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/users', {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (response.status === 201) {
      userLogin(email.value, password.value);
      console.log(response.data);
    }
  }

  return (
    <section className='anime-left'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='name' {...name} />
        <Input label='Eamil' type='email' name='email' {...email} />
        <Input label='Password' type='password' name='password' {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
