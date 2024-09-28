import { Recipe } from "@/lib/types";

interface RecipeParams {
  id: string;
}

export default async function Home({ params }: { params: RecipeParams }) {
  const { id } = params;

  const res = await fetch(`http://${process.env.BACKEND_URL}/recipe/${id}`);
  const recipe: Recipe = await res.json();

  return (
    <div>
      <h1 className="text-6xl">{recipe.name}</h1>
      <h1 className="text-4xl">Ingredients</h1>
      <article className="prose">
        <ol className="list-decimal">
          {recipe.ingredients?.map((i, inx) =>
            <li key={inx}>{i}</li>
          )}
        </ol>
      </article>

      <h1 className="text-4xl">Steps</h1>
      <article className="prose">
        <ol className="list-decimal">
          {recipe.steps?.map((i, inx) =>
            <li key={inx}>{i}</li>
          )}
        </ol>
      </article>
    </div>
  );
}
