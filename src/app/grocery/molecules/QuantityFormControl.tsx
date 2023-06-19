import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

import {QuantityType} from '../enums/QuantityType';

type QuantityFormControlProps = {
  value: number | '';
  xs?: number;
  type: QuantityType;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTypeChange: (e: SelectChangeEvent) => void;
};

export const QuantityFormControl = ({
  xs = 8,
  value,
  type,
  onValueChange,
  onTypeChange,
}: QuantityFormControlProps) => {
  return (
    <Grid
      container
      item
      alignItems="end"
      xs={xs}
      justifyContent="space-between"
    >
      <Grid item xs={5}>
        <TextField
          value={value}
          onChange={onValueChange}
          label={type}
          variant="standard"
          type="number"
        />
      </Grid>
      <Grid item xs={5}>
        <FormControl fullWidth variant="standard">
          <InputLabel id="quantityType">Quantity type</InputLabel>
          <Select
            id="quantityType"
            label="Quantity type"
            onChange={onTypeChange}
            value={type}
          >
            <MenuItem value={QuantityType.count}>{QuantityType.count}</MenuItem>
            <MenuItem value={QuantityType.kgs}>{QuantityType.kgs}</MenuItem>
            <MenuItem value={QuantityType.liter}>{QuantityType.liter}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
