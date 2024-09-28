'use client';

import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Recipe } from '@/lib/types';
import { httpGet, httpPost } from '@/lib/web';
import { Plus, Trash } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

export default function NewRecipe() {
  const [name, setName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);

  const submit = async () => {
    console.log('Creating new recipe!');

    const recipe: Partial<Recipe> = {
      _id: await httpGet('/new'),
      name,
      ingredients,
      instructions,
    };

    console.log(recipe);

    await httpPost(`/update/${recipe._id}`, recipe);

    console.log('Updated!');
  };

  return (
    <div className="rounded-lg border">
      <h1 className="m-4 text-4xl">New Recipe</h1>
      <div className="m-4 rounded-lg border p-4">
        <Input
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
          placeholder="Recipe Name"
        />
        <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
        <Instructions instructions={instructions} setInstructions={setInstructions} />
        <Button onClick={() => submit()}>Create</Button>
      </div>
    </div>
  );
}

interface IngredientsProps {
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
}

function Ingredients({ ingredients, setIngredients }: IngredientsProps) {
  function change(index: number, value: string) {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  }

  function remove(index: number) {
    if (ingredients.length <= 1) return;
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  }

  return (
    <div className="my-4 rounded-lg border p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>
              <div
                onClick={() => setIngredients([...ingredients, ''])}
                className="flex size-8 items-center justify-center rounded-lg hover:bg-gray-200"
              >
                <Plus className="block" />
              </div>
            </TableCell>
            <TableCell>
              <h2 className="text-3xl">Ingredients</h2>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.map((ingredient, inx) => (
            <TableRow key={inx}>
              <TableCell className="w-4">
                <div
                  onClick={() => remove(inx)}
                  className="flex size-8 items-center justify-center rounded-lg hover:bg-gray-200"
                >
                  <Trash />
                </div>
              </TableCell>
              <TableCell>
                <Input value={ingredient} onInput={(e) => change(inx, e.currentTarget.value)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

interface InstructionsProps {
  instructions: string[];
  setInstructions: Dispatch<SetStateAction<string[]>>;
}

function Instructions({ instructions, setInstructions }: InstructionsProps) {
  function change(index: number, value: string) {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  }

  function remove(index: number) {
    if (instructions.length <= 1) return;
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  }

  return (
    <div className="my-4 rounded-lg border p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>
              <div
                onClick={() => setInstructions([...instructions, ''])}
                className="flex size-8 items-center justify-center rounded-lg hover:bg-gray-200"
              >
                <Plus className="block" />
              </div>
            </TableCell>
            <TableCell>
              <h2 className="text-3xl">Instructions</h2>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {instructions.map((ingredient, inx) => (
            <TableRow key={inx}>
              <TableCell className="w-4">
                <div
                  onClick={() => remove(inx)}
                  className="flex size-8 items-center justify-center rounded-lg hover:bg-gray-200"
                >
                  <Trash />
                </div>
              </TableCell>
              <TableCell>
                <Textarea
                  className="h-24"
                  cols={3}
                  value={ingredient}
                  onInput={(e) => change(inx, e.currentTarget.value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
