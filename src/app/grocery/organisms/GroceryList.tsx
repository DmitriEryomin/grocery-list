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
import {useQuery} from '@tanstack/react-query';

import {getGroceries} from '../services';

type GroceryListProps = {
  onEdit: (id: string) => void;
};

export const GroceryList = ({onEdit}: GroceryListProps) => {
  const {data, isLoading} = useQuery({
    queryKey: ['groceries'],
    queryFn: getGroceries,
  });

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <List>
      {data?.map(({_id, ...grocery}) => (
        <ListItem
          key={_id}
          disablePadding
          secondaryAction={
            <IconButton edge="end" onClick={() => onEdit(_id)}>
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
            <ListItemText
              id={'item'}
              primary={grocery.name}
              secondary={`${grocery.quantityType}: ${grocery.quantity}`}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
