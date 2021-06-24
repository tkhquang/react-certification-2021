import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section>
      <Link to="/">home</Link>
      <span>404</span>
    </section>
  );
}

export default NotFoundPage;
