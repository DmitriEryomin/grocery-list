import {useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {
  Button,
  Grid,
  TextField,
  Stack,
  IconButton,
  SelectChangeEvent,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {QuantityFormControl} from '../molecules/QuantityFormControl';
import {QuantityType} from '../enums/QuantityType';
import {createGrocery} from '../services';

export const GroceryForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number | ''>(1);
  const [quantityType, setQuantityType] = useState(QuantityType.kgs);

  const queryClient = useQueryClient();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setQuantity('');
      return;
    }
    setQuantity(parseInt(e.target.value));
  };

  const handleChangeQuantityType = (e: SelectChangeEvent) => {
    setQuantityType(e.target.value as QuantityType);
  };

  const decrement = () => {
    setQuantity((prevValue) => (prevValue as number) - 1);
  };

  const increment = () => {
    setQuantity((prevValue) => (prevValue as number) + 1);
  };

  const isAddActive = name && quantity;
  const isDecrementActive = !!quantity;

  const mutation = useMutation({
    mutationFn: createGrocery,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({queryKey: ['groceries']});
    },
  });

  const addGrocery = () => {
    mutation.mutate({
      name,
      quantity: quantity as number,
      quantityType,
    });
  };

  return (
    <Stack spacing={2}>
      <Grid container alignItems="end" justifyContent="space-between">
        <Grid item xs={8}>
          <TextField
            value={name}
            onChange={handleNameChange}
            fullWidth
            label="Grocery Name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={addGrocery}
            disabled={!isAddActive}
            fullWidth
            variant="contained"
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems="end" justifyContent="space-between">
        <QuantityFormControl
          value={quantity}
          type={quantityType}
          onValueChange={handleChangeQuantity}
          onTypeChange={handleChangeQuantityType}
        />
        <Grid container item xs={3} justifyContent="space-between">
          <IconButton onClick={decrement} disabled={!isDecrementActive}>
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={increment}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
};
