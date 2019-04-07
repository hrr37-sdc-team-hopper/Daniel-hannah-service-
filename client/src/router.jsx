import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './index.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/books/:id" component={App} />
    </Router>
  );
};

export default AppRouter;
