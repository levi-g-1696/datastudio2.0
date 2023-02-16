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

export default function ValsGrid(props) {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={1} >
          <Item>{props.columns[0]}</Item>
        </Grid>
        <Grid item xs={3} >
          <Item>{props.columns[1]}</Item>
        </Grid>
        <Grid item xs={1} >
          <Item>{props.columns[2]}</Item>
        </Grid>
        <Grid item xs={3} >
          <Item>{props.columns[3]}</Item>
        </Grid>
        <Grid item xs={4} >
          <Item>{props.children}</Item>
        </Grid>     
      </Grid>
    </Box>
  );
}