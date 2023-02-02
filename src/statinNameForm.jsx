import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function StationNameForm(props) {
  //  let idFromParent = props.selectedID
    // const callback = props.getSelectedID

   // console.log(props.ID + "  selID:" + selectedID + "   propsID:" + props.ID)
    return (<>
        <h6>Station name:  </h6>  <span> <h4> {props.Name} </h4> </span>
        <Box sx={{ flexGrow: 1 }}>
       
            <Grid container spacing={1} >
               
          
                <Grid item xs={8}>
                    <Item>
                        <Stack spacing={2} direction="row">

                        
                            <Button size="small" variant="contained" onClick={event => props.onEdit({ID:props.ID,Name:props.Name,MonitorNames:props.MonitorNames})} >edit</Button>
                            <Button size="small" variant="contained" color="error" onClick={event => props.onRemove(props.ID)} >remove</Button>

                        </Stack>

                    </Item>
                </Grid>

            </Grid>
        </Box>
   
    
    </>
     )
       
}