import {Grocery} from '../types/Grocery';

export async function getGroceries(): Promise<Grocery[]> {
  const response = await fetch('/groceries');
  const {groceries} = await response.json();
  return groceries;
}

export async function createGrocery(grocery: Omit<Grocery, '_id'>) {
  return await fetch('/groceries', {
    method: 'POST',
    body: JSON.stringify(grocery),
  });
}
