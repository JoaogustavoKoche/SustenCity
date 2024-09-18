// src/components/Comments.js
import React, { useState, useEffect } from 'react';
import './Comments.css'; // Para estilização específica do componente de comentários

const Comments = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [error, setError] = useState('');

  // Carregar comentários do localStorage quando o componente é montado
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setCommentsList(storedComments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !comment) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const newComment = { name, comment };
    const updatedCommentsList = [...commentsList, newComment];
    setCommentsList(updatedCommentsList);
    
    // Salvar comentários no localStorage
    localStorage.setItem('comments', JSON.stringify(updatedCommentsList));

    setName('');
    setComment('');
    setError('');
  };

  return (
    <div className="comments-container">
      <h3>Deixe seu Comentário</h3>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comentário:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="comments-list">
        {commentsList.length > 0 && <h4>Comentários:</h4>}
        <ul>
          {commentsList.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong>: {item.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
