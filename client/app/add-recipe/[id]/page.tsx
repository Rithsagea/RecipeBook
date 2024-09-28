"use client"

import React, { useState } from "react";

const AddRecipe: React.FC = () => {
  // State to manage the list of ingredients
  const [ingredients, setIngredients] = useState([{ ingredient: "", quantity: "" }]);

  // Function to handle the addition of new ingredient and quantity fields
  const addIngredient = () => {
    setIngredients([...ingredients, { ingredient: "", quantity: "" }]);
  };

  // Handle input change for ingredient and quantity fields
  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with the following data:");
    console.log("Title, Category, Description, Ingredients:", { ingredients });
    // Add actual form submission logic here (e.g., send data to an API)
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Create Recipe</h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="type"
            name="type"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>

        {/* Add Ingredients Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Add Ingredients</h2>
            <button
              type="button"
              onClick={addIngredient}
              className="bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              +
            </button>
          </div>

          {/* Scrollable Box for Ingredients */}
          <div className="h-40 overflow-y-auto border border-gray-300 rounded-md p-4">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-4 mb-4">
                {/* Ingredient Input */}
                <input
                  type="text"
                  name="ingredient"
                  value={ingredient.ingredient}
                  placeholder="Ingredient"
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {/* Quantity Input */}
                <input
                  type="text"
                  name="quantity"
                  value={ingredient.quantity}
                  placeholder="Quantity"
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter a detailed description"
            rows={8}
            className="w-full border border-gray-300 rounded-md p-4 focus:ring-indigo-500 focus:border-indigo-500 resize-none overflow-auto"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
