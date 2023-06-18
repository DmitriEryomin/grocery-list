'use client';

import {useState} from 'react';
import {Stack, Container} from '@mui/material';

import {GroceryForm, GroceryList, EditGroceryForm} from './_organisms';

export default function Grocery() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <Container maxWidth="sm" sx={{paddingTop: 4}}>
      <Stack spacing={4}>
        <GroceryForm />
        <GroceryList />
      </Stack>
      <EditGroceryForm
        onClose={() => {
          setIsEditing(false);
        }}
        open={isEditing}
      />
    </Container>
  );
}