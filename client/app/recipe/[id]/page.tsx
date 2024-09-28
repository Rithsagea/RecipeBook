import { Recipe } from '@/lib/types';
import { httpGet } from '@/lib/web';

interface RecipeParams {
  id: string;
}

export default async function RecipePage({ params }: { params: RecipeParams }) {
  const { id } = params;

  const recipe: Recipe = await httpGet(`/recipe/${id}`);

  return (
    <div>
      <h1 className="text-6xl">{recipe?.name ?? "Unnamed Recipe"}</h1>
      <h1 className="text-4xl">Ingredients</h1>
      <article className="prose">
        <ol className="list-decimal">
          {recipe.ingredients?.map((i, inx) => <li key={inx}>{i}</li>)}
        </ol>
      </article>

      <h1 className="text-4xl">Instructions</h1>
      <article className="prose">
        <ol className="list-decimal">{recipe.instructions?.map((i, inx) => <li key={inx}>{i}</li>)}</ol>
      </article>
    </div>
  );
}
