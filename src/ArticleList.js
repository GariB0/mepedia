import React from 'react';
import articles from './articles';

function ArticleList() {
  return (
    <div>
      <h1>지식 블로그</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
