import React, { createContext, useState } from 'react';
import { reducer } from './reducer';

export const ArticleContext = createContext();
const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useState([
    { id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
    { id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' },
  ]);
  /*
  //block remplacé par :: { reducer } from "./reducer"

  const saveArticle = (article) => {
    const newArticle = {
      id: Math.random(), // not really unique but it's just an example
      title: article.title,
      body: article.body,
    };
    setArticles([...articles, newArticle]);
  };
*/
  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
