'use client';

import React, { useState } from 'react';

const AddRecipe: React.FC = () => {
  // State to manage the list of ingredients
  const [ingredients, setIngredients] = useState([{ ingredient: '', quantity: '' }]);

  // Function to handle the addition of new ingredient and quantity fields
  const addIngredient = () => {
    setIngredients([...ingredients, { ingredient: '', quantity: '' }]);
  };

  // Handle input change for ingredient and quantity fields
  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {};

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with the following data:');
    console.log('Title, Category, Description, Ingredients:', { ingredients });
    // Add actual form submission logic here (e.g., send data to an API)
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Create Recipe</h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="type" className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="type"
            name="type"
            className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
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
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Add Ingredients</h2>
            <button
              type="button"
              onClick={addIngredient}
              className="rounded bg-indigo-600 px-2 py-1 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              +
            </button>
          </div>

          {/* Scrollable Box for Ingredients */}
          <div className="h-40 overflow-y-auto rounded-md border border-gray-300 p-4">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="mb-4 flex gap-4">
                {/* Ingredient Input */}
                <input
                  type="text"
                  name="ingredient"
                  value={ingredient.ingredient}
                  placeholder="Ingredient"
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-1/2 rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                {/* Quantity Input */}
                <input
                  type="text"
                  name="quantity"
                  value={ingredient.quantity}
                  placeholder="Quantity"
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-1/2 rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter a detailed description"
            rows={8}
            className="w-full resize-none overflow-auto rounded-md border border-gray-300 p-4 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
