import * as React from 'react';
import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
import { TextField } from "@mui/material"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BasicTextFields() {
  const [txt, setTxt] = useState("")

  const onFieldChange = (e) => { setTxt(e.target.value) }
  setTxt(txt)

const submit = () => { alert("get txt :" + this.txt) }
return (
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >


    <h4> basic fiels</h4>

    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={onFieldChange} value={this.txt} />
    {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    {/* <Button variant="outlined" onClick={this.submit}>submit</Button> */}
  </Box>

)}
