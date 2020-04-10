import React, { Component } from 'react';
import Like from './common/Like';
import Table from './common/Table';

class MovieTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'stock', label: 'Stock' },
    { path: 'pricePerDay', label: 'Tax Rate' },
    {
      id: 'like',
      content: (movie) => (
        <Like movie={movie} onHandleLike={this.props.onLike} />
      ),
    },
    {
      id: 'delete',
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={movies}
      />
    );
  }
}

export default MovieTable;
