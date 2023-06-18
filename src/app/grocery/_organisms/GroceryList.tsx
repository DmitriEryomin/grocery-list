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

export const GroceryList = () => {
  return (
    <List>
      <ListItem
        disablePadding
        secondaryAction={
          <IconButton edge="end">
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
