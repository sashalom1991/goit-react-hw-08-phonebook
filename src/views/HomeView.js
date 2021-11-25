import React from 'react';

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1>
    Hello! Welcome to our service!
    </h1>
  </div>
);

export default HomeView;