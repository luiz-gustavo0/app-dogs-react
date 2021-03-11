import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const { url } = useRouteMatch();
  const email = useForm('email');
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });

    console.log(response);

    const json = await response.json();

    console.log(json);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to={`${url}/criar`}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
