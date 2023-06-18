'use client';

import {Stack, Container} from '@mui/material';

import {GroceryForm, GroceryList, EditGroceryForm} from './organisms';

export default function GroceryTemplate() {
  return (
    <Container maxWidth="sm" sx={{paddingTop: 4}}>
      <Stack spacing={4}>
        <GroceryForm />
        <GroceryList />
      </Stack>
    </Container>
  );
}
