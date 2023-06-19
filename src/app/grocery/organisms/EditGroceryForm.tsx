import {useEffect, useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Button, Grid, Drawer, TextField, IconButton, Box} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {QuantityFormControl} from '../molecules/QuantityFormControl';
import {useGroceryForm} from '../hooks/useGroceryForm';
import {editGrocery, getGrocery} from '../services';

type EditGroceryFormProps = {
  open: boolean;
  id: string | undefined;
  onClose: () => void;
};

const drawerAnimTimeOut = 250;

export const EditGroceryForm = ({id, open, onClose}: EditGroceryFormProps) => {
  const {
    handleChange,
    isValid,
    form,
    setValues,
    reset,
    decrementQuantity,
    incrementQuantity,
  } = useGroceryForm();

  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);

  const mutation = useMutation({
    mutationFn: editGrocery,
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries({queryKey: ['groceries']});
    },
  });

  const handleEditGrocery = () => {
    mutation.mutate({
      ...form,
      _id: id as string,
      completed: false,
    });
  };

  useEffect(() => {
    if (!id || !open) {
      return;
    }

    (async () => {
      const {_id, completed, ...values} = await getGrocery(id);
      setValues({
        ...values,
      });
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) {
      reset();
      setTimeout(() => {
        setIsLoading(true);
      }, drawerAnimTimeOut);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: '20rem',
          padding: 2,
          display: 'flex',
          gap: 2,
          flexDirection: 'column',
        }}
      >
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <TextField
              fullWidth
              label="Grocery Name"
              value={form.name}
              onChange={handleChange('name')}
              variant="standard"
            />
            <QuantityFormControl
              value={form.quantity}
              type={form.quantityType}
              xs={12}
              onValueChange={handleChange('quantity')}
              onTypeChange={handleChange('quantityType')}
            />
            <Grid
              container
              item
              xs={5}
              sx={{marginLeft: 'auto'}}
              justifyContent="space-between"
            >
              <IconButton onClick={decrementQuantity}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={incrementQuantity}>
                <AddIcon />
              </IconButton>
            </Grid>
          </>
        )}
      </Box>
      <Grid
        container
        sx={{marginTop: 'auto', padding: 2}}
        justifyContent="space-between"
      >
        <Button
          variant="contained"
          onClick={handleEditGrocery}
          disabled={!isValid || mutation.isLoading}
        >
          Save
        </Button>
        <Button disabled={mutation.isLoading} onClick={onClose}>
          Cancel
        </Button>
      </Grid>
    </Drawer>
  );
};
