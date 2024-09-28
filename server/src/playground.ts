import axios from "axios";

const URL = "http://localhost:8000";

async function get(path: string) {
  const res = await axios.get(`${URL}${path}`);
  return res.data;
}

async function post(path: string, data: any) {
  const res = await axios.post(`${URL}${path}`, data);
  return res.data;
}

const TEST_RECIPE: Recipe = {
  _id: "66f8621f983872c0488d87b0",
  name: "Beef Wellington",
  ingredients: [
    "Beef",
    "Bacon",
    "Salt",
    "Pepper",
    "Mushrooms",
    "Flour",
  ],
  instructions: [
    "Season the beef",
    "Cook the mushrooms",
    "Sear the beef",
    "Wrap the wellington",
    "Bake the wellington"
  ]
}

export async function runTest() {
  const recipesList = await get('/list');
  console.log("Found Recipes: ");
  console.log(recipesList);

  const id = TEST_RECIPE._id;
  console.log(`Updating Recipe: ${id}`);
  console.log(await post(`/update/${id}`, TEST_RECIPE));

  console.log(`Getting Recipe: ${id}`);
  console.log(await get(`/recipe/${id}`));
}

runTest();
