import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import ListGroup from './common/ListGroup';
import MovieTable from './MovieTable';
import _ from 'lodash';

class Movies extends Component {
  state = {
    genres: [],
    movies: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const currentGenre = { _id: '', name: 'All genres' };
    const genres = [currentGenre, ...getGenres()];
    this.setState({ movies: getMovies(), genres, currentGenre: currentGenre });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleChangePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleMoviesByGenre = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const movieIndex = movies.findIndex((m) => m._id === movie._id);
    movies[movieIndex].like = !movie.like;
    this.setState({ movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagingDate = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      currentGenre,
      sortColumn,
    } = this.state;

    const filtered =
      currentGenre && currentGenre._id
        ? allMovies.filter((m) => m.genre._id === currentGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, movies };
  };

  render() {
    const { length: totalMovies } = this.state.movies;

    const {
      genres,
      pageSize,
      currentPage,
      currentGenre,
      sortColumn,
    } = this.state;

    if (totalMovies === 0) return <p>There are not movies in the database.</p>;

    const { totalCount, movies } = this.getPagingDate();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={genres}
            currentGenre={currentGenre}
            onHandleGenre={this.handleMoviesByGenre}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database.</p>
          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            totalItems={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onChangePage={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
