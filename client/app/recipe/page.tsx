import { auth } from '@/auth';
import { Recipe } from '@/lib/types';
import { httpGet } from '@/lib/web';
import Image from 'next/image';

export default async function RecipeDetails() {
  const session = await auth();
  const recipe: Recipe = await httpGet('/recipe/beef-wellington', session); // Fetch Beef Wellington recipe details

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Big Title */}
      <h1 className="text-5xl font-bold text-center mb-8">{recipe.name ?? 'Beef Wellington'}</h1>

      {/* Big Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src={recipe.image ?? '/path-to-default-image.jpg'} // Provide a default image if the recipe doesn't have one
          alt={recipe.name ?? 'Beef Wellington'}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Ingredients Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-lg">{ingredient}</li>
          )) ?? <p>No ingredients available.</p>}
        </ul>
      </section>

      {/* Description Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Description</h2>
        <p className="text-lg leading-relaxed">{recipe.description ?? 'No description available.'}</p>
      </section>
    </div>
  );
}
