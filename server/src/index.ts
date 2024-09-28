import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { findRecipe, listRecipes, newRecipe, updateRecipe } from './database'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/list', async (c) => {
  return c.json(await listRecipes());
});

app.get('/new', async (c) => {
  return c.json(await newRecipe());
});

app.get('/recipe/:id', async (c) => {
  const { id } = c.req.param();
  const recipe = await findRecipe(id);
  return c.json(recipe);
});

app.post('/update/:id', async (c) => {
  const { id } = c.req.param();
  const body: Recipe = await c.req.json();
  await updateRecipe(id, body);
  return c.text(id);
});

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
