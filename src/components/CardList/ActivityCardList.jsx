import React from 'react';
import ActivityCard from '../Cards/ActivityCard';

import './ActivityCardList.css';

const ActivityCardList = ({ activityList, onSetGalleryIndex }) => {
  return (
    <div className="activity-list">
      {activityList.map((activity, i) => {
        return (
          <ActivityCard
            key={i}
            id={activity.id}
            activityName={activity.name}
            imageUrl={activity.imageUrl}
            onSetGalleryIndex={onSetGalleryIndex}
          />
        );
      })}
    </div>
  );
};

export default ActivityCardList;
