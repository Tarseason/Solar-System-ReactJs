import React from 'react';
import Title from './Title';
import Misssions from '../data/missions';
import MissionsCard from './MissionsCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {Misssions.map((x) => (<MissionsCard
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
