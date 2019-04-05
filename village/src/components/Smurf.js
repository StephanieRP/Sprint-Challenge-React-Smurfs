import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  console.log("smurf", props);

  const removeSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  };
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <button> Edit Smurf </button>
        <button onClick={removeSmurf}> Delete Smurf </button>
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
