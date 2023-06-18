import {Drawer} from '@mui/material';

type EditGroceryFormProps = {
  open: boolean;
  onClose: () => void;
};

export const EditGroceryForm = ({open, onClose}: EditGroceryFormProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <h1>Hello</h1>
    </Drawer>
  );
};
