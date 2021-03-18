import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Image from '../Image';
import PhotoComments from '../PhotoComments';
import PhotoDelete from '../PhotoDelete';

import './styles.css';

const PhotoContent = ({ data }) => {
  const { id, title, idade, peso, url, coments, user } = data;

  const userLogged = useContext(UserContext);

  console.log('userLogged', userLogged);

  return (
    <div className='photo-content'>
      <div className='photo-content-img'>
        <Image src={url} alt={title} />
      </div>
      <div className='details'>
        <div>
          <p className='author'>
            {userLogged.data && userLogged.data.name === user.name ? (
              <PhotoDelete id={id} />
            ) : (
              <Link to={`/perfil/${user.name}`}>@{user.name}</Link>
            )}

            <span className='photo-content-visualizacoes'>12</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${id}`}>{title}</Link>
          </h1>
          <ul className='photo-content-atributes'>
            <li>{peso} kg</li>
            <li>{idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments id={id} comments={coments} author={user} />
    </div>
  );
};

export default PhotoContent;
