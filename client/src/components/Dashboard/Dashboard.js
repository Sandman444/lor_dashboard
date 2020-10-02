import React from 'react';
import styles from './dashboard.module.css';

import Profile from './Profile';
import Graph from './Graph';
import PastGames from './PastGames';

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Graph />
      <PastGames />
    </div>
  );
};

export default Dashboard;
