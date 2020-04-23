import React, { Component } from 'react';

// import { Route, Switch, Link } from 'react-router-dom';

import ActivityCardList from './components/CardList/ActivityCardList';
import SubmissionCardList from './components/CardList/SubmissionCardList';
import BackButton from './components/BackButton';

import { ACTIVITY_DATA } from './data/activity';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      route: 'home',
      index: null,
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onSetGalleryIndex = (index) => {
    this.setState({ index: index - 1 }, () => {
      // console.log(this.state.index);
      this.onRouteChange(`activity${index}`);
    });
  };

  render() {
    // console.log(ACTIVITY_DATA);
    const { route, index } = this.state;
    return (
      <div>
        {route === 'home' ? (
          <ActivityCardList
            activityList={ACTIVITY_DATA}
            onSetGalleryIndex={this.onSetGalleryIndex}
          />
        ) : (
          <div>
            <BackButton onRouteChange={this.onRouteChange} />
            <SubmissionCardList
              submissionList={ACTIVITY_DATA[index].submissions}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
