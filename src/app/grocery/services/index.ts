import {Grocery} from '../types/Grocery';

export async function getGroceries(): Promise<Grocery[]> {
  const response = await fetch('/groceries');
  const {groceries} = await response.json();
  return groceries;
}

export async function getGrocery(id: string): Promise<Grocery> {
  const response = await fetch(`/groceries/${id}`);
  const {grocery} = await response.json();
  return grocery;
}

export async function createGrocery(grocery: Omit<Grocery, '_id'>) {
  return await fetch('/groceries', {
    method: 'POST',
    body: JSON.stringify(grocery),
  });
}

export async function editGrocery({_id, ...grocery}: Grocery) {
  return await fetch(`/groceries/${_id}`, {
    method: 'PUT',
    body: JSON.stringify(grocery),
  });
}
