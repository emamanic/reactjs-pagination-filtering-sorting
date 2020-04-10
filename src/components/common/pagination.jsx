import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({ totalItems, pageSize, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages === 1) return null;

  const pages = _.range(1, totalPages + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <button className="page-link" onClick={() => onChangePage(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
