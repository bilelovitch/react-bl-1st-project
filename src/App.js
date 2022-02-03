import React from 'react';
import './style.css';

import React, { Fragment } from 'react';
import ArticleProvider from './context/articleContext';
import Articles from './Articles';
import AddArticle from './components/AddArticle';

/* */

export default function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
}

/*
export default function App() {
  return (
    <Fragment>
      <AddArticle />
      <Articles />
    </Fragment>
  )
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
*/
