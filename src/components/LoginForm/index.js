import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../context/UserContext';
import Error from '../Error';

import './styles.css';
import '../Button/styles.css';

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
      <h1 className='title'>Login</h1>
      <form action='' onSubmit={handleSubmit} className='form-login'>
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link to={`${url}/perdeu`} className='btn-perdeu-senha'>
        Perdeu a senha?
      </Link>
      <div className='cadastro'>
        <h2 className='subtitulo'>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className='button' to={`${url}/criar`}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
