import {useMutation, useQueryClient} from '@tanstack/react-query';

import {Button, Grid, TextField, Stack, IconButton} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {QuantityFormControl} from '../molecules/QuantityFormControl';
import {useGroceryForm} from '../hooks/useGroceryForm';
import {createGrocery} from '../services';

export const GroceryForm = () => {
  const {
    handleChange,
    isValid,
    form,
    decrementQuantity,
    incrementQuantity,
    reset,
  } = useGroceryForm();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createGrocery,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({queryKey: ['groceries']});
    },
  });

  const addGrocery = () => {
    mutation.mutate({
      ...form,
      completed: false,
    });
  };

  return (
    <Stack spacing={2}>
      <Grid container alignItems="end" justifyContent="space-between">
        <Grid item xs={8}>
          <TextField
            value={form.name}
            onChange={handleChange('name')}
            fullWidth
            label="Grocery Name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={addGrocery}
            disabled={!isValid}
            fullWidth
            variant="contained"
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems="end" justifyContent="space-between">
        <QuantityFormControl
          value={form.quantity}
          type={form.quantityType}
          onValueChange={handleChange('quantity')}
          onTypeChange={handleChange('quantityType')}
        />
        <Grid container item xs={3} justifyContent="space-between">
          <IconButton onClick={decrementQuantity} disabled={!form.quantity}>
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={incrementQuantity}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
};
