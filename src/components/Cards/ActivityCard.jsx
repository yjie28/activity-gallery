import React from 'react';

import './ActivityCard.css';

const ActivityCard = ({ id, activityName, imageUrl, onSetGalleryIndex }) => {
  return (
    <div className="card" onClick={() => onSetGalleryIndex(id)}>
      <img className="activity-img" alt={`activity${id}`} src={imageUrl} />
      <p className="center">{activityName}</p>
    </div>
  );
};

export default ActivityCard;
