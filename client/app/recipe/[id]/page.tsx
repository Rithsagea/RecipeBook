import { auth } from '@/auth';
import { Recipe } from '@/lib/types';
import { httpGet } from '@/lib/web';

interface RecipeParams {
  id: string;
}

export default async function RecipePage({ params }: { params: RecipeParams }) {
  const { id } = params;

  const session = await auth();
  const recipe: Recipe = await httpGet(`/recipe/${id}`, session);

  return (
    <div>
      <h1 className="text-6xl">{recipe.name}</h1>
      <h1 className="text-4xl">Ingredients</h1>
      <article className="prose">
        <ol className="list-decimal">
          {recipe.ingredients?.map((i, inx) => <li key={inx}>{i}</li>)}
        </ol>
      </article>

      <h1 className="text-4xl">Steps</h1>
      <article className="prose">
        <ol className="list-decimal">{recipe.steps?.map((i, inx) => <li key={inx}>{i}</li>)}</ol>
      </article>
    </div>
  );
}
