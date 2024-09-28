// Mark the component as a client component
"use client";

import React from 'react';

const WelcomePage: React.FC = () => {
  // Navigate to the recipes page
  const navigateToRecipes = () => {
    window.location.href = '/recipes'; // Change the route as needed
  };

  // Navigate to the add new recipe page
  const navigateToAddRecipe = () => {
    window.location.href = '/add-recipe'; // Change the route as needed
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Your Personal Recipe Book</h1>
        <p style={styles.description}>
          Discover, organize, and create your favorite recipes all in one place.
        </p>
      </header>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={navigateToRecipes}>
          Explore Recipes
        </button>
        <button style={styles.button} onClick={navigateToAddRecipe}>
          Add New Recipe
        </button>
      </div>
    </div>
  );
};

// Define inline styles (optional)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f8f8',
    color: '#333',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5em',
    color: '#2d2d2d',
  },
  description: {
    fontSize: '1.2em',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.1em',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
  },
};

export default WelcomePage;
