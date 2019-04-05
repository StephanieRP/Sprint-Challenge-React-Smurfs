import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleSmurf = props => {
  const smurf = props.smurfs.find(smurf => {
    return `${smurf.id}` === props.match.params.smurfsid;
  });
  if (!smurf) return <h3>Where are the smurfs hiding...</h3>;
  return (
    <div>
      <Link exact to="/" className="btn">
        Go Back
      </Link>
      <div className="Smurf SingleSmurf">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
        <div>
          <button> Edit Smurf </button>
          <button> Delete Smurf </button>
        </div>
      </div>
    </div>
  );
};

SingleSmurf.defaultProps = {
  smurf: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      height: PropTypes.string,
      age: PropTypes.number
    })
  )
};

export default SingleSmurf;
