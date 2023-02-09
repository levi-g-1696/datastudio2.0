import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MonListHeadGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={1} >
          <Item>ID</Item>
        </Grid>
        <Grid item xs={3} >
          <Item>Name</Item>
        </Grid>
        <Grid item xs={5.5} >
          <Item>Monitor Names</Item>
        </Grid>
        <Grid item xs={2.5} >
          <Item>Action</Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}