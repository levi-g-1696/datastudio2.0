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


export default function DestValueGrid(props) {
  //  let idFromParent = props.selectedID
    // const callback = props.getSelectedID

   // console.log(props.ID + "  selID:" + selectedID + "   propsID:" + props.ID)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                <Grid item xs={1} >
                    <Item>{props.ID}</Item>
                   
                </Grid>
                <Grid item xs={2}>
                    <Item>{props.Name}</Item>
                </Grid>
                <Grid item xs={2} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}>
                    <Item>{props.IP} </Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>{props.Port}</Item>
                </Grid>
                <Grid item xs={1.5}>
                    <Item>{props.Protocol}</Item>
                </Grid>

                <Grid item xs={2.5}>
                    <Item>
                        <Stack spacing={2} direction="row">


                            <Button size="small" variant="contained" onClick={event => props.onEdit(props.ID)} >edit</Button>
                            <Button size="small" variant="contained" color="error" onClick={event => props.onRemove(props.ID)} >remove</Button>

                        </Stack>

                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}