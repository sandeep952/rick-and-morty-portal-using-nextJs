import React from 'react';

export default function Loading() {
  return (
    <React.Fragment>
      <progress className="progress is-small is-danger" width="100"></progress>
    </React.Fragment>
  );
}
