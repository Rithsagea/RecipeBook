import { auth } from '@/auth';
import { Recipe } from '@/lib/types';
import { httpGet } from '@/lib/web';
import Link from 'next/link';

export default async function RecipeList() {
  const session = await auth();
  const recipes: Recipe[] = await httpGet('/list', session);

  return (
    <div>
      <h1 className="text-4xl">Recipe List</h1>

      <article className="prose">
        <ul className="list-disc">
          {recipes.map((r, inx) => (
            <li key={inx}>
              <Link href={`/recipe/${r._id}`}>{r.name ?? 'Unnamed Recipe'}</Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
