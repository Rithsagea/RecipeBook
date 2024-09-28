"use client";

import React from "react";
import logo from "../logo.png"; // Adjust the path as necessary
import { Poppins } from "next/font/google"; // Optional if you're using Next.js font optimization

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
};

// Define inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Playfair Display", // Set the Poppins font
    backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/03/32/75/39/1000_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg")`,
    backgroundSize: "cover", // Ensure the image covers the entire area
    backgroundPosition: "center", // Center the background image
    color: "#333",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh", // Ensure the container takes up full height
  },
  header: {
    marginBottom: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: add a white overlay for better readability
    padding: "20px",
    borderRadius: "10px",
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
    backgroundColor: "#6A9E43",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 10px",
    fontWeight: 700, // Make buttons bold
  },
};

export default WelcomePage;