import { config } from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

config();
const client = new MongoClient(process.env.DATABASE_URL ?? "");
const database = client.db("database");
const recipes = database.collection("recipes");

export async function listRecipes(): Promise<Recipe[]> {
  return await recipes.find().toArray() as unknown as Recipe[];
}

export async function newRecipe(): Promise<Recipe> {
  const res = await recipes.insertOne({});
  return { _id: res.insertedId.toString() };
}

export async function updateRecipe(id: string, recipe: Recipe) {
  const dbId = new ObjectId(id);
  recipes.replaceOne({ _id: new ObjectId(dbId) }, {
    ...recipe,
    _id: dbId,
  });
}

export async function findRecipe(id: string): Promise<Recipe> {
  return await recipes.findOne({ _id: new ObjectId(id) }) as unknown as Recipe;
}
