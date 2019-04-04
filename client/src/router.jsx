import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function postReview() {
  return (
    <div>
      <input type="submit" value="Post review" />
    </div>
  );
}

function bookId({ match }) {
  return <h3>{match.params.id}</h3>;
}

function bookReviewsById({ match }) {
  return (

  )
}

const

function AppRouter() {
  return (
    <Router>
      <Route path="/books/:id" component={ReviewList}/>
    </Router>
  );
}
export default AppRouter;

// import React from 'react';
// import { withRouter } from 'react-router-dom';

// const component = ({ match }) => {
//   const id = match.params.id;
//   return (
//     <span>{id}</span>
//   );
// };

// export default withRouter(component);
