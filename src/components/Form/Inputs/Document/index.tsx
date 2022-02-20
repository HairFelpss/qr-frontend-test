import React from 'react';
import { Link } from 'react-router-dom';

export const DocumentInput: React.FC = () => {
  return (
    <>
      <main>
        <h2>Welcome to the Document!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};
