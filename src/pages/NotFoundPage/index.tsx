import React from "react";
// styles
import "./styles.css";

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <p className="error-text">Ooops!</p>
      <h1 className="error-title">404</h1>
      <p className="error-text">Page not found!</p>
      <a className="error-button" href="/">
        Go back home
      </a>
    </div>
  );
};

export default NotFoundPage;
