import {useState} from 'react';
import {QuantityType} from '../enums/QuantityType';
import {SelectChangeEvent} from '@mui/material';

export type GroceryForm = {
  name: string;
  quantity: number;
  quantityType: QuantityType;
};

export function useGroceryForm() {
  const [form, setForm] = useState<GroceryForm>({
    name: '',
    quantity: 1,
    quantityType: QuantityType.kgs,
  });

  return {
    handleChange:
      (key: 'name' | 'quantity' | 'quantityType') =>
      (
        e:
          | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          | SelectChangeEvent
      ) => {
        let value: string | number = e.target.value;
        if (key === 'quantity') {
          value = e.target.value === '' ? value : parseInt(e.target.value);
        }
        setForm((prevForm) => ({...prevForm, [key]: value}));
      },
    isValid: !!form.name && !!form.quantity && !!form.quantityType,
    setValues: (values: Partial<GroceryForm>) => {
      setForm((prevForm) => ({...prevForm, ...values}));
    },
    decrementQuantity: () => {
      setForm((prevForm) => ({...prevForm, quantity: prevForm.quantity - 1}));
    },
    incrementQuantity: () => {
      const value = !form.quantity ? 1 : form.quantity + 1;
      setForm((prevForm) => ({...prevForm, quantity: value}));
    },
    reset: () => {
      setForm({
        name: '',
        quantity: 1,
        quantityType: QuantityType.kgs,
      });
    },
    form,
  };
}
