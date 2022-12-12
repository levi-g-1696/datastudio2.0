import  React from 'react';
import MainBody from './mainBody';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { purple, red } from '@mui/material/colors'
const removeRed= red[500]



export default function CrudButtonsPanelComp({handleClick}) {
        
        return (
          <Stack spacing={2} direction="row">
           
            <Button size="small" variant="contained" onClick={event => handleClick("create")} >new</Button>
            <Button size="small" variant="contained" onClick={event => handleClick("update")} >edit</Button> 
            <Button  size="small" variant="contained" color="error" onClick={event => handleClick("remove")} >remove</Button>

          </Stack>
        );
      }

  
  
  
  





