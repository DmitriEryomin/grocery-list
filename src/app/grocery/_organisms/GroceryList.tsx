'use client';

import {
  List,
  Checkbox,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';

type GroceryListProps = {
  onEdit: () => void;
};

export const GroceryList = ({onEdit}: GroceryListProps) => {
  return (
    <List>
      <ListItem
        disablePadding
        secondaryAction={
          <IconButton edge="end" onClick={onEdit}>
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked
              tabIndex={-1}
              disableRipple
              inputProps={{'aria-labelledby': 'item'}}
            />
          </ListItemIcon>
          <ListItemText id={'item'} primary={`Line item `} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
