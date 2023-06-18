import {
  Button,
  Grid,
  Drawer,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Box,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type EditGroceryFormProps = {
  open: boolean;
  onClose: () => void;
};

export const EditGroceryForm = ({open, onClose}: EditGroceryFormProps) => {
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
        <TextField fullWidth label="Grocery Name" variant="standard" />
        <Grid container alignItems="end" justifyContent="space-between">
          <Grid item xs={6}>
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
        <Grid
          container
          item
          xs={5}
          sx={{marginLeft: 'auto'}}
          justifyContent="space-between"
        >
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Grid>
      </Box>
      <Grid
        container
        sx={{marginTop: 'auto', padding: 2}}
        justifyContent="space-between"
      >
        <Button variant="contained" onClick={onClose}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Grid>
    </Drawer>
  );
};
