import React, { useState } from 'react';
import Article from './components/Article';
//import { ArticleContext } from './context/articleContext';
import './style.css';

/**/
const Articles = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra 1' },
    { id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra 2' },
    { id: 3, title: 'post 3', body: 'Quisque cursus, metus vitae pharetra 3' },
  ]);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

/*
const Articles = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};
*/
export default Articles;
