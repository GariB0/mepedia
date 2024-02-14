import React from 'react';
import articles from './articles';

function Article({ match }) {
  const article = articles.find(article => article.id === parseInt(match.params.id));

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
