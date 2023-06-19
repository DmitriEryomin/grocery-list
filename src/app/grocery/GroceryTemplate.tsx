'use client';

import {useState} from 'react';
import {Stack, Container} from '@mui/material';

import {GroceryForm, GroceryList, EditGroceryForm} from './organisms';

export default function GroceryTemplate() {
  const [isEditing, setIsEditing] = useState(false);
  const [groceryId, setGroceryId] = useState<string>();

  const openEditForm = (id: string) => {
    setGroceryId(id);
    setIsEditing(true);
  };

  const closeEditForm = () => {
    setIsEditing(false);
  };

  return (
    <Container maxWidth="sm" sx={{paddingTop: 4}}>
      <Stack spacing={4}>
        <GroceryForm />
        <GroceryList onEdit={openEditForm} />
      </Stack>
      <EditGroceryForm
        id={groceryId}
        open={isEditing}
        onClose={closeEditForm}
      />
    </Container>
  );
}
