import {
  List,
  Checkbox,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Skeleton,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

import {toggleGroceryComplete, getGroceries} from '../services';

type GroceryListProps = {
  onEdit: (id: string) => void;
};

export const GroceryList = ({onEdit}: GroceryListProps) => {
  const queryClient = useQueryClient();

  const {data, isLoading} = useQuery({
    queryKey: ['groceries'],
    queryFn: getGroceries,
  });

  const mutation = useMutation({
    mutationFn: toggleGroceryComplete,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['groceries']});
    },
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
          <ListItemButton
            onClick={() => {
              mutation.mutate({
                id: _id,
                completed: !grocery.completed,
              });
            }}
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={grocery.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{'aria-labelledby': _id}}
              />
            </ListItemIcon>
            <ListItemText
              id={_id}
              sx={{
                '& .MuiListItemText-primary': {
                  textDecoration: grocery.completed ? 'line-through' : 'normal',
                },
              }}
              primary={grocery.name}
              secondary={`${grocery.quantityType}: ${grocery.quantity}`}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
