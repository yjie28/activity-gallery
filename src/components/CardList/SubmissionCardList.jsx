import React from 'react';
import SubmissionCard from '../Cards/SubmissionCard';

import './ActivityCardList.css';

const SubmissionCardList = ({ submissionList }) => (
  <div className="activity-list">
    {submissionList.map((submission) => {
      // console.log(submission);
      return (
        <SubmissionCard
          key={submission.id}
          title={submission.title}
          author={submission.author}
          imageUrl={submission.imageUrl}
        />
      );
    })}
  </div>
);

export default SubmissionCardList;
