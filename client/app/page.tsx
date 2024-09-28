"use client";

import React from "react";
// Importing the logo (make sure the path is correct)
import logo from "logo.png"; // Adjust the path as necessary

// Import the font from Google Fonts using the Next.js font optimization if applicable
import { Poppins } from "next/font/google"; // Optional if you're using Next.js font optimization

// Use Google Fonts link for non-Next.js apps in <head> of _document.js or HTML file.
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />

// Use the Poppins font if using Next.js font optimization
const poppins = Poppins({
  weight: ["400", "700"], // Regular and bold
  subsets: ["latin"],
});

// Define a functional component for the Welcome Page
const WelcomePage: React.FC = () => {
  const navigateToRecipes = () => {
    window.location.href = "/recipes"; // Change the route as needed
  };

  const navigateToAddRecipe = () => {
    window.location.href = "/add-recipe"; // Change the route as needed
  };

  return (
    <div className={poppins.className} style={styles.container}>
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
    backgroundColor: "#f8f8f8",
    color: "#333",
    padding: "20px",
    textAlign: "center",
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
    color: "#2d2d2d",
  },
  description: {
    fontSize: "1.2em",
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
