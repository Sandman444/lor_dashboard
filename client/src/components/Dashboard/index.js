import React from 'react';
import styles from './dashboard.module.css';

import Info from './Info';
import Graph from './Graph';
import Pedistals from './Pedistals';

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Info />
      <Graph />
      <Pedistals />
    </div>
  );
};

export default Dashboard;
