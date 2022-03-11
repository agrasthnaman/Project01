import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import './Pagination.scss';

const Pagination = ({ page, pagesList, onPageChange }) => {
  const pageActiveClass = currentPage => (
    currentPage === page ? 'pagination_item-active' : ''
  );

  return (
    <div className="pagination_container">
      {
        R.map(
          page => (
            <div
              key={page}
              role="button"
              tabIndex="0"
              style={{ outline: 'none' }}
              onClick={() => onPageChange(page)}
              className={`pagination_item ${pageActiveClass(page)}`}
            >
              {page}
            </div>
          ),
          pagesList,
        )
      }
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  pagesList: PropTypes.array,
  onPageChange: PropTypes.func,
};

export default Pagination;
