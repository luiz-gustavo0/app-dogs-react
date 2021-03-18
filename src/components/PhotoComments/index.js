import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

import './styles.css';

const PhotoComments = ({ id, comments, author }) => {
  const [comentarios, setComentarios] = useState(() => comments);
  const { login } = useContext(UserContext);
  const commentSection = useRef(null);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentSection} className='comments'>
        {comentarios.map((comment) => (
          <li key={comment.id}>
            <b>{author.name}: </b>
            <span>{comment.description}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setComments={setComentarios} />}
    </>
  );
};

export default PhotoComments;
