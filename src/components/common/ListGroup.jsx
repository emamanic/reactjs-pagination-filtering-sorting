import React from 'react';

const ListGroup = ({
  genres,
  currentGenre,
  onHandleGenre,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            currentGenre === genre
              ? 'list-group-item active'
              : 'list-group-item'
          }
          onClick={() => onHandleGenre(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
