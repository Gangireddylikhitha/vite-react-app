import React from 'react';

function SeasonApp() {
  const seasons = ['Autumn', 'Winter', 'Spring', 'Summer'];
  return (
    <div>
      {seasons.map((season) => (
        <SeasonDisplay key={season} season={season} />
      ))}
    </div>
  );
}

function SeasonDisplay({ season }) {
  const getSeasonBackground = () => {
    switch (season) {
      case 'Autumn':
        return 'orange';
      case 'Winter':
        return 'lightblue';
      case 'Spring':
        return 'lightgreen';
      case 'Summer':
        return 'yellow';
      default:
        return 'white';
    }
  };

  return (
    <div style={{ backgroundColor: getSeasonBackground(), height: '100vh', padding: '20px' }}>
      <h1>{season}</h1>
    </div>
  );
}

export default SeasonApp;
