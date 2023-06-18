'use client';

import {
  Button,
  Grid,
  TextField,
  Stack,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const GroceryForm = () => {
  return (
    <Stack spacing={2}>
      <Grid container alignItems="end" justifyContent="space-between">
        <Grid item xs={8}>
          <TextField fullWidth label="Grocery Name" variant="standard" />
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems="end" justifyContent="space-between">
        <Grid
          container
          item
          alignItems="end"
          xs={8}
          justifyContent="space-between"
        >
          <Grid item xs={5}>
            <TextField label="Kilograms" variant="standard" type="number" />
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="quantityType">Quantity type</InputLabel>
              <Select id="quantityType" label="Quantity type" value="kg">
                <MenuItem value="count">count</MenuItem>
                <MenuItem value="kg">kg</MenuItem>
                <MenuItem value="liter">liter</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={3} justifyContent="space-between">
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
};
