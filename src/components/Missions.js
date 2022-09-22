import React from 'react';
import Title from './Title';
import MissionCard from './MissionsCard';
import Misssions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {Misssions.map((x) => (<MissionCard
          key={ x.name }
          name={ x.name }
          year={ x.year }
          country={ x.country }
          destination={ x.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
