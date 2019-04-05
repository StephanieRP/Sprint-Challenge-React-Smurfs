import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <button> Edit Smurf </button>
        <button> Delete Smurf </button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  smurf: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      height: PropTypes.string,
      age: PropTypes.number
    })
  )
};

export default Smurf;
