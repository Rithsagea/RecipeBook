import { Playfair_Display, Lato } from 'next/font/google'; // Import both fonts

// Load the Playfair Display font for the title
const playfairDisplay = Playfair_Display({
  weight: ['700'], // Bold for the title
  subsets: ['latin'],
});

// Load the Lato font for the rest of the content
const lato = Lato({
  weight: ['400', '700'], // Regular and bold for the content
  subsets: ['latin'],
});

export default function RecipeDetails() {
  // Static recipe details for Beef Wellington
  const recipe = {
    name: 'Beef Wellington',
    image: 'sample.png', // Image path from /public/sample.png
    ingredients: [
      '2 lb beef tenderloin',
      '2 tbsp olive oil',
      '1/2 lb mushrooms, finely chopped',
      '1/2 lb puff pastry',
      '4 slices prosciutto',
      '1 egg, beaten',
      'Salt and pepper to taste',
    ],
    description:
      'Beef Wellington is a savory dish consisting of a seared beef tenderloin coated with a mushroom duxelles and wrapped in puff pastry, then baked until golden and delicious.',
  };

  return (
    <div className={`${lato.className} max-w-3xl mx-auto p-6`}>
      {/* Big Title with Fancy Font */}
      <h1 className={`${playfairDisplay.className} text-5xl font-bold text-center mb-8`}>
        {recipe.name}
      </h1>

      {/* Big Image */}
      <div className="w-full h-96 mb-8">
        <img
          src={`/${recipe.image}`} // Reference to sample.png in the public folder
          alt={recipe.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Ingredients Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 text-lg">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      {/* Description Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Description</h2>
        <p className="text-lg leading-relaxed">{recipe.description}</p>
      </section>
    </div>
  );
}
