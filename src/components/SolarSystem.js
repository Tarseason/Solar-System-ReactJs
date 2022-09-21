import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((x) => (<PlanetCard
          key={ x.name }
          planetName={ x.name }
          planetImage={ x.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
