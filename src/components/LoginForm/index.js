import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';

const LoginForm = () => {
  const { url } = useRouteMatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    console.log(response);

    const json = await response.json();

    console.log(json);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Email' type='email' name='email' />
        <Input label='Senha' type='password' name='password' />

        <Button>Entrar</Button>
      </form>
      <Link to={`${url}/criar`}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
