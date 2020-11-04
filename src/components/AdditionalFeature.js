import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.buy(props.feature)} className="button">Add</button>
      {props.name} (+{props.price})
    </li>
  );
};

export default AdditionalFeature;
