import React from 'react';

const Like = ({ movie, onHandleLike }) => {
  const classes = movie.like ? 'fa fa-heart' : 'fa fa-heart-o';

  return <i className={classes} onClick={() => onHandleLike(movie)}></i>;
};

export default Like;
