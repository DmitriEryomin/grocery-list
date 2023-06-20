import {Box, Skeleton} from '@mui/material';

export function EditGroceryFormSkeleton() {
  return (
    <>
      <Skeleton variant="rounded" height={48} />
      <Box sx={{display: 'flex', gap: 2}}>
        <Skeleton variant="rounded" sx={{flexBasis: '50%'}} height={48} />
        <Skeleton variant="rounded" sx={{flexBasis: '50%'}} height={48} />
      </Box>
      <Skeleton
        variant="rounded"
        sx={{marginLeft: 'auto'}}
        width={133}
        height={48}
      />
    </>
  );
}
