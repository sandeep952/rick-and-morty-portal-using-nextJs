import React, { useContext } from 'react';
import { EpisodeContext } from '../context/EpisodeContext';
const Pagination = () => {
  const { state, changePage } = useContext(EpisodeContext);
  const { pages } = state;
  const pageArray = [];
  for (let i = 1; i <= pages; i++) {
    pageArray.push(i);
  }
  return (
    <nav className="pagination" role="navigation">
      <ul className="pagination-list">
        {pageArray.map((page) => (
          <li key={page} onClick={() => changePage(page)}>
            <a className="pagination-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
