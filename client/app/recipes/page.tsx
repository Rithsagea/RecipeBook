import { Recipe } from '@/lib/types';
import { httpGet } from '@/lib/web';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default async function RecipeList() {
  const recipes: Recipe[] = await httpGet('/list');

  return (
    <div>
      <h1 className="m-4 text-4xl">Recipe List</h1>
      <SearchBar />
      <div className="flex flex-col rounded-lg border p-2">
        {recipes.map((r, inx) => (
          <RecipeCard key={inx} recipe={r} />
        ))}
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <Link href="/new">
      <div className="m-2 flex size-10 items-center justify-center rounded-lg border hover:bg-gray-200">
        <Plus className="block" />
      </div>
    </Link>
  );
}

interface RecipeCardProps {
  recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe._id}`}>
      <div className="my-2 w-full rounded-lg border bg-card p-2 hover:bg-gray-200">
        <h2 className="text-2xl">{recipe?.name ?? 'Unnamed Recipe'}</h2>
      </div>
    </Link>
  );
}
