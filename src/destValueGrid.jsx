import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ControlledCheckbox from './checkedComp';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function DestValueGrid(props) {
    let idFromParent = props.selectedID
   // const callback = props.getSelectedID
    const [selectedID, setSelectedID] = React.useState(idFromParent)
    const statval= (selectedID == props.ID)
    console.log(props.ID +"  selID:"+ selectedID +"   propsID:"+props.ID)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                <Grid item xs={0.5} >
                    <Item>{props.ID}</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>{props.Name}</Item>
                </Grid>
                <Grid item xs={1} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}>
                    <Item>{props.IP} </Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>{props.Port}</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>{props.Protocol}</Item>
                </Grid>

                <Grid item xs={0.5}>
                    <Item>
                        <ControlledCheckbox statval={statval} callback={(stat) => {
                            if (stat) {
                                setSelectedID(props.ID)
                                props.getSelectedID(selectedID)
                            }

                        }} />
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}