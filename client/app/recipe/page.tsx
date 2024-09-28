import { Recipe } from "@/lib/types";
import Link from "next/link";

export default async function RecipeList() {

  const res = await fetch(`http://${process.env.BACKEND_URL}/list`);
  const recipes = await res.json() as Recipe[];

  return (
    <div>
      <h1 className="text-4xl">Recipe List</h1>

      <article className="prose">
        <ul className="list-disc">
          {recipes.map((r, inx) =>
            <li key={inx}>
              <Link href={`/recipe/${r._id}`}>
                {r.name ?? "Unnamed Recipe"}
              </Link>
            </li>
          )}
        </ul>
      </article>
    </div>
  );
}
