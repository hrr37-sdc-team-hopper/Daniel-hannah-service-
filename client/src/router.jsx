import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './index.jsx';

// function postReview() {
//   return (
//     <div>
//       <input type="submit" value="Post review" />
//     </div>
//   );
// }

// function bookId({ match }) {
//   return <h3>{match.params.id}</h3>;
// }

// function bookReviewsById({ match }) {
//   return (

//   )
// }

// const

// function AppRouter() {
//   return (
//     <Router>
//       <Route path="/books/:id" component={ReviewList}/>
//     </Router>
//   );
// }

const AppRouter = () => {
  return (
    <Router>
      <Route path="/books/:id" component={App} />
    </Router>
  );
};

export default AppRouter;
