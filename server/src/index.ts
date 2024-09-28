import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { findRecipe, listRecipes, newRecipe, updateRecipe } from './database'
import { cors } from 'hono/cors'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/list', async (c) => {
  return c.json(await listRecipes());
});

app.get('/new', async (c) => {
  console.log("Creating new recipe!");
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
  console.log(`Updating recipe ${id}`)
  await updateRecipe(id, body);
  return c.text(id);
});

app.use('/*', cors(
  {
    origin: "*",
    allowHeaders: ["*"],
    allowMethods: ["POST", "GET"]
  }
))

const port = process.env.PORT as unknown as number;
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port: port
})
