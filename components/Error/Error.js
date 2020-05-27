import React from 'react';

export default function Error({ errorMessage }) {
  return (
    <div className="has-text-centered">
      <h2 className="title has-text-danger">{errorMessage}</h2>
    </div>
  );
}
