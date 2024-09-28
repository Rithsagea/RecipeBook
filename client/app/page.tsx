"use client";

import React from "react";
// Importing the logo (make sure the path is correct)
import logo from "../logo.png"; // Adjust the path as necessary

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
        <h1 style={styles.title}>Welcome to Harmony</h1>
        <p style={styles.description}>
          Cook, share, and create your cherished recipes all in one place.
        </p>
      </header>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={navigateToRecipes}>
          Explore Current Recipes
        </button>
        <button style={styles.button} onClick={navigateToAddRecipe}>
          Add New Recipe
        </button>
      </div>
    </div>
  );
}
