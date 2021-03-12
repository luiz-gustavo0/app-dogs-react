import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../context/UserContext';

const LoginForm = () => {
  const { url } = useRouteMatch();
  const email = useForm('email');
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <section className='anime-left'>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      <Link to={`${url}/criar`}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
