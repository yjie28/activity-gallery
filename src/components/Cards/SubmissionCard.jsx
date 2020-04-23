import React from 'react';

import './ActivityCard.css';

const SubmissionCard = ({ id, title, author, imageUrl }) => {
  return (
    <div className="card">
      <img className="activity-img" alt={`submission${id}`} src={imageUrl} />
      <div className="center">
        <p>{title}</p>
        <p>{`By: ${author}`}</p>
      </div>
    </div>
  );
};

export default SubmissionCard;
