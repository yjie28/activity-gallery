import React from 'react';

const BackButton = ({ onRouteChange }) => {
  return (
    <div>
      <button onClick={() => onRouteChange('home')}>Back to Main Page</button>
    </div>
  );
};

export default BackButton;
