"use client";

import React from "react";
// Importing the logo (make sure the path is correct)
import logo from "logo.png"; // Adjust the path as necessary

const WelcomePage: React.FC = () => {
  // Navigate to the recipes page
  const navigateToRecipes = () => {
    window.location.href = "/recipes"; // Change the route as needed
  };

  // Navigate to the add new recipe page
  const navigateToAddRecipe = () => {
    window.location.href = "/add-recipe"; // Change the route as needed
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={logo} alt="Cookbook Logo" style={styles.logo} />{" "}
        {/* Add logo here */}
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
    fontFamily: "Arial, sans-serif",
    backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/03/32/75/39/1000_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff", // Change text color for visibility against the background
    padding: "20px",
    textAlign: "center",
    height: "100vh", // Full viewport height
  },
  header: {
    marginBottom: "40px",
  },
  logo: {
    maxWidth: "150px", // Adjust size as needed
    marginBottom: "20px", // Space below the logo
  },
  title: {
    fontSize: "2.5em",
    color: "#fff", // Ensure title stands out against the background
  },
  description: {
    fontSize: "1.2em",
    color: "#fff", // Ensure description stands out against the background
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.1em",
    backgroundColor: "#ff6347",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 10px",
  },
};

export default WelcomePage;
